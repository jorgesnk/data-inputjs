module.exports = text = (title) => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise((resolve, reject) => {
        readline.question(title, (response) => {
            resolve(response);
            readline.close()
        })
    })
}


