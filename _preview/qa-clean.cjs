const puppeteer=require('puppeteer');
(async()=>{
  const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:390,height:844,deviceScaleFactor:2});
  const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto('http://localhost:8124/index.html',{waitUntil:'networkidle2'});
  await new Promise(r=>setTimeout(r,1800));
  // go to Clean tab (logged out)
  await p.evaluate(()=>{ const b=document.querySelector('[data-tab="clean"]'); if(b) b.click(); });
  await new Promise(r=>setTimeout(r,900));
  const state=await p.evaluate(()=>{
    const gate=document.getElementById('cleanGate'), tool=document.getElementById('cleanTool'), q=document.getElementById('cleanQuotaLine');
    const vis=e=>e?getComputedStyle(e).display:'(none-el)';
    return {gate:vis(gate), tool:vis(tool), quota:q?q.textContent:'(no quota line)'};
  });
  console.log('STATE', JSON.stringify(state));
  console.log('CONSOLE_ERRORS', errs.slice(0,5));
  await p.screenshot({path:'_preview/qa-clean.png'});
  await b.close();
})().catch(e=>{console.error('ERR',e.message);process.exit(1)});
