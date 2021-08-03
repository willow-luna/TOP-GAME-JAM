let round = 0;
window.onload = firstQuestion();
let star = "⭐";
let fairy = "🧚‍♀️"; 
let sunflowr = "🌻";
let horse = "🐴 ";
let butterfly = "🦋";

let questions = [
    {
        questNum: "1",
        quest : "What is 4 ÷ 2? ",
        ans : "2"
    },
    {
        questNum: "2",
        quest : "What is 4 * 2?",
        ans : "8",
    },
    {
        questNum: "3",
        quest: "What is 8 ÷ 2?",
        ans : "4",
    },
    {
        questNum: "4",
        quest: "What is 3 * 3?",
        ans : "9",
    },
    {
        questNum: "5",
        quest: "What is 9 ÷ 3?",
        ans : "3",
    },
    {
        questNum: "6",
        quest: "What is 2 * 3?",
        ans : "6",
    },
    {
        questNum: "7",
        quest: "What is 7 * 1?",
        ans : "7",
    },
    {
        questNum: "8",
        quest: "What is 7 ÷ 1?",
        ans : "7",
    },
    {
        questNum: "9",
        quest: "What is 14 ÷ 7?",
        ans : "2",
    },
    {
        questNum: "10",
        quest: "What is 18 ÷ 3?",
        ans : "6",
    },
    {
        questNum: "11",
        quest: "What is 2 * 3?",
        ans : "6",
    },
    {
        questNum: "12",
        quest: "What is 10 ÷ 2?",
        ans : "5",
    },
    {
        questNum: "13",
        quest: "What is 15 ÷ 5?",
        ans : "3",
    },
    {
        questNum: "14",
        quest: "What is 15 ÷ 3?",
        ans : "5",
    },
    {
        questNum: "15",
        quest: "What is What is 16 ÷ 8?",
        ans : "2",
    },
    {
        questNum: "16",
        quest: "What is 16 ÷ 4?",
        ans : "4",
    },
    {
        questNum: "17",
        quest: "What is 5 * 1?",
        ans : "5",
    },
    {
        questNum: "18",
        quest: "What is 12 ÷ 3?",
        ans : "4",
    },
    {
        questNum: "19",
        quest: "What is 12 ÷ 4?",
        ans : "3",
    },
    {
        questNum: "20",
        quest: "What is 20 ÷ 10 ",
        ans : "2",
    },
];

function updateScoreboard() {
    
    if(scoreNum % 5 === 0){
        score = [];
            if(scoreNum === 5) {
                document.getElementById("txtScore").textContent = "🌥️ + 🌈 + 🐉 + ⭐ + ⭐ + ⭐ + ⭐ + ⭐ = 🧚‍♀️";
                let cloudSnd = new Audio("sounds/cloud.wav");
                cloudSnd.play();
                bigScore.push(cloud);
            }
            else if (scoreNum === 10) {
                document.getElementById("txtScore").textContent = "🌥️ + 🌈 + 🐉 + 🧚‍♀️ + ⭐ + ⭐ + ⭐ + ⭐ + ⭐ = 🌻";
                let rainbowSnd = new Audio("sounds/rainbow.wav");
                rainbowSnd.play();
                bigScore.push(rainbow);
            }
            else if (scoreNum === 15) {
                document.getElementById("txtScore").textContent = "🌥️ + 🌈 + 🐉 + 🧚‍♀️ + 🌻 + ⭐ + ⭐ + ⭐ + ⭐ + ⭐  = 🐴 ";
                let dragonSnd = new Audio("sounds/dragon.wav");
                dragonSnd.play();
                bigScore.push(dragon);
            }
            else if (scoreNum === 20) {
                document.getElementById("txtScore").textContent = "🌥️ + 🌈 + 🐉 + 🧚‍♀️ + 🌻 + 🐴  + ⭐ + ⭐ + ⭐ + ⭐ + ⭐  = 🦋";
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
