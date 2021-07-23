let round = 0;
window.onload = firstQuestion();
let star = "⭐";
let score = [];

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
                quest : "What is 2 + 2?",
                ans : "4",
            },
            {
                quest: "Which is bigger, 1 or 2?",
                ans : "2",
            },
            {
                quest: "What comes AFTER 4?",
                ans : "5",
            },
            {
                quest: "What is 4 + 5?",
                ans : "9",
            },
            {
                quest: "What is 3 + 2?",
                ans : "5",
            },
            {
                quest: "What is 2 - 1?",
                ans : "1",
            },
            {
                quest: "What is 5 - 2?",
                ans : "3",
            },
            {
                quest: "What comes AFTER 7?",
                ans : "8",
            },
            {
                quest: "What comes AFTER 9?",
                ans : "10",
            },
            {
                quest: "What comes AFTER 2?",
                ans : "3",
            },
            {
                quest: "What comes BEFORE 3?",
                ans : "2",
            },
            {
                quest: "What is 9 + 1?",
                ans : "10",
            },
            {
                quest: "What is 9 - 3?",
                ans : "6",
            },
            {
                quest: "What is 10 - 5?",
                ans : "5",
            },
            {
                quest: "What is 8 - 6?",
                ans : "2",
            },
            {
                quest: "What is 1 + 9?",
                ans : "10",
            },
            {
                quest: "What is 5 - 4?",
                ans : "1",
            },
            {
                quest: "What is 7 + 3",
                ans : "10",
            },
            {
                quest: "What is 6 + 2?",
                ans : "8",
            },
        ];
    document.getElementById("txtAns").textContent = answer;
    checkAnswer();

    function checkAnswer() {
        let qAns  = questions[round].ans;
        console.log(qAns);
        if (answer === qAns) {
            document.getElementById("txtScore").textContent = "🎉 You got it right! Great Job! 🎉 ";
            setTimeout(updateQuestion, 2000);
            round++;
            updateScoreboard();
            
        }
        else {
            document.getElementById("txtScore").textContent = "Not quite, try again!";
        }
     
    };

    function updateQuestion() {

        let txtQ = document.getElementById("txtQ");
        document.getElementById("txtScore").textContent = "How about this one?"
        txtQ.textContent = questions[round].quest;
        document.getElementById("txtAns").textContent = "?";
        
        console.log(txtQ.textContent);
    }

};

function updateScoreboard() {
    score.push(star);
    let newScore = score.join("");
    document.getElementById("numScore").textContent = "Score: " + newScore;
    console.log(star);
    console.log(score.join()=== score);
}

function firstQuestion() {
    document.getElementById("txtQ").textContent = "What is 1 + 1?";
}

function restart() {
    window.location = window.location;
}

function quit() {
    document.getElementById("txtScore").textContent = "Thanks for playing!"
    document.getElementById("txtQ").textContent = "See you next time!"
    document.querySelectorAll("button.numberBtn").forEach(elem => {
        elem.disabled = true;
    });
}