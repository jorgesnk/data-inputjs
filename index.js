"use strict";

const { numberInput, textInput } = require("./textInput/textInput")
const { selectInput } = require("./selectInput/selectInput")

// add a data to input a string
const text = (title) => {
    return textInput(title)
}
// add a data to input a number
const numeric = (title = '', errorMessage) => {
    return numberInput(title, errorMessage)
}

// return a data selected in the terminal
const select = (dataSelect = [], title = "") => {
    return selectInput(dataSelect, title)
}





module.exports = {
    select,
    text,
    numeric,
}











