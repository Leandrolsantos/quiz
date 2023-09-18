var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers[`question`+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})

function totalScore(){
    var total_score =
    answers.question1+
    answers.question2+
    answers.question3+
    answers.question4+
    answers.question5+
}

function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você precisa tomar mais cuidado com suas senhas !";
    }else if(totalScore() >= 7){
        var score_info = "Muito bem, você tem cuidado das suas senhas !"
    }

    return score_info;
}

