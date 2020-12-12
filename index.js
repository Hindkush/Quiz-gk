var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question(chalk.bgBlue("What is your name ? "));
console.log(chalk.green("Welcome "+userName+" to GK quiz."));
console.log(chalk.red("******************************"));
var score = 0;



function play(question,answer){
  var quizQuestion = readlineSync.question(chalk.blueBright(question));
  if(quizQuestion.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.green("You are right !"));
    score++;
    console.log(chalk.bgRed("your score is :: "+score));
    console.log(chalk.red("******************************"));
  }else{
    console.log(chalk.red("You are wrong !"));
    score--;
    console.log(chalk.bgBlue("your score is :: "+score));
    console.log(chalk.red("******************************"));
  }

}

var questionArray =[
  questionOne = {
    question: "What is the captial of india ? \n a.Delhi\n b.Mumbai\n c.Agra ",
    answer: "a"
  },
    questionTwo = {
     question: "What is molecular formula of water ? \n a.H2O\n b.HO\n c.H3O ",
    answer: "a"
  },   
    questionThree = {
     question: "Which country is not having any river ? \n a.UAE\n b.Saudi Arabia\n c.Iran ",
    answer: "b"
  },  
    questionFour = {
    question: "What is the captial of Nagaland ? \n a.Kohima\n b.Shillong\n c.Dispur ",
    answer: "a"
  },
    questionFive = {
      question:"How many Elements are there in nature ? \n a.113\n b.118\n c.109 ",
    answer: "b"
    },
    questionSix = {
    question: "Who is the Iron man of India ? \n a.Sardar Patel\n b.Mahatma Gandhi\n c.Lalbahadur Shashtri ",
    answer: "a"
  },
    questionSeven = {
     question: "What is first name of JS ? \n a.jscript\n b.livescript\n c.javascript ",
    answer: "b"
  },   
    questionEight = {
     question: "Which language is platform Independent ? \n a.c\n b.c++\n c.java ",
    answer: "c"
  },  
    questionNine = {
    question: "Which symbol is use as statement terminator ? \n a.,\n b.'\n c.; ",
    answer: "c"
  },
    questionTen = {
      question:"Which is even prime number ? \n a.13\n b.8\n c.2 ",
    answer: "c"
    }  
  ];


for(var i = 0; i < questionArray.length; i++){
  play(questionArray[i].question,questionArray[i].answer);
 
}
 console.log(chalk.yellow("If You beat your highscore send me screenshot ! "))