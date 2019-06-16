

function createEmptyStruct(ast) {
    const identifier = ast.body.filter(node => {
        if(node.type === 'ClassDeclaration') {
            return node.id.name
        }
        return false;
    }).map(e => e.id.name);

    return `\n
    struct ${identifier} : View {
        
    }
    \n`
}

module.exports = {
    createEmptyStruct
};

