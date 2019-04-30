const { stdin } = require('mock-stdin');
const { numberInputValidatorIsValid, textInput, numberInput } = require('./textInput');

// Key codes
const keys = {
    up: '\x1B\x5B\x41',
    down: '\x1B\x5B\x42',
    enter: '\x0D',
    space: '\x20'
}

let io = null;
beforeAll(() => (io = stdin()))
afterAll(() => io.restore())




describe("Test the InputText", () => {

    test('Testing the TEXT', async (done) => {
        const sendKeystrokes = async () => {
            io.send("Einserberg");
            io.send(keys.enter);
        }
        setTimeout(() => sendKeystrokes().then(), 5)

        let selection = await textInput("Add you name : ");

        expect(selection).toBe("Einserberg");

        done();
    });

})


describe('Test the number input Valid', () => {

    test("valid input", (done) => {
        const valueNumber = numberInputValidatorIsValid("12")
        expect(valueNumber).toBe(true);
        done()
    })
    test("Invalid input", (done) => {
        const valueNumber = numberInputValidatorIsValid("1asd2")
        expect(valueNumber).toBe(false);
        done()
    })



})



describe("Test the NumberInput", () => {

    test('Testing the Number valid ', async (done) => {
        const sendKeystrokes = async () => {
            io.send("12");
            io.send(keys.enter);
        }
        setTimeout(() => sendKeystrokes().then(), 5)

        let selection = await numberInput("Add a number : ");

        expect(selection).toBe(12);

        done();
    });


})






