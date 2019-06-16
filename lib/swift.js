const { spawn } = require('child_process');

module.exports = function(content, parserOpts) {

    const spawnSwift = spawn('ls');

    spawnSwift.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    spawnSwift.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    });

    spawnSwift.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    return content;
}