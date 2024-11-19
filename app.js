var questions = [
  {
    question: "HTML Stands for",
    option1: "Hyper Text Markup Language",
    option2: "Hyper Tech Markup Language",
    option3: "Hyper Touch Markup Language",
    corrAnswer: "Hyper Text Markup Language",
  },
  {
    question: "CSS Stands for",
    option1: "Cascoding Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascating Style Sheets",
    corrAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used for most large heading",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    corrAnswer: "<h1>",
  },
  {
    question: "Which tag is used to make element unique ",
    option1: "id",
    option2: "class  ",
    option3: "label",
    corrAnswer: "id",
  },
  {
    question: "Any element assigned with id, can be get in css ",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",
  },
  {
    question: "CSS can be used with ______ methods ",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",
  },
  {
    question: "In JS variable types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
  },
  {
    question: "In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
  {
    question: "toFixed() is used to define length of decimal ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",
  },
  {
    question: "push() method is used to add element in the start of array ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
];

var button = document.getElementById('btn')
var questionCount = document.getElementById("quesCount")
var currentQueCount = document.getElementById("currentQueCount")
var totalcurrentCount = document.getElementById("totalQueCount")
var question = document.getElementById("ques");
var option1 = document.getElementById('opt1');
var option2 = document.getElementById('opt2');
var option3 = document.getElementById('opt3');

var index = 0;
var score = 0;
function Next(){
  var options = document.getElementsByClassName("options")
  for(var i = 0; i < options.length; i++){
      if(options[i].checked){
          var selectedopt = options[i].value;
          var getopt = questions[index - 1][`option${selectedopt}`];
          var corrAnswer = questions[index -1][`corrAnswer`]
         if(getopt === corrAnswer){
          score++;
         }
          
      }
      
      options[i].checked = false;
  };
  button.disabled = true;
  if(index > questions.length - 1){
     if(score === 10){
      Swal.fire({
        title: `Excellent!
         Your Score is ${((score/questions.length)*100).toFixed(2)}`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
          
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
     });
     }
     if(score <= 9){
      Swal.fire({
        title: `Good Job!
         Your Score is ${((score/questions.length)*100).toFixed(2)}`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
     }
     if(score === 5){
      Swal.fire({
        title: `Try Hard Naxt Time !
        Your Score is ${((score/questions.length)*100).toFixed(2)}`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
     }
     if(score < 4){
      Swal.fire({
        title: `Sad You Are Fail !
        Your Score is ${((score/questions.length)*100).toFixed(2)}`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
     }
  }else{
      currentQueCount.innerHTML = index + 1;
      totalcurrentCount.innerHTML = questions.length 
      question.innerText= questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
  }
}
function clicked(){
  button.disabled = false;
}