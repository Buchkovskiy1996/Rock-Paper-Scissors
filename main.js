"use strict"

function getComputerChoice() {
    let choice = ["Камень", "Бумага", "Ножицы"]; // масив слов
    let randomRPS = choice[Math.floor(Math.random() * choice.length)]; // генерация слов 
    return randomRPS;
  }


function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Камень" && computerSelection == "Бумага") {
        return "Вы проиграли! Бумага выиграла проти каменя!"
    } else if (playerSelection == "Бумага" && computerSelection == "Камень") {
        return "Вы выиграли! Бумага выиграла проти каменя!"
    } else if(playerSelection == "Камень" && computerSelection == "Ножицы") {
        return "Вы выиграли! Камень выиграл проти ножниц!"
    } else if(playerSelection == "Ножицы" && computerSelection == "Камень") {
        return "Вы проиграли! Камень выиграл проти ножицы!"
    } else if(playerSelection == "Бумага" && computerSelection == "Ножицы") {
        return "Вы проиграли! Ножицы выиграли проти бумаги!"
    } else if(playerSelection == "Ножицы" && computerSelection == "Бумага") {
        return "Вы выиграли! Ножицы выиграли проти бумаги!"
    } else if(playerSelection == computerSelection) {
        return "А у нас ничья!"
    }
}

function game() {
    for(let i = 0; i<2;i++) {
        let playerSelectionc = prompt("А давай сыиграем в игру камень, ножицы ,бумага?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelectionc,computerSelection))
    }
}
game();
