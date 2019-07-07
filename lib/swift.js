const prettier = require('prettier');

const prettifySrc = function(source) {
    return prettier.format(source, {
        parser: 'json'
    });
}

const parser = require('hevia');

module.exports = function(content, parserOpts) {
    const ast = parser.tokenize('var a:Int = 10', parserOpts);
    const source = parser.toSource();
    return source;
}