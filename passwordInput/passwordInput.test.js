const { stdin } = require('mock-stdin');
const { passwordInput } = require('./passwordInput');

// Key codes

let io = null;
beforeAll(() => (io = stdin()))
afterAll(() => io.restore())

const keys = {
    up: '\x1B\x5B\x41',
    down: '\x1B\x5B\x42',
    enter: '\x0D',
    space: '\x20'
}


describe("Test the password Input", () => {

    test('Testing the TEXT', async (done) => {
        const sendKeystrokes = async () => {
            io.send("teste");
            io.send(keys.enter);
        }
        setTimeout(() => sendKeystrokes().then(), 5)

        let selection = await passwordInput("Add your password: ");

        expect(selection).toBe("teste");

        done();
    });

})









