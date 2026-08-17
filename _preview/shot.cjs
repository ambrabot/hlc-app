const puppeteer=require('puppeteer');
const URL='file:///C:/Users/julia/OneDrive/Documents/Projetos/hlc-app/_preview/attract-engage-convert.html';
(async()=>{
  const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:1200,height:900,deviceScaleFactor:1.5});
  await p.goto(URL,{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,1400));
  await p.screenshot({path:'preview.png',fullPage:true});
  await b.close();console.log('shot ok');
})().catch(e=>{console.error(e.message);process.exit(1)});
