const espree = require("espree");

module.exports = function(src) {
    return espree.parse(src, {

        // attach range information to each node
        range: false,
    
        // attach line/column location information to each node
        loc: false,
    
        // create a top-level comments array containing all comments
        comment: false,
    
        // create a top-level tokens array containing all tokens
        tokens: false,
    
        // Set to 3, 5 (default), 6, 7, 8, 9, or 10 to specify the version of ECMAScript syntax you want to use.
        // You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), or 2019 (same as 10) to use the year-based naming.
        ecmaVersion: 5,
    
        // specify which type of script you're parsing ("script" or "module")
        sourceType: "module",
    
        // specify additional language features
        ecmaFeatures: {
    
            // enable JSX parsing
            jsx: true,
    
            // enable return in global scope
            globalReturn: false,
    
            // enable implied strict mode (if ecmaVersion >= 5)
            impliedStrict: false
        }
    });
}