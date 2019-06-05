
const rl = require("readline");

let list = [];


const selectInput = (dataToSelect = [], lablel = '') => {

    if (!validStringData(dataToSelect)) {
        return Promise.reject(" erro data to select can not null")
    };

    printLabel(lablel)


    const readline = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })

    list = createList(dataToSelect)


    process.on("exit", () => {
        process.stdout.write('\u001b[?25h')

    })



    return new Promise((resolve, reject) => {
        print(readline);
        process.stdin.on("keypress", (s, data) => {
            switch (data.name) {
                case 'up': pressUp(readline); process.stdout.clearLine(); break;
                case 'down': pressDown(readline); process.stdout.clearLine(); break;
                case 'return': pressEnter(resolve, readline); process.removeAllListeners("exit"); process.stdout.write('\u001b[?25h'); process.stdout.clearLine(); break;
                default: process.stdout.clearLine(); break;
            }
        })

    })


}

const validStringData = (stringData = []) => {
    if (!stringData) {
        return false
    }
    return true
}

const print = (readline) => {
    readline.setPrompt(renderSelect(list))
    readline.write('\u001b[?25l');
    // process.stdout.write('\u001b[?s26l');
    readline.prompt()

}

const renderSelect = (data = []) => {
    return `${data.reduce((reduce, list) => {
        if (list.select === true) {
            return `${reduce}\n \x1b[32m-> ${list.data}\x1b[0m`
        }
        else {
            return `${reduce}\n   ${list.data}`
        }
    }, "")}\n`
}

const pressUp = (readline) => {
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
    print(readline);

}

const pressDown = (readline) => {
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
    print(readline);

}

const pressEnter = (resolver, readline) => {
    readline.close();
    process.stdin.removeAllListeners('keypress');
    resolver(list.filter((data) => data.select)[0].data)
    process.stdout.write('\u001b[?25h')

}

const printLabel = (label) => {
    if (label) {
        console.log(`\n${label}`)
    }
}

const createList = (dataToSelect) => {
    return dataToSelect.map((item, index) => {
        if (index == 0) {
            return { data: item, select: true }
        }
        return { data: item, select: false }

    })

}



module.exports = {
    selectInput
}