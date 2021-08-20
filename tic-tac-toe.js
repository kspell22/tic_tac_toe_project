const gameBoard = document.getElementById("game-board");
const gameTitle = document.getElementById("game-title");
const gameSquare1 = document.getElementById("game-square-1");
const gameSquare2 = document.getElementById("game-square-2");
const gameSquare3 = document.getElementById("game-square-3");
const gameSquare4 = document.getElementById("game-square-4");
const gameSquare5 = document.getElementById("game-square-5");
const gameSquare6 = document.getElementById("game-square-6");
const gameSquare7 = document.getElementById("game-square-7");
const gameSquare8 = document.getElementById("game-square-8");
const gameSquare9 = document.getElementById("game-square-9");
const allGameSquares = document.querySelectorAll(".game-square");

const arrGameSquares = [gameSquare1,gameSquare2,gameSquare3,
    gameSquare4,gameSquare5,gameSquare6,gameSquare7,gameSquare8,
    gameSquare9,];

function computerMove(){
    for(let i=0; i<arrGameSquares.length; i++){
        if(arrGameSquares[i].innerText == "X" || arrGameSquares[i].innerText == "O"){
        } else {
            arrGameSquares[i].innerText = "O";
            nextMove *= -1;
            const previousMove = document.createElement('h3');
            previousMove.innerText = `Player O plays Square ${i+1}`;
            gameHistory.appendChild(previousMove);
            changeInfoNextMove();
            checkForWinner();
            arrGameSquares[i].className = "game-square-inactive";
            break
        }
    }
};

function makeBoardActive (){
    for(let i =0; i<arrGameSquares.length; i++){
        arrGameSquares[i].className = "game-square";
    }
}
function makeBoardInactive (){
    for(let i=0; i<arrGameSquares.length; i++){
        arrGameSquares[i].className = "game-square-inactive";
    }
};

const winningLine1 = document.getElementById("winning-line-1");
const winningLine2 = document.getElementById("winning-line-2");
const winningLine3 = document.getElementById("winning-line-3");
const winningLine4 = document.getElementById("winning-line-4");
const winningLine5 = document.getElementById("winning-line-5");
const winningLine6 = document.getElementById("winning-line-6");
const winningLine7 = document.getElementById("winning-line-7");
const winningLine8 = document.getElementById("winning-line-8");

let gameInfo = document.getElementById("game-info");
let infoNextMove = document.getElementById("game-info-next-move");
let gameHistory = document.getElementById("game-history");
let previousMoves = document.querySelectorAll('h3');
const btnReset = document.getElementById("btn-reset");

btnReset.addEventListener('click', function(){
    gameTitle.style.display = "block";
    infoNextMove.innerText = "Player X's Move";
    nextMove = 1;
    gameSquare1.innerText = "";
    gameSquare2.innerText = "";
    gameSquare3.innerText = "";
    gameSquare4.innerText = "";
    gameSquare5.innerText = "";
    gameSquare6.innerText = "";
    gameSquare7.innerText = "";
    gameSquare8.innerText = "";
    gameSquare9.innerText = "";
    winningLine1.style.display = "none";
    winningLine2.style.display = "none";
    winningLine3.style.display = "none";
    winningLine4.style.display = "none";
    winningLine5.style.display = "none";
    winningLine6.style.display = "none";
    winningLine7.style.display = "none";
    winningLine8.style.display = "none";
    gameHistory.innerText = ""
    makeBoardActive();
    
});

let changeInfoNextMove = () => {
    if(nextMove == 1){
        infoNextMove.innerText = "Player X's Move"
    } else {
        infoNextMove.innerText = "Player O's Move"
    }
};

let nextMove = 1;

gameBoard.addEventListener('click', function(){
    gameTitle.style.display = "none";
});

