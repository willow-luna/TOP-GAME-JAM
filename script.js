let round = 0;
window.onload = firstQuestion();
let star = "⭐";
let cloud = "🌥️";
let rainbow = "🌈";
let dragon = "🐉";
let unicorn = "🦄";
let score = [];
let scoreNum = 0;
let bigScore = [];
let levelScore = [];
//window.onload = updateQuestion();

function firstQuestion() {
    document.getElementById("txtQ").textContent = "What is 1 + 1?";
}

const numbers = document.querySelectorAll(".numberBtn");
    numbers.forEach((button) =>  button.addEventListener("click", answerQuestion));
    
document.getElementById("restart").addEventListener("click", restart);
document.getElementById("quit").addEventListener("click", quit);

let questions = [
    {
        questNum: "1",
        quest : "What is 1 + 1?",
        ans : "2"
    },
    {
        questNum: "2",
        quest : "What is 2 + 2?",
        ans : "4",
    },
    {
        questNum: "3",
        quest: "Which is bigger, 1 or 2?",
        ans : "2",
    },
    {
        questNum: "4",
        quest: "What comes AFTER 4?",
        ans : "5",
    },
    {
        questNum: "5",
        quest: "What is 4 + 5?",
        ans : "9",
    },
    {
        questNum: "6",
        quest: "What is 3 + 2?",
        ans : "5",
    },
    {
        questNum: "7",
        quest: "What is 2 - 1?",
        ans : "1",
    },
    {
        questNum: "8",
        quest: "What is 5 - 2?",
        ans : "3",
    },
    {
        questNum: "9",
        quest: "What comes AFTER 7?",
        ans : "8",
    },
    {
        questNum: "10",
        quest: "What comes AFTER 9?",
        ans : "10",
    },
    {
        questNum: "11",
        quest: "What comes AFTER 2?",
        ans : "3",
    },
    {
        questNum: "12",
        quest: "What comes BEFORE 3?",
        ans : "2",
    },
    {
        questNum: "13",
        quest: "What is 9 + 1?",
        ans : "10",
    },
    {
        questNum: "14",
        quest: "What is 9 - 3?",
        ans : "6",
    },
    {
        questNum: "15",
        quest: "What is 10 - 5?",
        ans : "5",
    },
    {
        questNum: "16",
        quest: "What is 8 - 6?",
        ans : "2",
    },
    {
        questNum: "17",
        quest: "What is 1 + 9?",
        ans : "10",
    },
    {
        questNum: "18",
        quest: "What is 5 - 4?",
        ans : "1",
    },
    {
        questNum: "19",
        quest: "What is 7 + 3",
        ans : "10",
    },
    {
        questNum: "20",
        quest: "What is 6 + 2?",
        ans : "8",
    },
];


function answerQuestion(e) {
    
    let answer = e.target.id.slice(3);
        
    document.getElementById("txtAns").textContent = answer;
    checkAnswer();

    function checkAnswer() {
        let qAns  = questions[round].ans;
        
        if (answer === qAns) {
            if (Number(questions[round].questNum) === questions.length){
                document.getElementById("txtScore").textContent = "You did a great job!!";
                document.getElementById("txtQ").textContent = "Ready for level 2?";
                
                setTimeout(lvlTwo, 5000);
            }
            else {
                document.getElementById("txtScore").textContent = "🎉 You got it right! Great job! 🎉 ";
                setTimeout(updateScoreboard, 4000);
                setTimeout(updateQuestion, 7000);
                scoreNum++;
                round++;
                console.log(round);
                playCheer();
            }
        }
        else {
            document.getElementById("txtScore").textContent = "Not quite, try again!";
            playWrong();
        }
     
    };

    function updateQuestion() {

        let txtQ = document.getElementById("txtQ");
        document.getElementById("txtScore").textContent = "How about this one?"
        txtQ.textContent = questions[round].quest;
        document.getElementById("txtAns").textContent = "?";
    }

};

function updateScoreboard() {
    
    if(scoreNum % 5 === 0){
        score = [];
            if(scoreNum === 5) {
                document.getElementById("txtScore").textContent = "⭐ + ⭐ + ⭐ + ⭐ + ⭐ = 🌥️";
                let cloudSnd = new Audio("sounds/cloud.wav");
                cloudSnd.play();
                bigScore.push(cloud);
            }
            else if (scoreNum === 10) {
                document.getElementById("txtScore").textContent = "🌥️ + ⭐ + ⭐ + ⭐ + ⭐ + ⭐ = 🌈";
                let rainbowSnd = new Audio("sounds/rainbow.wav");
                rainbowSnd.play();
                bigScore.push(rainbow);
            }
            else if (scoreNum === 15) {
                document.getElementById("txtScore").textContent = "🌥️ + 🌈 + ⭐ + ⭐ + ⭐ + ⭐ + ⭐ = 🐉";
                let dragonSnd = new Audio("sounds/dragon.wav");
                dragonSnd.play();
                bigScore.push(dragon);
            }
            else if (scoreNum === 20) {
                document.getElementById("txtScore").textContent = "🌥️ + 🌈 + 🐉 + ⭐ + ⭐ + ⭐ + ⭐ + ⭐ = 🦄";
                let unicornSnd = new Audio("sounds/unicorn.wav");
                unicornSnd.play();
                bigScore.push(unicorn);
            }
    }
    else {
        document.getElementById("txtScore").textContent = "Have a star!";
        let starSnd = new Audio("sounds/star.wav");
        starSnd.play();
        score.push(star);
    }

    let newScore = bigScore.join("") + score.join("");
    document.getElementById("numScore").textContent = "Score: " + newScore;
    
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

function playCheer() {
    let cheer = [new Audio("sounds/cheer2.wav"), new Audio("sounds/cheer3.wav"), new Audio("sounds/hooDoggy.wav")];
    let index = Math.floor(Math.random() * 3);
    cheer[index].play();
};

function playWrong() {
    let wrong = [new Audio("sounds/wrong1.wav"), new Audio("sounds/wrong2.wav"), new Audio("sounds/sadTrombone.wav")];
    let index = Math.floor(Math.random() * 3);
    wrong[index].play();
};

function lvlTwo() {
    let two = document.createElement("script");
    two.setAttribute("src", "script2.js");
    document.body.appendChild(two);
}