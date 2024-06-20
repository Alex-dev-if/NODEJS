import inquirer from "inquirer";


inquirer
  .prompt([
  {name: "p1", message: "Digite a primeira nota: "},
  {name: "p2", message: 'Digite a segunda nota'}
])
  .then((answers) => {
    console.log(answers)
    const p1 = Number(answers.p1)
    const p2 = Number(answers.p2)
    console.log(`A média das notas é ${(p1+p2)/2}`)
  })
  .catch((err) => console.log(`Erro: ${err}`))