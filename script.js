const numbers = document.querySelectorAll(".numbers");
numbers.forEach((button) =>  button.addEventListener("click", answerQuestion));

function answerQuestion(e) {
    let answer = e.target.id.slice(3);
    console.log(answer);
}

