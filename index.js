#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count words:",
    },]);
const sentence = answers.sentence.trim();
if (sentence === "") {
    console.log("No sentence is provided, please provide a sentence.");
}
else {
    const words = sentence.split(/\s+/);
    console.log(words);
    console.log(`There are ${words.length} words in the sentence you provided`);
}
