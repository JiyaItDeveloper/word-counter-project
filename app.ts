#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let user_ans = await inquirer.prompt([{
    type:"input",
    name:"words",
    message:chalk.greenBright("Please enter your sentence!")
}])
 let word_count = user_ans.words.trim().split(" ").length

 console.log(chalk.bold.yellowBright.underline(`Your sentence has ${word_count} words ...`))