"use strict";

const { numberInput, textInput } = require("./textInput/textInput")
const { selectInput } = require("./selectInput/selectInput")

// add a data to input a string

/**
 * add a data to input a string
 * 
 * @example 
 *   text("title")
 * 
 * @param   {String} title   required param
 * @returns {Promise<String>}
 */
const text = (title) => {
    return textInput(title)
}


/**
 * add a data to input a number
 * 
 * @example 
 *   numeric("title","optional error message")
 * 
 * @param   {String} title   require param
 * @param   {String} errorMessage   optional param
 * @returns {Promise<Number>}
 */
const numeric = (title, errorMessage) => {
    return numberInput(title, errorMessage)
}

// return a data selected in the terminal
/**
 * add a data to input a number
 * 
 * @example 
 *   select(["option1","option2","option3"],"title")
 * 
 * @param   {Array<String>} dataSelect   require param
 * @param   {String} title   require param
 * @returns {Promise<String>}
 */
const select = (dataSelect = [], title = "") => {
    return selectInput(dataSelect, title)
}





module.exports = {
    select,
    text,
    numeric,
}











