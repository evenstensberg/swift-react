const fs = require('fs');
const path = require('path');
const parser = require('./lib/parser');
// node ./index.js ./example/counter.js ./example/Counter.swift
   
const reactInputFile = process.argv[2];
const swiftInputFile = process.argv[3];


const reactPath = path.resolve(process.cwd(), reactInputFile);
const swiftPath = path.resolve(process.cwd(), swiftInputFile);


const reactContents = fs.readFileSync(reactPath, 'utf8');
const swiftContents = fs.readFileSync(swiftPath, 'utf8');

parser(reactContents);
