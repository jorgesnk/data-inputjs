const input = require("./index")

const colorSelector = async () => {
    console.log("select a color")
    const select = await input.select(["red", 'blue', 'orange', 'pink'])
    console.log(`your color is ${select}`)

    // select a color

    //    red
    //  -> blue
    //    orange
    //    pink

    // your color is blue

}


const addName = async () => {
    const name = await input.text("add your name: ")
    console.log(name)

// add your name: jorge
// jorge

}

