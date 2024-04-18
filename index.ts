#! /usr/bin/env node

import inquirer from "inquirer";

const answers : {

Sentence : "string"

} = await inquirer.prompt([{

    name : "Sentence",
    type : "input",
    message : "Write your sentence to count the written words"
}])

const words = answers.Sentence.trim().split(" ");

console.log(words);

console.log(`The total counted sentence words are ${words.length}`);

console.log("Thank you for Using s2bl words counter app!!!");



















