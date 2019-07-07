const prettier = require('prettier');

const prettifySrc = function(source) {
    return prettier.format(source, {
        parser: 'json'
    });
}

const parser = require('swift-ast-parser');

module.exports = function(jsAst, parserOpts) {

    const ast = parser.parse('', parserOpts);
    process.exit(0)
    Object.keys(transformations).forEach(transformation => {
        const f = transformations[transformation];
        f(ast, jsAst);
    });
    const source = ast.toSource();
    return source;
}