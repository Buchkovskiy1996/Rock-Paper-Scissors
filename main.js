"use strict"

const btnRock = document.querySelector(".btn__rock")
const btnPaper = document.querySelector(".btn__paper")
const btnScissors = document.querySelector(".btn__scissors")
const mainWinner = document.querySelector(".main__winner")
const btnInner = document.querySelectorAll(".btn__inner")
const scoreWinPlayer = 0;
const scoreWinComp = 0;
const round = document.querySelectorAll(".round");

function getComputerChoice() {
    let choice = ["Камень", "Бумага", "Ножницы"]; // масив слов
    let randomRPS = choice[Math.floor(Math.random() * choice.length)]; // генерация слов 
    return randomRPS;
  }

function game () {
    btnRock.addEventListener("click", function(){      
        let computerSelection = getComputerChoice();
        if(btnRock == btnRock && computerSelection == "Бумага"){
            mainWinner.textContent = "Вы проиграли! Бумага победила  бумагу, и робот заработал 1 очко!"
        } else if(btnRock == btnRock && computerSelection == "Ножницы") {
            mainWinner.textContent = "Вы выиграли! Камень победил ножницы , вы заработали 1 очко";
            scoreWinPlayer++
        } else if (btnRock == computerSelection) {
            console.log("А у нас ничья!")
            mainWinner.textContent = "А у нас ничья!"
        }
    })

    btnPaper.addEventListener("click", function(){
        let computerSelection = getComputerChoice();
        if(btnPaper == btnPaper && computerSelection == "Ножницы") {
            mainWinner.textContent = "Вы проиграли! Ножницы победили  бумагу, и робот заработал 1 очко!"
        } else if(btnPaper == btnPaper && computerSelection == "Камень") {
            mainWinner.textContent = "Вы выиграли! Бумага победил каменя , вы заработали 1 очко";
        } else if(btnPaper == btnPaper && computerSelection == "Бумага") {
            mainWinner.textContent = "А у нас ничья!"
        }
    
    })
    
    btnScissors.addEventListener("click", function(){
        let computerSelection = getComputerChoice();
        if(btnScissors == btnScissors && computerSelection == "Бумага") {
            mainWinner.textContent = "Вы выиграли! Ножницы победила бумагу , вы заработали 1 очко";
        }  else if(btnScissors == btnScissors && computerSelection == "Камень") {
            mainWinner.textContent = "Вы проиграли! Камень победил  ножницы, и робот заработал 1 очко!"
        } else if(btnPaper == btnScissors && computerSelection == "Камень") {
            mainWinner.textContent = "А у нас ничья!"
        }
    })
}

game()