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

const numbers = document.querySelectorAll(".numberBtn");
    numbers.forEach((button) =>  button.addEventListener("click", answerQuestion));
    
document.getElementById("restart").addEventListener("click", restart);
document.getElementById("quit").addEventListener("click", quit);

let questions = [
    {
        questNum: "1",
        quest : "",
        ans : ""
    },
    {
        questNum: "2",
        quest : "",
        ans : "",
    },
    {
        questNum: "3",
        quest: "",
        ans : "",
    },
    {
        questNum: "4",
        quest: "",
        ans : "",
    },
    {
        questNum: "5",
        quest: "",
        ans : "",
    },
    {
        questNum: "6",
        quest: "",
        ans : "",
    },
    {
        questNum: "7",
        quest: "",
        ans : "",
    },
    {
        questNum: "8",
        quest: "",
        ans : "",
    },
    {
        questNum: "9",
        quest: "",
        ans : "",
    },
    {
        questNum: "10",
        quest: "",
        ans : "",
    },
    {
        questNum: "11",
        quest: "",
        ans : "",
    },
    {
        questNum: "12",
        quest: "",
        ans : "",
    },
    {
        questNum: "13",
        quest: "",
        ans : "",
    },
    {
        questNum: "14",
        quest: "",
        ans : "",
    },
    {
        questNum: "15",
        quest: "",
        ans : "",
    },
    {
        questNum: "16",
        quest: "",
        ans : "",
    },
    {
        questNum: "17",
        quest: "",
        ans : "",
    },
    {
        questNum: "18",
        quest: "",
        ans : "",
    },
    {
        questNum: "19",
        quest: "",
        ans : "",
    },
    {
        questNum: "20",
        quest: "",
        ans : "",
    },
];


function answerQuestion(e) {
    
    let answer = e.target.id.slice(3);
        
    document.getElementById("txtAns").textContent = answer;
    checkAnswer();

    function checkAnswer() {
        let qAns  = questions[round].ans;
        
        if (answer === qAns) {
            if (questions[round].questNum === questions.length -1){
                document.getElementById("txtScore").textContent = "You did a great job!!"
                document.getElementById("txtQ").textContent = "Can you do it again?"
                
                setTimeout(restart, 5000);
            }
            else {
                document.getElementById("txtScore").textContent = "🎉 You got it right! Great job! 🎉 ";
                setTimeout(updateScoreboard, 4000)
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