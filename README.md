[![Build Status](https://travis-ci.org/jorgesnk/data-inputjs.svg?branch=master)](https://travis-ci.org/jorgesnk/data-inputjs)

# data-inputjs
simple text input per terminal

    npm i data-inputjs


**Select exemple**
```js
const colorSelector = async () => {
    const select = await input.select(["red", 'blue', 'orange', 'pink'],'select a color')
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


**Input exemple numeric**
```js
const addNumber = async () => {
    const number = await input.numeric("add a number: ")
    console.log(number)

    // add a number: 10
    // 10

}
```

**Input exemple password**
```js
const addNumber = async () => {
    const password = await input.password("add a password: ")
    console.log(password)

    // add a password: test
    // test

}
```




