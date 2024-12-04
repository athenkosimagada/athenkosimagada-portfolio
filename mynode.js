const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'}); ;

const envFile = `export const environment = {
    EMAILJS_PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY}',
    EMAILJS_SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID}',
    EMAILJS_TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID}',
};
`;
const targetPath = path.join(__dirname, './src/environments/environment.development.ts');
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
    }
});