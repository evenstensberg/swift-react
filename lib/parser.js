

const fs = require('fs');
const JSParser = require('./javascript');
const SwiftParser = require('./swift');

module.exports = function(content, opts) {
    const ast = JSParser(content, opts);
    const swiftContent = SwiftParser(ast);

/*     fs.writeFileSync(process.cwd() + '/SwiftExample.swift', swiftContent); */
}