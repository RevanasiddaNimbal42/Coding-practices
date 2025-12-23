let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const mag= document.querySelector("#mag");
const userscor=document.querySelector("#user-score");
const compscor=document.querySelector("#comp-score");


const draw = () => {
    console.log("Game was draw");
    mag.innerText = "Game was draw!,play again";
    mag.style.background = "rgb(175, 175, 250)";
};
const compchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let opIdex = Math.floor(Math.random() * 3);
    return options[opIdex];
};
const showwinner = (userwin) => {
    if (userwin) {
        console.log("user win!");
        mag.innerText="User win!";
        mag.style.background="rgb(140, 243, 140)";
        userscore++;
        userscor.innerText=userscore;


    } else {
        console.log("user lost! ");
        mag.innerText="User lost!";
        mag.style.background="rgb(236, 164, 92)";
        compscore++;
        compscor.innerText=compscore;
    }
}

const playGame = (userchoice) => {
    console.log("user-choice", userchoice);
    //geneltare comp choice
    const compChoice = compchoice();
    console.log("comp-choice", compChoice);
    //to find who will win
    if (userchoice === compChoice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //paper ,scissor
            userwin = compChoice === "paper" ?false: true;
        } else if (userchoice === "paper") {
            userwin = compChoice === "secissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked "+ userchoice);
        playGame(userchoice);
    });
});
