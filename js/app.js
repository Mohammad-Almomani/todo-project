"use strict";

// Phase 1
const userName = prompt("Enter your name please:");
console.log(userName);
const userGender = prompt("Enter your gender please:");
console.log(userGender);
const checkUserAge = (userAge) => {
    var userAge = prompt("Enter your age please:");

    if (userAge>0) {
        return userAge}
    else {
    alert("Your age can't be zero or less, a character or a symbol please re-enter your age");
    return   checkUserAge(userAge) ;}
}
var userAge = checkUserAge(userAge);
console.log(userAge);

let userWelcome = confirm("Would you like to see a welcome message?");


function welcomeMessage() { 
  if (userWelcome){
    (userGender.toLowerCase() === "male")? alert(`Welcome, Mr.${userName}`):
    (userGender.toLowerCase() === "female")? alert(`Welcome, Ms.${userName}`):
    alert(`Welcome, ${userName}`);
}}

 welcomeMessage();

 // Phase 2

let userExtraQuestions = confirm("Would you like to answer more questions?");

function extraQuestions (userExtraQuestions){
if(userExtraQuestions){
    let answersArray=[];
    let questionsArray=["Do you like javascript?","do you like css?","do you like html?"]
    alert("Please answer with yes or no:")

    for (let i=0; i<questionsArray.length; i++){
let questionAnswer = prompt(`${questionsArray[i]}`);
(questionAnswer.toLowerCase() =="yes")? answersArray.push(questionAnswer):
 (questionAnswer.toLowerCase() =="no")? answersArray.push(questionAnswer):
  answersArray.push("invalid");}

for (let j=0;j<questionsArray.length;j++){
  console.log(`${questionsArray[j]} ${answersArray[j]}`)
}}}

extraQuestions (userExtraQuestions)






 

