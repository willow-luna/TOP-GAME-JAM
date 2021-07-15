let round = 0;
window.onload = firstQuestion();

const numbers = document.querySelectorAll(".numbers");
    numbers.forEach((button) =>  button.addEventListener("click", answerQuestion));
    


function answerQuestion(e) {
    
    let answer = e.target.id.slice(3);
        let questions = [
            {
                quest : "What is 1 + 1?",
                ans : "2"
            },
            {
                quest : "2 + 2",
                ans : "4",
            },
        ];
    document.getElementById("txtAns").textContent = answer;
    checkAnswer();

    function checkAnswer() {
        let qAns  = questions[round].ans;
        console.log(qAns);
        if (answer === qAns) {
            document.getElementById("txtScore").textContent = "🎉 You got it right! Great Job! 🎉 ";
            setTimeout(updateQuestion, 4000);
            round++;
        }
        else {
            document.getElementById("txtScore").textContent = "Not quite, try again!";
        }
     
    };

    function updateQuestion() {

        let txtQ = document.getElementById("txtQ");
        document.getElementById("txtScore").textContent = "How aout this one?"
        txtQ.textContent = questions[round].quest;
        document.getElementById("txtAns").textContent = ".";
        
        console.log(txtQ.textContent);
    }

};

function firstQuestion() {
    document.getElementById("txtQ").textContent = "What is 1 + 1?";
}
