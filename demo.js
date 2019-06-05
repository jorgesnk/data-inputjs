const input = require("./index")

const colorSelector = async () => {


    const select = await input.select(["red", 'blue', 'orange', 'pink'], "select a color")
    console.log(`your color is ${select}`)



    // const select = await input.select(["red", 'blue', 'orange', 'pink'], "select a color")
    // console.log(`your color is ${select}`)

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

const addNumber = async () => {
    const number = await input.numeric("add a number")
    console.log(number)
    // add a number
    // 10
}





