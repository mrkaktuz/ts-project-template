import * as fs from 'fs';

export function init() {
    // Create here all needed files and write default data
    if (!fs.existsSync('DB')) fs.mkdirSync('DB');
    fs.writeFileSync('./DB/test.txt', 'test data');
}

export function log(text: string) {
    console.log('Log: ' + text);
}
