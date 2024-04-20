#! /usr/bin/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Printing colorful welcome message
console.log(chalk.yellow.bold("=".repeat(60)));
console.log(chalk.magenta.bold("Welcome to Code With Saba - Words Counter Tool"));
console.log(chalk.yellow.bold("=".repeat(60)));

// Prompt the user to enter a sentence
const answers = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:chalk.blue.bold("Enter a sentence:")
    }
]);

// Trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
console.log(chalk.yellow.bold("=".repeat(60)));
console.log(chalk.blue.bold("-Sentence Words"));
console.log(words);
console.log(chalk.blue.bold(`-Word Count: ${words.length}`));
console.log(chalk.yellow.bold("=".repeat(60)));

console.log(chalk.green.bold("Thankyou for using this application"));