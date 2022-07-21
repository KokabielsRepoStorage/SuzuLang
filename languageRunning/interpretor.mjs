import process, { argv } from "process";
import { parse } from "./parse.mjs";
import fs from "fs";
import path from "node:path";

var inputFilesDir = "";
var outputFileDir = "";
var inputFiles = [];

for(let i = 0; process.argv.length; i++) {
    if(argv[i] === "--input") inputFilesDir = argv[i + 1];
    if(argv[i] === "--output") outputFileDir = argv[i + 1];
    if(!process.argv[i]) break;
    if(inputFilesDir && outputFileDir) break;
}

console.log("Warning! This code has to be in a single folder, the code cannot read dir names right now!\n\nIf you don't know what this means, if you have files put in multiple folders, the code will not run correctly!\n\n");

if(!inputFilesDir || !outputFileDir) {
    console.log("No input or output file specified (Specify them by --input (folderPath) and --output (folderPath)");
    process.exit(1);
}

fs.readdirSync(inputFilesDir).forEach(file => {
    inputFiles.push(file);
});

console.log(inputFiles);

for(let i = 0; i < inputFiles.length; i++) {
    parse(`${inputFilesDir}/${inputFiles[i]}`, `${outputFileDir}/${path.basename(inputFiles[i]).replace(".suzu", "")}.mjs`)
}