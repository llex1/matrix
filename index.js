const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
const answers = [];
const questions = [
  'Please, input a string of the letters: ',
  'And now, write a word for determining: '
]

rl.question(questions[answers.length], input => {
  answers.push(input.toUpperCase())
  rl.question(questions[answers.length], input => {
    answers.push([...input.toUpperCase()])
    rl.close()
    result()
  })
})

function result() {
  //shape of matrix: (4*4 or 3*3)
  const shape = Math.ceil(Math.sqrt(answers[0].length))
  const matrix = []
  const target = []
  
  for(let i=0; i<shape; i++){
    matrix.push(answers[0].slice(i*shape, shape+i*shape))
  }
  answers[1].forEach((el, idx)=>{
    for(let i=0; i<matrix.length; i++){
      if(matrix[i].includes(el)){
        target[idx] = [i, matrix[i].indexOf(el)]
      }
    }
  })
  console.log('===============================');
  matrix.forEach((el)=> console.log(el))
  console.log(target);
}



