import * as helpers from './modules/helpers.js';
import { readFileSync } from 'fs';

helpers.init();

const filedata = readFileSync('./DB/test.txt').toString();
helpers.log(filedata);
