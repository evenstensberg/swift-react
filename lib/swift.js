const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const prettifySrc = function(source) {
    return prettier.format(source, {
        parser: 'json'
    });
}


module.exports = function(content, parserOpts) {

    const getExampleFile = path.resolve(process.cwd(), 'example', 'swiftTest.swift');
    const spawnSwift = exec(`xcrun swiftc -frontend -emit-syntax ${getExampleFile}`);

    let buff = ''
    spawnSwift.stdout.on('data', (data) => {
        buff += data;
    });

    spawnSwift.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    spawnSwift.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        const newPath = path.resolve(process.cwd(), 'example', 'astdump.json'); 
        fs.writeFile(newPath, prettifySrc(buff), 'utf8', function(err) {
            console.log(err)
        })
    });


    return content;
}