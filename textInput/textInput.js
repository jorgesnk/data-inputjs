
const textInput = (title, ) => {
    const readline = require('readline').createInterface({
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

const numberInput = (title, errorMessage = "Invalid number") => {

    return new Promise(async (resolve, reject) => {
        const numberInputData = await textInput(title)

        if (numberInputValidatorIsValid(numberInputData)) {
            resolve(parseFloat(numberInputData));
            return;
        }
        console.log(errorMessage)
        const resovePromisse = await numberInput(title, errorMessage);
        if (resovePromisse) {
            resolve(resovePromisse)
            return
        }
        return resovePromisse;
    })
}

const numberInputValidatorIsValid = (number) => {
    if (!isNaN(number)) {
        return true
    }
    return false
}

module.exports = {
    numberInputValidatorIsValid,
    textInput,
    numberInput
}