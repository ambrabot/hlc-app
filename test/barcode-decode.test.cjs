#!/usr/bin/env node
/**
 * barcode-decode.test.cjs — banco de provas do scanner de código de barras do HLC.
 *   node test/barcode-decode.test.cjs [url]      (padrão: produção)
 *
 * Por que existe: 09-10/ago/2026 a Julia reportou "o scanner não está lendo código de barras
 * de alimento" (iPhone: a câmera abre e nunca reconhece). Sem este harness a investigação vira
 * palpite — e naquela noite eu cheguei a concluir três coisas erradas antes de medir:
 *   1. "a lib de barcode não está carregada"  → estava (carga sob demanda, /vendor/, 375KB)
 *   2. "/api/clean está 404"                  → eu testei a URL errada; a API é um Worker
 *                                                separado (hlcapp-api…workers.dev) e responde certo
 *   3. "ZXing lê melhor, é só trocar"         → deu 0/5 por integração minha errada; corrigida,
 *                                                deu EXATAMENTE 3/5, igual ao decodificador atual
 *
 * O que o harness estabeleceu, e que muda o conserto:
 *   · backend OK (Nutella e Coca-Cola voltam completos do Open Food Facts)
 *   · decodificador lê foto NÍTIDA e tolera até ~8° de inclinação
 *   · falha em foto LONGE + TORTA + DESFOCADA — e nem trocar de decodificador, nem recortar
 *     e ampliar, nem desgirar recuperam: a informação foi destruída pelo blur. É física.
 *   → logo o gargalo é a CAPTURA (uma única foto), não a decodificação. O conserto é dar
 *     muitas tentativas (scanner ao vivo) + uma saída garantida (digitar o número).
 *
 * Rode este arquivo antes e depois de qualquer mexida no scanner. O número que importa é
 * quantas condições passam — nunca "abriu a câmera".
 */
// puppeteer não é dependência deste repo (o app é estático, sem build). Resolve do workspace,
// onde ele já existe. Sem isto o harness morre com MODULE_NOT_FOUND — e teste que não roda
// não vale nada (pego na primeira execução, 10/ago).
const path = require('path');
let p;
for (const base of [null, path.join(process.env.USERPROFILE || process.env.HOME, 'OneDrive/Documents/Projetos/Claude-Automacao')]) {
  try { p = base ? require(require.resolve('puppeteer', { paths: [base] })) : require('puppeteer'); break; } catch { /* tenta o próximo */ }
}
if (!p) {
  console.error('  puppeteer não encontrado. Rode a partir de um projeto que o tenha, ex.:');
  console.error('    cd Claude-Automacao && node ../hlc-app/test/barcode-decode.test.cjs');
  process.exit(2);
}
const URL_PADRAO = 'https://app.healthyfoodrecipesclub.com/';

const CASOS = [
  ['perto, reto, nitido',     { escala: 1.00, giro: 0,  blur: 0 }, true ],
  ['medio, reto, com fundo',  { escala: 0.55, giro: 0,  blur: 0 }, true ],
  ['medio, 8 graus torto',    { escala: 0.55, giro: 8,  blur: 0 }, true ],
  ['longe, torto, leve blur', { escala: 0.40, giro: 12, blur: 1 }, false],  // conhecido: falha
  ['longe, torto, desfocado', { escala: 0.30, giro: 15, blur: 2 }, false],  // conhecido: falha
];

(async () => {
  const url = process.argv[2] || URL_PADRAO;
  const b = await p.launch({ args: ['--no-sandbox'] });
  const pg = await b.newPage();
  await pg.setViewport({ width: 390, height: 844, isMobile: true });
  await pg.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));

  const res = await pg.evaluate(async (CASOS) => {
    const carrega = (s) => new Promise((ok, no) => { const e = document.createElement('script'); e.src = s; e.onload = ok; e.onerror = no; document.head.appendChild(e); });
    try { await carrega('/vendor/html5-qrcode.min.js'); } catch { return { erro: 'nao carregou /vendor/html5-qrcode.min.js' }; }
    await carrega('https://cdn.jsdelivr.net/npm/jsbarcode@3.11.6/dist/JsBarcode.all.min.js');
    if (!window.Html5Qrcode) return { erro: 'lib carregou mas window.Html5Qrcode nao existe' };

    const f = window.Html5QrcodeSupportedFormats;
    const cfg = { formatsToSupport: [f.QR_CODE, f.EAN_13, f.EAN_8, f.UPC_A, f.UPC_E, f.CODE_128, f.CODE_39],
                  experimentalFeatures: { useBarCodeDetectorIfSupported: true }, verbose: false };
    if (!document.getElementById('readerFile')) { const d = document.createElement('div'); d.id = 'readerFile'; document.body.appendChild(d); }

    const foto = (codigo, { escala, giro, blur }) => {
      const bc = document.createElement('canvas');
      window.JsBarcode(bc, codigo, { format: 'EAN13', width: 3, height: 120, displayValue: true, margin: 12, background: '#fff' });
      const W = 1400, H = 1050, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
      const c = cv.getContext('2d');
      c.fillStyle = '#c9c2b6'; c.fillRect(0, 0, W, H);
      for (let i = 0; i < 9000; i++) { c.fillStyle = `rgba(0,0,0,${Math.random() * .09})`; c.fillRect(Math.random() * W, Math.random() * H, 2, 2); }
      c.save(); c.translate(W / 2, H / 2); c.rotate(giro * Math.PI / 180);
      if (blur) c.filter = `blur(${blur}px)`;
      const w = bc.width * escala, h = bc.height * escala;
      c.drawImage(bc, -w / 2, -h / 2, w, h); c.restore();
      return cv;
    };
    const ler = async (cv, codigo) => {
      const blob = await new Promise((ok) => cv.toBlob(ok, 'image/jpeg', .9));
      const sc = new window.Html5Qrcode('readerFile', cfg);
      try { const t = await sc.scanFile(new File([blob], 'p.jpg', { type: 'image/jpeg' }), false); return String(t).includes(codigo); }
      catch { return false; } finally { try { await sc.clear(); } catch {} }
    };

    const C = '5449000000996';
    const out = [];
    for (const [rotulo, cf, esperado] of CASOS) out.push({ rotulo, esperado, leu: await ler(foto(C, cf), C) });
    return { out };
  }, CASOS);

  await b.close();

  if (res.erro) { console.log('  ERRO DE AMBIENTE: ' + res.erro); process.exit(1); }
  let regressoes = 0, melhorias = 0;
  console.log(`  banco de provas do decodificador — ${url}\n`);
  for (const r of res.out) {
    let marca = r.leu === r.esperado ? (r.leu ? 'ok    ' : 'falha conhecida') : (r.leu ? 'MELHOROU' : 'REGREDIU');
    if (!r.leu && r.esperado) regressoes++;
    if (r.leu && !r.esperado) melhorias++;
    console.log(`  ${marca.padEnd(16)} ${r.rotulo}`);
  }
  console.log(`\n  ${res.out.filter((r) => r.leu).length}/${res.out.length} condicoes lidas.`);
  if (melhorias) console.log(`  ${melhorias} condicao(oes) que antes falhava(m) agora passa(m) — atualize o esperado neste arquivo.`);
  if (regressoes) { console.log(`  ${regressoes} REGRESSAO(OES): condicao que passava parou de passar.`); process.exit(1); }
  process.exit(0);
})();
