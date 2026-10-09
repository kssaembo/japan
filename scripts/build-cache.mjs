import {readdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
async function walk(dir,prefix=''){const out=[];for(const f of await readdir(dir,{withFileTypes:true})){if(f.name==='sw.js'||f.name==='cache-manifest.json')continue;const p=`${prefix}/${f.name}`;if(f.isDirectory())out.push(...await walk(`${dir}/${f.name}`,p));else out.push(p);}return out;}
const files=await walk('dist');const hash=createHash('sha256');for(const file of files)hash.update(await readFile(`dist${file}`));const version=hash.digest('hex').slice(0,16);await writeFile('dist/cache-manifest.json',JSON.stringify({version,files}));
const source=await readFile('public/sw.js','utf8');await writeFile('dist/sw.js',source.replaceAll('__BUILD_VERSION__',version));
console.log(`Offline cache manifest: ${files.length} files, build ${version}`);
