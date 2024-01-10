let Allquestion=[
    {
        question:'Inside which HTML element do we put the JavaScript?',
        option1:'scripting tag',
        option2:'script tag',
        option3:'javascript tag',
        option4:'js tag',
        ans:"ans3"
    },
    {
        question:'Which of the following type of variable is visible everywhere in your JavaScript code?',
        option1:'global variable',
        option2:'local variable',
        option3:'Both of the above',
        option4:'None of the above',
        ans:"ans2"
    },
    {
        question:'Which built-in method removes the last element from an array and returns that element?',
        option1:'last()',
        option2:'get()',
        option3:'pop()',
        option4:'None of the above',
        ans:"ans4"
    },
    {
        question:'Which built-in method sorts the elements of an array?',
        option1:'changeOrder(order)',
        option2:'order()',
        option3:'sort()',
        option4:'None of the above.',
        ans:"ans3"
    },
    {
        question:'Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?',
        option1:'anchor()',
        option2:'big()',
        option3:'blink()',
        option4:'italics()',
        ans:"ans2"
    },
    {
        question:'Which of the following function of Array object represents the source code of an object?',
        option1:'toSource()',
        option2:'splice()',
        option3:'toString()',
        option4:'unshift()',
        ans:"ans1"
    },
    {
        question:'Which of the following is correct about features of JavaScript?',
        option1:'JavaScript is is complementary to and integrated with HTML.',
        option2:'JavaScript is open and cross-platform.',
        option3:'Both of the above',
        option4:'All of the above',
        ans:"ans1"
    },
    {
        question:'Which of the following is an advantage of using JavaScript?',
        option1:'Less server interaction',
        option2:'Immediate feedback to the visitors',
        option3:'Increased interactivity',
        option4:'All of the above.',
        ans:"ans4"
    },
    {
        question:'Which of the following is the correct syntax to print a page using JavaScript?',
        option1:'window.print()',
        option2:'browser.print()',
        option3:'navigator.print()',
        option4:'document.print()',
        ans:"ans2"
    },
    {
        question:'Which of the following is a valid type of function javascript supports?',
        option1:'named function',
        option2:'anonymous function',
        option3:'Both of the above',
        option4:'None of the above',
        ans:"ans1"

    }
]

let quizArea = document.querySelector("#quizArea");
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let nextButton = document.querySelector("#nextButton");
let Que = document.querySelector(".question")
let answers = document.querySelectorAll(".answer")
let showscore= document.querySelector("#showscore")
let error = document.querySelector("#error")
let startbtn = document.querySelector("#startbtn")
let start = document.querySelector("#start");
let mainBlock = document.querySelector("#mainBlock")

startbtn.addEventListener("click", ()=>{
    start.style.display ="none";
    mainBlock.style.display= "block"
})
let qcount =0;
let score =0;
let NextQue =()=>{
  let Q=Allquestion[qcount]

  Que.innerText =  qcount+1 +'. '+ Q.question
  option1.innerText = Q.option1;
  option2.innerText = Q.option2;
  option3.innerText = Q.option3;
  option4.innerText = Q.option4;
}
NextQue()

let getAnswer = () =>{
  let answer;
  answers.forEach((ele)=>{
    if(ele.checked){
    answer = ele.id;
    }
  });
  return answer;
}

let unselect =() =>{
    answers.forEach((ele)=>{
        ele.checked = false
    })
}
let displayNone=()=>{
    Que.style.display='none'
    option1.style.display='none'
    option2.style.display='none'
    option3.style.display='none'
    option4.style.display='none'
    nextButton.style.display='none'
    answers.forEach(e=>e.style.display='none')
}
nextButton.addEventListener("click", ()=>{

    let checkedanswer = getAnswer()
    if(checkedanswer==undefined){
        showscore.className='scoreArea'
        showscore.innerHTML =`
        <h3 style='color:red;'>* Select an answer to proceed *</h3>
        `
    }else{
        showscore.innerHTML =``
        if(checkedanswer===Allquestion[qcount].ans){
            score++;
        }
        qcount++;
        
        unselect();
        if(qcount < Allquestion.length){
            NextQue()
        }
        else{
            let color = score < 3 ? 'red' :
            score >= 4 && score <= 7 ? 'orange' :
            score >= 8 && score <= 10 ? 'green' :
            'black';

            console.log(color)
            displayNone()
            showscore.className='scoreArea'
            showscore.innerHTML =`
                <h1 style='font-size:50px;'>You scored <span style='color:${color};'>${score}</span>/10</h1>
            `
        }
    }
})