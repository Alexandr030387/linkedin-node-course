const fs = require('fs');

fs.readFile('./readme.md', 'UTF-8', (err, ipsum) => {
    console.log(ipsum);
});

console.log('Reading the file content....');