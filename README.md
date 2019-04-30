[![Build Status](https://travis-ci.org/jorgesnk/data-inputjs.svg?branch=master)](https://travis-ci.org/jorgesnk/data-inputjs)

# data-inputjs
simple text input per terminal

    npm i data-inputjs


**Select exemple**
```js
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
```
**Input exemple**
```js
const addName = async () => {
    const name = await input.text("add your name: ")
    console.log(name)

    // add your name: jorge
    // jorge

}
```