gameSquare1.addEventListener('click', function(){
    if(gameSquare1.innerText != "X" && gameSquare1.innerText != "O" && gameSquare1.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare1.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare1.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare1.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
    
});
gameSquare2.addEventListener('click', function(){
    if(gameSquare2.innerText != "X" && gameSquare2.innerText != "O" && gameSquare2.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare2.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare2.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare2.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
    
});
gameSquare3.addEventListener('click', function(){
    if(gameSquare3.innerText != "X" && gameSquare3.innerText != "O" && gameSquare3.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare3.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare3.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare3.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});
gameSquare4.addEventListener('click', function(){
    if(gameSquare4.innerText != "X" && gameSquare4.innerText != "O" && gameSquare4.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare4.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare4.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare4.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});
gameSquare5.addEventListener('click', function(){
    if(gameSquare5.innerText != "X" && gameSquare5.innerText != "O" && gameSquare5.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare5.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare5.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare5.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});
gameSquare6.addEventListener('click', function(){
    if(gameSquare6.innerText != "X" && gameSquare6.innerText != "O" && gameSquare6.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare6.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare6.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare6.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});
gameSquare7.addEventListener('click', function(){
    if(gameSquare7.innerText != "X" && gameSquare7.innerText != "O" && gameSquare7.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare7.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare7.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare7.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});
gameSquare8.addEventListener('click', function(){
    if(gameSquare8.innerText != "X" && gameSquare8.innerText != "O" && gameSquare8.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare8.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare8.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare8.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});
gameSquare9.addEventListener('click', function(){
    if(gameSquare9.innerText != "X" && gameSquare9.innerText != "O" && gameSquare9.className != "game-square-inactive"){
        if(nextMove == 1){
            gameSquare9.innerText = "X";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player X plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } else {
            gameSquare9.innerText = "O";
            const previousMove = document.createElement('h3');
            previousMove.innerText = 'Player O plays Square 1';
            gameHistory.appendChild(previousMove);
            nextMove *= -1;
        } 
        changeInfoNextMove();
        checkForWinner();
        computerMove();
        gameSquare9.className = "game-square-inactive";
    } else {
        //Do not play this Square 
    } 
});


let checkForWinner = () => {
    //8 options for player x winning
    if(gameSquare1.innerText=="X" && gameSquare2.innerText=="X" &&gameSquare3.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine1.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare4.innerText=="X" && gameSquare5.innerText=="X" &&gameSquare6.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine2.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare7.innerText=="X" && gameSquare8.innerText=="X" &&gameSquare9.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine3.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare1.innerText=="X" && gameSquare4.innerText=="X" &&gameSquare7.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine4.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare2.innerText=="X" && gameSquare5.innerText=="X" &&gameSquare8.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine5.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare3.innerText=="X" && gameSquare6.innerText=="X" &&gameSquare9.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine6.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare1.innerText=="X" && gameSquare5.innerText=="X" &&gameSquare9.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine7.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare3.innerText=="X" && gameSquare5.innerText=="X" &&gameSquare7.innerText=="X"){
        infoNextMove.innerText = "Player X has won!";
        winningLine8.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare1.innerText=="O" && gameSquare2.innerText=="O" &&gameSquare3.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine1.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare4.innerText=="O" && gameSquare5.innerText=="O" &&gameSquare6.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine2.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare7.innerText=="O" && gameSquare8.innerText=="O" &&gameSquare9.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine3.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare1.innerText=="O" && gameSquare4.innerText=="O" &&gameSquare7.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine4.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare2.innerText=="O" && gameSquare5.innerText=="O" &&gameSquare8.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine5.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare3.innerText=="O" && gameSquare6.innerText=="O" &&gameSquare9.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine6.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare1.innerText=="O" && gameSquare5.innerText=="O" &&gameSquare9.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine7.style.display = 'block';
        makeBoardInactive();
    } else if(gameSquare3.innerText=="O" && gameSquare5.innerText=="O" &&gameSquare7.innerText=="O"){
        infoNextMove.innerText = "Player O has won!";
        winningLine8.style.display = 'block';
        makeBoardInactive();
    }

};
