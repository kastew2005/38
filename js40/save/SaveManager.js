export class SaveManager{
 static key="voxel-survival-save-v5"; static backupKey="voxel-survival-save-v5-backup";
 static save(data){try{const old=localStorage.getItem(this.key);if(old)localStorage.setItem(this.backupKey,old);localStorage.setItem(this.key,JSON.stringify({...data,version:5,updated:Date.now()}));return true}catch{return false}}
 static load(){try{const raw=localStorage.getItem(this.key)||localStorage.getItem("voxel-survival-save-v4");if(!raw)return null;const v=JSON.parse(raw);if(!v||typeof v!=='object')return null;if(v.inventory&&!Array.isArray(v.inventory.slots))delete v.inventory;if(v.changes&&!Array.isArray(v.changes))v.changes=[];if(v.player){for(const k of ['x','y','z','health','hunger'])if(v.player[k]!=null&&!Number.isFinite(Number(v.player[k])))delete v.player[k]}return v}catch{return null}}
 static loadBackup(){try{const raw=localStorage.getItem(this.backupKey);return raw?JSON.parse(raw):null}catch{return null}}
 static clear(){localStorage.removeItem(this.key);localStorage.removeItem("voxel-survival-save-v4")}
}
