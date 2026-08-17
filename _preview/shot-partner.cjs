const puppeteer=require('puppeteer');
const F='file:///C:/Users/julia/OneDrive/Documents/Projetos/hlc-app/partnerships/index.html';
(async()=>{
  const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:1280,height:900,deviceScaleFactor:1});
  await p.goto(F,{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,1200));
  await p.screenshot({path:'partner-desktop.png',fullPage:true});
  await p.setViewport({width:390,height:844,deviceScaleFactor:2});
  await p.goto(F,{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,800));
  await p.screenshot({path:'partner-mobile.png',fullPage:true});
  await b.close(); console.log('shots ok');
})().catch(e=>{console.error(e.message);process.exit(1)});
