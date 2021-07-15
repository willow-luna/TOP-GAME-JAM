let round = 0;
window.onload = firstQuestion();

const numbers = document.querySelectorAll(".numberBtn");
    numbers.forEach((button) =>  button.addEventListener("click", answerQuestion));
    
document.getElementById("restart").addEventListener("click", restart);
document.getElementById("quit").addEventListener("click", quit);


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
    document.getElementById("answer-screen").textContent = answer;
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
        document.getElementById("numScore").textContent = "Score: " + round;
        document.getElementById("txtScore").textContent = "How about this one?"
        txtQ.textContent = questions[round].quest;
        document.getElementById("answer-screen").textContent = " ";
        
        console.log(txtQ.textContent);
    }

};

function firstQuestion() {
    document.getElementById("txtQ").textContent = "What is 1 + 1?";
}

function restart() {
    window.location = window.location;
}

function quit() {
    document.getElementById("txtScore").textContent = "Thanks for playing!"
    document.getElementById("txtQ").textContent = "Okay!"
    document.querySelectorAll("button.numberBtn").forEach(elem => {
        elem.disabled = true;
    });
}