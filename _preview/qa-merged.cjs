const puppeteer=require('puppeteer');
(async()=>{
  const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
  const p=await b.newPage();
  const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text())}); p.on('pageerror',e=>errs.push('PAGEERR: '+e.message));
  await p.setViewport({width:390,height:844,deviceScaleFactor:2});
  await p.goto('http://localhost:8141/index.html',{waitUntil:'networkidle2'});
  await new Promise(r=>setTimeout(r,1500));
  await p.evaluate(()=>{const e=document.querySelector('[data-lang="en"]');if(e)e.click();});
  await new Promise(r=>setTimeout(r,700));
  // click coach nav
  const clicked = await p.evaluate(()=>{const e=document.querySelector('[data-tab="coach"]');if(e){e.click();return true}return false});
  await new Promise(r=>setTimeout(r,900));
  await p.screenshot({path:'_preview/merged-coach.png'});
  console.log('coach nav clicked:', clicked);
  console.log('console errors:', errs.slice(0,5));
  await b.close();
})().catch(e=>{console.error(e.message);process.exit(1)});
