var readlineSync = require('readline-sync');
const chalk = require('chalk')

var userName = readlineSync.question("What's your name?\n ")
var score =0;
console.log(chalk.redBright("welcome "+userName+ " in world war quiz?"))
console.log(chalk.redBright("Enter only the choice option eg. a/b/c/d"))


var questionOne = {
  question: "1. When did first world war happen?\na. 1912-18\nb. 1913-17\nc. 1914-19\nd. 1915-19\n",
  answer: "c"
}
var questionTwo = {
  question: "2. which among these is not part of The Triple Alliance?\na. Germany\nb. Italy\nc. Britain\nd. None of these\n",
  answer: "c"
}
var questionThree = {
  question: "3. which among these is part of The Triple Alliance?\na. Austria-Hungary\nb. Britain\nc. USA\nd. France\n ",
  answer: "a"
}
var q4 = {
  question: "4. When was The Triple Alliance formed?\na. 1884\nb. 1882\nc. 1894\nd. 1890\n",
  answer: "b"
}
var q5 = {
  question: "5. Which two country signed Entente Cordiale in 1904?\na. France & Russia\n b. Russia & Britain\nc. Russia & Japan\nd. Britain & France\n",
  answer: "d"
}
var q6 = {
  question: "6. When did France and Russia signed alliance?\na. 1894\nb. 1904\nc. 1907\nd. 1906\n",
  answer: "a"
}
var q7 = {
  question: "7. who won the Russo-japanese war in 1904-05?\na. Russia\nb. Japan\nc. USA\nd. No clear winner\n",
  answer: "b"
}
var q8 = {
  question: "8. when did Agadir crisis happen?\na. 1905\nb. 1908\nc. 1911\nd. 1912\n",
  answer: " "
}
var q9 = {
  question: "9. In which country did Bosnia province fall?\na. Germany\nb. Austria\nc. Serbia\nd. Turkey\n",
  answer: "d"
}
var q10 = {
  question: "10. Which of these were not the part of Balkan League?\na. Serbia\nb. Belgium\nc. Greece\nd. Bulgaria\n",
  answer: "b"
}

// quiz function

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer  === answer){
    console.log(chalk.blue(userAnswer +" is Right Answer."));
    score+=1;
    console.log("your current score is "+ score)
  }
  else{
    console.log(chalk.redBright("THis is wrong answer."));
    console.log(chalk.redBright("The Right answer is " + answer));
    console.log(chalk.blue("your current score is " + score))
  }
}

//Array of objects
var questions = [questionOne, questionTwo, questionThree, q4, q5, q6, q7, q8, q9, q10];
for(var i=0;i<questions.length;i++){
  //call Quiz function
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log(chalk.green("your Final score is "+score))