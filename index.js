let hand = ["rock", "paper", "scissors"]

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let chosenRock = false
let chosenPaper = false
let chosenScissors = false

let compSelectionText = document.getElementById("comp-choice")
let outcomeText = document.getElementById("outcome")

// let fadeInDiv = document.getElementsByClassName("fadeInDiv")
// let fadeButton =  document.querySelectorAll('button');

// fadeButton.forEach(button => {
//     button.addEventListener("click", fadeIn);
//   });
  
//   function fadeIn() {
//     fadeInDiv.classList.add("fade-in");
//   }

// fadeButton.forEach(button => {
//     button.addEventListener("click", fadeIn);
//   });
  
//   function fadeIn() {
//     fadeInDiv.classList.add("fade-in");
//   }

function fadeIn() {
    fadeInDiv.id = "fade-in";
  }


function computerChoice() {
    let randomIndex = Math.floor((Math.random()*3))
    compSelectionText.textContent = "Computer chooses: " + hand[randomIndex]
    // need to use return to actually give a value we can use from running this function!!!
    return hand[randomIndex];
}

function chooseRock() {
    chosenRock = true
    let compChoice = computerChoice()
    if(compChoice === "rock") {
        outcomeText.textContent = "You draw! 🤝"
    }
    else if(compChoice === "paper") {
        outcomeText.textContent = "You lose! 😭"
    }
    else if(compChoice === "scissors") {
        outcomeText.textContent = "You win! 🥳"
    }
}

function chooseScissors() {
    chosenScissors = true
    let compChoice = computerChoice()
    if(compChoice === "rock") {
        outcomeText.textContent = "You lose! 😭"
    }
    else if(compChoice === "paper") {
        outcomeText.textContent = "You win! 🥳"
    }
    else if(compChoice === "scissors") {
        outcomeText.textContent = "You draw! 🤝"
    }
}


function choosePaper() {
    chosenPaper = true
    let compChoice = computerChoice()
    if(compChoice === "rock") {
        outcomeText.textContent = "You win! 🥳"
    }
    else if(compChoice === "paper") {
        outcomeText.textContent = "You draw! 🤝"
    }
    else if(compChoice === "scissors") {
        outcomeText.textContent = "You lose! 😭"
    }
}

// Adding an effect so the outcome div fades in when you click a button
// fadeButton.addEventListener('click', () => {
//     fadeInDiv.classList.add('fade-in');
//   });
// function fadeIn() {
//   fadeButton.forEach(button => {
//     button.addEventListener('click', () => {
//       fadeInDiv.classList.add('fade-in');
//     });
//   })
// }


