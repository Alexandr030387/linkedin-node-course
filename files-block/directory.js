const fs = require('fs');

if (fs.existsSync('your-file-here')) {
    console.log('already there');
} else {
    fs.mkdir('your-file-here', function(err) {
        if (err) {
            console.log(`ERROR: ${err}`);
        } else {
            console.log('Directory created');
        }
    });
}