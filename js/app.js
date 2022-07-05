"use strict";

// Phase 1
var userName = prompt("Enter your name please:");
console.log(userName);
var userGender = prompt("Enter your gender please:");
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

var userWelcome = confirm("Would you like to see a welcome message?");


function welcomeMessage() { 
    if (userWelcome && ((userGender === "male")||(userGender === "Male"))){
  alert(`Welcome, Mr.${userName}`)}

else if (userWelcome && ((userGender === "female")|| (userGender === "Female"))) {
    alert(`Welcome, Ms.${userName}`)}

 else if (userWelcome){
  alert(`Welcome, ${userName}`)}}

 welcomeMessage();

 // Phase 2

var userExtraQuestions = confirm("Would you like to answer more questions?");
var answersArray=[];
var questionsArray=["Do you like javascript?","do you like css?","do you like html?"]

if(userExtraQuestions){
    alert("Please answer with yes or no:")
var firstQuestionAnswer = prompt(`${questionsArray[0]}`);
(firstQuestionAnswer=="yes" || firstQuestionAnswer=="Yes")? answersArray.push(firstQuestionAnswer):
 (firstQuestionAnswer=="no" || firstQuestionAnswer=="No")? answersArray.push(firstQuestionAnswer):
  answersArray.push("invalid");

var secondQuestionAnswer = prompt(`${questionsArray[1]}`);
(secondQuestionAnswer=="yes" || secondQuestionAnswer=="Yes")? answersArray.push(secondQuestionAnswer):
 (secondQuestionAnswer=="no" || secondQuestionAnswer=="No")? answersArray.push(secondQuestionAnswer):
  answersArray.push("invalid");

var thirdQuestionAnswer = prompt(`${questionsArray[2]}`);
(thirdQuestionAnswer=="yes" || thirdQuestionAnswer=="Yes")? answersArray.push(thirdQuestionAnswer):
 (thirdQuestionAnswer=="no" || thirdQuestionAnswer=="No")? answersArray.push(thirdQuestionAnswer):
  answersArray.push("invalid");

  var userExtraQuestionsObject = {
    "Do you like javascript?":answersArray[0],
    "do you like css?":answersArray[1],
    "do you like html?":answersArray[2]
}
console.table(userExtraQuestionsObject)
}






 

