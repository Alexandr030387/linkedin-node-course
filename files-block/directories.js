const fs = require('fs');

// fs.renameSync('./assets/logs', './accounts/logs');
// console.log('Logs folder moved');

// fs.rmdir('./assets', function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('./assets directoryremoved');
//     }
// });

fs.readdirSync('./accounts').forEach((file) => {
    fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log('Files removed');

fs.rmdirSync('./accounts');

console.log('Folder removed');