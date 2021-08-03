//TODO: alter script 2 so it can be added without needing script 1 to be deleted. 
//TODO: Or actually test if deleting script 1 then adding script 2 actually doesn't work.

let round = 0;
window.onload = updateQuestion();
//window.onload = firstQuestion();
let star = "⭐";
let cloud = "🌥️";
let rainbow = "🌈";
let dragon = "🐉";
let unicorn = "🦄";
let score = [];
let scoreNum = 0;
let bigScore = [];
let levelScore = [];
let level = 1;


const numbers = document.querySelectorAll(".numberBtn");
    numbers.forEach((button) =>  button.addEventListener("click", answerQuestion));
    
document.getElementById("restart").addEventListener("click", restart);
document.getElementById("quit").addEventListener("click", quit);

//questions went here


function answerQuestion(e) {
    
    let answer = e.target.id.slice(3);
        
    document.getElementById("txtAns").textContent = answer;
    checkAnswer();

    function checkAnswer() {
        let qAns  = questions[round].ans;
        
        if (answer === qAns) {
            document.getElementById("txtScore").textContent = "🎉 You got it right! Great job! 🎉 ";
            setTimeout(updateScoreboard, 4000)
            scoreNum++;
            round++;
            console.log(round);
            playCheer();
            
                if (questions[round].questNum === questions.length -1){
                    document.getElementById("txtScore").textContent = "You did a great job!!"
                    document.getElementById("txtQ").textContent = "Ready for level 2?"
                    
                    setTimeout(lvlTwo, 5000);
                }

            setTimeout(updateQuestion, 7000);
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
    if (level = 1) {
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
    else if (level = 2) {
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
        document.getElementById("numScore").textContent = "Score: 🌥️🌈🐉🦄" + newScore;
    }

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



function levelTwo() {
    level++;
    document.body.style.backgroundImage = "url('images/milky-way-2695569_1280.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    let fonts = document.querySelectorAll(".lvl1");
    fonts.forEach((elem) => elem.classList.add("lvl2"));

    let questList = document.createElement("script");
    questList.setAttribute("src", "questions2.js");
    questList.classList.add("quest2");
    document.body.appendChild(questList);

}
