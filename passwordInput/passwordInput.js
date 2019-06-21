
const rl = require("readline");
let pass = ""
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})



process.on("exit", () => {
    process.stdout.write('\u001b[?25h')

})

process.stdin.on("keypress", (dataString, event) => {
    console.clear()
    process.stdout.clearLine()
    readline.write('\u001b[?25l');

    if (event.name === "backspace") {
        pass = pass.substr(0, pass.length - 1)
        console.log(pass);

    }
    else if (event.name == "return") {
        readline.close();
    }

   

    else {
        if (dataString) {
            pass += dataString
        }
        console.log(pass);

    }


})