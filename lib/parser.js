

const SwiftParser = require('./swift');
const JSParser = require('./javascript');

module.exports = function(content, lang, opts) {

    if(lang === 'js') {
        return JSParser(content, opts)
    } else {
        return SwiftParser(content, opts)
    }
}