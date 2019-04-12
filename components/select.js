"use strict";
const rl = require('readline');

module.exports = (dataToSelect = []) => {

    if (!dataToSelect) {
        return Promise.reject("string erro");
    }

    let list = dataToSelect.map((item, index) => {
        if (index == 0) {
            return { data: item, select: true }
        }
        return { data: item, select: false }

    })

    const readline = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })

    const print = () => {
        readline.setPrompt(renderSelect(list))
        readline.write('\u001b[?25l');
        // process.stdout.write('\u001b[?s26l');
        readline.prompt();
        process.stdout.clearLine();
    }

    const renderSelect = (data = []) => {
        return `${data.reduce((reduce, list) => {
            if (list.select === true) {
                return `${reduce}\n \x1b[32m-> ${list.data}\x1b[0m`;
            } else {
                return `${reduce}\n   ${list.data}`;
            }
        }, "")}\n`;
    }

    const pressUp = () => {
        const getCurrentTrue = list.reduce((reduce, data, index) => {
            if (data.select) {
                return index;
            }
            return reduce
        }, 0)

        if (getCurrentTrue === 0) {
            return;
        }

        list[getCurrentTrue].select = false;
        list[getCurrentTrue - 1].select = true;
        print();

    }

    const pressDown = () => {
        const getCurrentTrue = list.reduce((reduce, data, index) => {
            if (data.select) {
                return index;
            }
            return reduce
        }, 0)


        if (getCurrentTrue === list.length - 1) {
            return;
        }

        list[getCurrentTrue].select = false;
        list[getCurrentTrue + 1].select = true;
        print();

    }

    const pressEnter = (resolver) => {
        readline.close();
        process.stdin.removeAllListeners('keypress');
        resolver(list.filter((data) => data.select)[0].data)
        process.stdout.write('\u001b[?25h')

    }

    process.on("exit", () => {
        process.stdout.write('\u001b[?25h')
    })


    return new Promise((resolve, reject) => {

        print();
        process.stdin.on("keypress", (s, data) => {
            switch (data.name) {
                case 'up': pressUp(); break;
                case 'down': pressDown(); break;
                case 'return': pressEnter(resolve); break;
                default: process.stdout.clearLine(); break;
            }

        })

    })
}







