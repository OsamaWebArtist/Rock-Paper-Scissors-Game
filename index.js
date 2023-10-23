/*Active Rules Button*/
let rulesButton = document.querySelector(".butt-rules button");
let rulesBack = document.querySelector(".black-background");
let rules = document.querySelector(".pop-rules");

rulesButton.onclick = function () {
    rules.style.display = "block";
    rulesBack.style.display = "block";
}

/*Remove rules Popup*/

let removeRules = document.querySelector(".rul-remove")

removeRules.onclick = function () {
    rules.style.display = "none";
    rulesBack.style.display = "none";
}

/*choose of Player*/

let chooses = document.querySelectorAll(".body-game img:nth-child(-n+3)");
let chooseArea = document.querySelector(".body-game");
let AreaRound = document.querySelector(".body-game-2");
let resultRound = document.querySelector(".result");
let playAgain = document.querySelector(".result button");


let Youpicked = document.querySelector(".you-picked")
let YoupickedImg = document.querySelectorAll(".you-picked img")
let scissors = document.querySelector(".scissors")
let paper = document.querySelector(".paper")
let rock = document.querySelector(".rock")

let WinOrLose = document.querySelector(".win-lose span")

let AiPicked = document.querySelector(".house-picked")
let AiPickedImg = document.querySelectorAll(".house-picked img")
let scissors2 = document.querySelector(".scissors2")
let paper2 = document.querySelector(".paper2")
let rock2 = document.querySelector(".rock2")

let scoreUp = document.querySelector(".scorepop .score") 

chooses.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        let randomchoosee = Math.trunc(Math.random() * chooses.length);
        chooseArea.style.display = "none"
        AreaRound.style.display = "grid"
        document.querySelector(e.currentTarget.dataset.img).style.display = "block";

        /*choose of Ai*/
        
        setTimeout(() => {

            document.querySelector(chooses[randomchoosee].dataset.img2).style.display = "block";

            setTimeout(() => {
                resultRound.style.display = "flex"

                if (paper.computedStyleMap().get("display").toString() === "block" && rock2.computedStyleMap().get("display").toString() === "block"
                    || scissors.computedStyleMap().get("display").toString() === "block" && paper2.computedStyleMap().get("display").toString() === "block"
                    || rock.computedStyleMap().get("display").toString() === "block" && scissors2.computedStyleMap().get("display").toString() === "block") {
                    
                    WinOrLose.textContent = "YOU WIN";
                    Youpicked.classList.add("winner");
                    /*Update the Score*/
                    if (WinOrLose.textContent = "YOU WIN") {
                        scoreUp.textContent++;
                    }
                    
                    
                }else if (paper.computedStyleMap().get("display").toString() === "block" && paper2.computedStyleMap().get("display").toString() === "block"
                            || scissors.computedStyleMap().get("display").toString() === "block" && scissors2.computedStyleMap().get("display").toString() === "block"
                            || rock.computedStyleMap().get("display").toString() === "block" && rock2.computedStyleMap().get("display").toString() === "block") {
                
                            WinOrLose.textContent = "DRAW";
                
                }else {
                    WinOrLose.textContent = "YOU LOSE";
                    AiPicked.classList.add("winner")
                }
                
                
            }, 1000);
        }, 2100);
            
            

    })
})

/*Play Again Button*/
playAgain.onclick = function () {


    YoupickedImg.forEach((ele) => {
        ele.style.display = "none";
    })

    AiPickedImg.forEach((ele) => {
        ele.style.display = "none"
    })

    resultRound.style.display = "none"
    AreaRound.style.display = "none"
    chooseArea.style.display = "block"

    Youpicked.classList.remove("winner");
    AiPicked.classList.remove("winner");
}
