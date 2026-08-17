const puppeteer=require('puppeteer');
(async()=>{
  const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:390,height:844,deviceScaleFactor:2});
  await p.goto('http://localhost:8137/index.html',{waitUntil:'networkidle2'});
  await new Promise(r=>setTimeout(r,1500));
  await p.evaluate(()=>{const e=document.querySelector('[data-lang="en"]');if(e)e.click();});
  await new Promise(r=>setTimeout(r,900));
  await p.screenshot({path:'_preview/nav-fixed.png'}); // viewport only (not fullPage) → shows nav at bottom
  await b.close();console.log('shot ok');
})().catch(e=>{console.error(e.message);process.exit(1)});
