const { stdin } = require('mock-stdin');
const { selectInput } = require('./selectInput');

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
    
    let selection = await selectInput([ "Recheio", "Bolacha" ]);

    expect(selection).toBe("Bolacha");
    done();
});