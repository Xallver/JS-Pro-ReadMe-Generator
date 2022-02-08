const fs = require('fs');

// write readme file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'ReadMe created!'
            });
        });
    });
};

module.exports = {writeFile};