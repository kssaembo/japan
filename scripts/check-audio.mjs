import {readFile,stat} from 'node:fs/promises';
const source=await readFile('src/content/audio.ts','utf8');const manifest=JSON.parse(source.slice(source.indexOf('[',source.indexOf('=',source.indexOf('export const audioManifest'))+1),source.lastIndexOf(']')+1));let ok=0,missing=0,invalid=0;
for(const entry of manifest){try{const bytes=await readFile(`public${entry.path}`);const mp3=bytes.subarray(0,3).toString()==='ID3'||(bytes[0]===255&&(bytes[1]&224)===224);if(bytes.length<1000||!mp3){invalid++;console.log(`INVALID ${entry.path}`);}else ok++;}catch{missing++;}}
console.log(`MP3 file header check: ${ok} present, ${missing} missing, ${invalid} invalid of ${manifest.length}. Header check does not prove decode/pronunciation quality; use the host audio tests.`);
if(missing||invalid)process.exitCode=2;
