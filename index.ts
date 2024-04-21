#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

const answers : {

Sentence : "string"

} = await inquirer.prompt([{

    name : "Sentence",
    type : "input",
    message : `${chalk.dim.italic("Write your sentence to count the written words" )}`
}])

const words = answers.Sentence.trim().split(" ");

console.log(words);

console.log`${chalk.yellow.bold.underline.italic`The total counted sentence words are ${words.length}`}`;

console.log`${chalk.blueBright.bold`Thank you for Using s2bl words counter app!!!`}`;



















