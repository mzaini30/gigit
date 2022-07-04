#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { $ } from "zx";
const { parse } = JSON;

let fileGigit: any = readFileSync("gigit.json").toString();
fileGigit = parse(fileGigit);

async function jalankan(): Promise<void> {
  for (let n in fileGigit) {
    await $`cp .git/hooks/${n}.sample .git/hooks/${n}`;
    writeFileSync(`.git/hooks/${n}`, fileGigit[n]);
  }
}
jalankan();
