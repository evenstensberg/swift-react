const fs = require('fs');

const transformations = require('./utils/transformations');
const getAST = require('./utils/ast-utils');

module.exports = function(content, parserOpts) {
    const ast = getAST(content);
    return ast;
/*     let newAst = `import SwiftUI\n`;

    Object.keys(transformations).forEach(transformation => {
        const f = transformations[transformation];
        newAst += f(ast);
    });
 
    return newAst;*/
}