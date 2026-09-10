/* Resilient Three.js loader: try several CORS-capable CDNs before failing. */
const SOURCES=[
  "https://unpkg.com/three@0.179.1/build/three.module.js",
  "https://cdn.jsdelivr.net/npm/three@0.179.1/build/three.module.js",
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r179/three.module.js"
];
async function load(){
  let lastError=null;
  for(const src of SOURCES){
    try{return await import(src)}
    catch(e){lastError=e;console.warn("Three.js CDN failed",src,e)}
  }
  throw new Error("Не удалось загрузить Three.js. Проверь интернет-соединение. Последняя ошибка: "+(lastError?.message||"unknown"));
}
const THREE=await load();
export default THREE;
