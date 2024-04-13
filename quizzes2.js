const questions = [
    {
        question:"Which of the largest animal in the world?",
        answer:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffee",correct:false},

        ]
    },
    {
        question:"What is the formula of water?",
        answer:[
            {text:" O2",correct:false},
            {text:"H2O",correct:true},
            {text:"MgO",correct:false},
            {text:"CO",correct:false},

        ] 
    },
   {
    question:"Which is markup language?",
    answer:[
        {text:"HTML",correct:true},
        {text:"CSS",correct:false},
        {text:"Javascript",correct:false},
        {text:"Java",correct:false},

    ]
   }

];
const questionElement=document.getElementById("questions");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-button");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + "." +currentQuestion;

    currentQuestion.answers.forEach(element => {
        const button = document.createElement("button")
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });

}

