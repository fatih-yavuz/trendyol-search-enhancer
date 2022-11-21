const fs = require('fs');

const template = fs.readFileSync(
    './dist/inject-template.js',
    {encoding: 'utf8', flag: 'r'},
);
const bundle = fs.readFileSync(
    './dist/main.js',
    {encoding: 'utf8', flag: 'r'},
);

const contentToInject = template.replace('${replace-me}', bundle);

fs.writeFileSync('./dist/src/inject/inject.js', contentToInject, {flag: 'w'});
fs.unlinkSync('./dist/inject-template.js');
fs.unlinkSync('./dist/main.js');
fs.copyFileSync('./src/background.js', './dist/src/bg/background.js');
