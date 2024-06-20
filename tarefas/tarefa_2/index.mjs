import inquirer from "inquirer";

import chalk from 'chalk';

inquirer
  .prompt([
    {
      name: "nome", message: "Qual é o seu nome? "
    },
    {
      name: "idade", message: "Qual a sua idade? "
    }
  ]).then((answers)=>{
    console.log(chalk.bgYellow.black(`Nome: ${answers.nome}, idade: ${answers.idade}`))

  }).catch((err) => {
    console.log("Ocorreu um erro: "+err)
  })
