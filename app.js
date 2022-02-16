const startGameButton = document.getElementById("startGame");
const difficultySelector = document.getElementById("gameMode");



const startGameFunction  = () => {

    console.log(difficultySelector.value)

    let cellRows;
    let cellColumns;

    if (difficultySelector.value == 1) {

        console.log("Hai selezionato la modalità Facile")
        cellRows = 10;
        cellColumns = 10;
        
    } else if (difficultySelector.value == 2) {

        console.log("Hai selezionato la modalità Media")
        cellRows = 9;
        cellColumns = 9;
        
    } else {

        console.log("Hai selezionato la modalità Difficile")
        cellRows = 7;
        cellColumns = 7;
        
    }
    
    const gameCells = cellRows * cellColumns;

    console.log(gameCells)

}

startGameButton.addEventListener("click", startGameFunction)