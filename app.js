let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");

let compScorePara=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
let drawGame=()=>{
    msg.innerText="Match drawed!";
    msg.style.backgroundColor="#081b31";
}
let showWin=(userWin,userChoice,compChoice)=>{
    if(userWin===true)
    {
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText=`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
}
let playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    let userWin=true;
    if(userChoice===compChoice)
    {
        drawGame();
        return;
    }
    else{
        if(userChoice==="rock")
        {
            if(compChoice==="paper")
            {
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else if(userChoice==="paper")
        {
            if(compChoice==="scissors"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else
        {
            if(compChoice==="rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
    }
    showWin(userWin,userChoice,compChoice);
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})