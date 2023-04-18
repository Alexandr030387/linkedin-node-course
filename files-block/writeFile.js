const fs = require('fs');

let md = `
    This is a new file
    ==================

    ES6 strings are cool. They honor witespace.

    * Template strings
    * Node File System
    * Readline SLIs
`;

fs.writeFile('javascript.md', md.trim(), function(err) {
    if (err) {
        throw err;
    }

    fs.appendFileSync(
        'javascript.md',
        '\n\n### Node.js Everyone!'
    );
    console.log('Markdown created');
})