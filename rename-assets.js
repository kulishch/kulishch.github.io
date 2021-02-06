const fs = require('fs');

fs.readdir('.', (err, files) => {
    files
        .filter((file) => {
            return file.endsWith('.png');
        })
        .forEach(file => {
            fs.renameSync(file, file.replace(/\s/gi, '-').toLowerCase());    
        });
});