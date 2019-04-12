"use strict";
const rl = require('readline');

module.exports = (title) => {
    const readline = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise((resolve, reject) => {
        readline.question(title, (response) => {
            resolve(response);
            readline.close()
        })
    })
}
