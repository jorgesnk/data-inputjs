const { stdin } = require('mock-stdin');
const { select, text } = require('./index');
const { KEYDOWN, ENTER } = require('./components/utils/keystrokes');

let io = null;
beforeAll(() => (io = stdin()))
afterAll(() => io.restore())

test('Testing the SELECT', async (done) => {
    const sendKeystrokes = async () => {
        io.send(KEYDOWN)
        io.send(ENTER)
    }
    setTimeout(() => sendKeystrokes().then(), 5)
    
    let selection = await select([ "Recheio", "Bolacha" ]);

    expect(selection).toBe("Bolacha");
    done();
});

test('Testing the TEXT', async (done) => {
    const sendKeystrokes = async () => {
        io.send("Einserberg");
        io.send(ENTER);
    }
    setTimeout(() => sendKeystrokes().then(), 5)
    
    let selection = await text("Add you name : ");

    expect(selection).toBe("Einserberg");

    done();
});