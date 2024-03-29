import { fileTests } from '@lezer/generator/dist/test';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import { parser } from '../dist/index.js';

const caseDir = url.fileURLToPath(new URL('.', import.meta.url).toString());

for (let file of fs.readdirSync(caseDir)) {
  if (!/\.txt$/.test(file)) continue;

  let name = /^[^.]*/.exec(file)[0];
  describe(name, () => {
    for (let {name, run} of fileTests(fs.readFileSync(path.join(caseDir, file), 'utf8'), file))
      it(name, () => run(parser));
  });
}
