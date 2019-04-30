const { stdin } = require('mock-stdin');
const { select, text,numeric } = require('./index');

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

test('Testing the SELECT', async (done) => {
    const sendKeystrokes = async () => {
        io.send(keys.down)
        io.send(keys.enter)
    }
    setTimeout(() => sendKeystrokes().then(), 5)
    
    let selection = await select([ "Recheio", "Bolacha" ]);

    expect(selection).toBe("Bolacha");
    done();
});

test('Testing the TEXT', async (done) => {
    const sendKeystrokes = async () => {
        io.send("Einserberg");
        io.send(keys.enter);
    }
    setTimeout(() => sendKeystrokes().then(), 5)
    
    let selection = await text("Add you name : ");

    expect(selection).toBe("Einserberg");

    done();
});

test('Testing the Numeric', async (done) => {
    const sendKeystrokes = async () => {
        io.send("12");
        io.send(keys.enter);
    }
    setTimeout(() => sendKeystrokes().then(), 5)
    
    let selection = await numeric("Add a number : ");

    expect(selection).toBe(12);

    done();
});