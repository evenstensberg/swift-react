const fs = require('fs');
const j = require('jscodeshift');
module.exports = function(content, parserOpts) {
    const ast = j(content);

    ast.find(j.Identifier).forEach(body => {
        if(body.value.name === "React") {
            const classBody = body.parentPath.parentPath;
            // equivalent to struct [nameIdentifier] : View 
            // Name swift file as [nameIdentifier]View.swift
            console.log(body.parentPath.parentPath)
        }
    })

    const newAst = ast.toSource();
   /*  fs.writeFileSync(process.cwd() + '/new_parsed.js', newAst); */
}