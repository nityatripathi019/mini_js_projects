const Questions=[
    {
      "ques":"which of the following is a markup language ?" ,
      "a":"HTML",
      "b":"CSS",
      "c":"javascript",
      "d":"java" ,
      "correct":"a"
    },
    {
        "ques":"In which year javascript was launched ?" ,
        "a":"1993",
        "b":"1995",
        "c":"1985",
        "d":"none of the above" ,
        "correct":"b"
    },
    {
        "ques":"What does CSS stand for ?" ,
        "a":"Creating style sheet",
        "b":"Cascading Style Sheet",
        "c":"Creative style sheet",
        "d":"none of the above" ,
        "correct":"b"
    },
    {
        "ques":"CSS is used for?" ,
        "a":"styling ",
        "b":"forming the structure ",
        "c":"for logic",
        "d":"all of the above" ,
        "correct":"a"
    }
]
let index=0;
let total = Questions.length;
let right=0;
let wrong=0;
const quesBox = document.getElementById("quesbox");
const option = document.querySelectorAll(".options");
const loadQuestions = ()=>{
    if(input===total){
        return endQuiz();
    }
    reset();
   const data=Questions[index];
   console.log(data);
   quesBox.innerText=`${index + 1}) ${data.ques}`;
   
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
    
}

const submitQuiz = ()=>{
    const data=Questions[index];
    const ans = getAnswer();
    if(ans=== data.correct){
       right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () =>{
    option.forEach((input)=>{
       if(input.checked){
        
        return input.value ;
        // console.log(input.value);
       }
    
    })
}

const reset = ()=>{
    option.forEach((input)=>{
         input.checked= false;
    })
}

loadQuestions();