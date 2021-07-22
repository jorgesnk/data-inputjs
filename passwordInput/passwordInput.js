const readline = require('readline');
const process = require('process');
const event = require('events');
const passwordInput = (title) => new Promise((resolve, _reject) => {


    // https://stackoverflow.com/a/48561893
    const eventPassword = new event.EventEmitter();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const stdin = process.openStdin();

    eventPassword.on('password', (char) => {
        char = char + '';
        switch (char) {
            case '\n':
            case '\r':
            case '\u0004':
                stdin.pause();
                break;
            default:
                process.stdout.clearLine();
                readline.cursorTo(process.stdout, 0);
                process.stdout.write(title + Array(rl.line.length + 1).join('*'));
                break;
        }
    })

    process.stdin.on('data', char => {
        eventPassword.emit('password', char)
    });

    rl.question(title, value => {
        rl.history = rl.history.slice(1);
        eventPassword.removeAllListeners()
        resolve(value);
    });
});



module.exports = {
    passwordInput
}