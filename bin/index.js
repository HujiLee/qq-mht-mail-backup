#!/usr/bin/env node
const process = require("process");
const fs = require("fs");
const path = require("path");
const is_valid_path = require("is-valid-path");
const _debug = require("debug")("[bin/index.js]"); _debug.enabled = true;
const lib = require("lib-qq-mht-mail-backup");

let cwd = process.cwd();

let mht_path = process.argv[process.argv.length - 1];
if (!path.isAbsolute(mht_path)) {
    mht_path = path.join(cwd, mht_path);
}
// if (!is_valid_path(mht_path)) {
//     _debug(`NOT VALID PATH : ${mht_path} `);
//     process.exit(1);
// }
if (!fs.existsSync(mht_path)) {
    _debug(`NOT EXITSTS : ${mht_path}`);
    process.exit(1);
}

//check required ENV
let env = process.env;
for(let i of ["SMTP_SERVER","MAIL_USER","MAIL_PASS","MAIL_RECEIVERS"]){
    if(!env[i]){
        _debug(`ENV "${i}" is required!`);
        process.exit(1);
    }
}

lib.Parse(mht_path).then(() => {
    _debug("all done");
    process.exit(0);
}).catch((error)=>{
    _debug("something goes bad");
    _debug(error);
    process.exit(1);
})

// process.a