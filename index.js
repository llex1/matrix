const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // terminal: false
});
const inputs = [];
const questions = [
  'Please, write a line of letters: ',
  'And now, write a word for determining'
]

function controller() {
  console.log(inputs.length);
  if(inputs.length<2){
    ask(questions[inputs.length])
  }
  if(inputs.length=2){
    result()
  }
}
function ask(question) {
  rl.question(question, (answer) => {
    console.log('=========answer=======');
    answer && inputs.push(answer)
    rl.close()
    controller()
  })
}

function result() {
  console.log('=============RESULT==============');
  console.log(inputs);
}

controller()


