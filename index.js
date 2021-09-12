const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // terminal: false
});
const inputs = [];
const questions = [
  'Please, input a string of the letters: ',
  'And now, write a word for determining: '
]

rl.question(questions[inputs.length], answer => {
  inputs.push(answer)
  rl.question(questions[inputs.length], answer => {
    inputs.push(answer)
    rl.close()
    result()
  })
})

const result = function() {
  console.log(inputs);
}



