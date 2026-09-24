import ts from 'typescript';
import { mkdir, readFile, writeFile, cp } from 'node:fs/promises';
const config = ts.readConfigFile('tsconfig.json', ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, '.');
const program = ts.createProgram(parsed.fileNames, {...parsed.options, noEmit:false, outDir:'dist/src'});
const diagnostics = ts.getPreEmitDiagnostics(program);
if (diagnostics.length) {
  console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {getCanonicalFileName:f=>f,getCurrentDirectory:ts.sys.getCurrentDirectory,getNewLine:()=> '\n'}));
  process.exit(1);
}
await mkdir('dist/src', {recursive:true});
program.emit();
await cp('assets', 'dist/assets', {recursive:true});
await cp('src/styles.css', 'dist/src/styles.css');
const { renderSections } = await import('../dist/src/sections.js');
const sections = renderSections();
const footerStart = sections.indexOf('<footer');
const html = (await readFile('index.html','utf8'))
  .replace('./src/main.ts','./src/main.js')
  .replace('<div id="remaining-content"></div>',sections.slice(0,footerStart))
  .replace('</main>',`</main>${sections.slice(footerStart)}`);
await writeFile('dist/index.html',html);
console.log('TypeScript checked. Static production site built in dist/.');
