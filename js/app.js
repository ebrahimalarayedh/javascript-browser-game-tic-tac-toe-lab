/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let counter = 1
let x = 0
let o = 0
let redo = []
let undo = []


/*------------------------ Cached Element References ------------------------*/
const scoreElement = document.createElement("h4")
const bodyElement = document.querySelector("body")
bodyElement.appendChild(scoreElement)
// whosTurn.textContent = "Lets see who win!"
const messageElement = document.querySelector("#message")

// console.log(messageElement)

const sqrElements = document.querySelectorAll(".sqr")
sqrElements.forEach((sqr) => {
    sqr.addEventListener("click", addXO)
})

// sqrElements.forEach(Element => {
//     Element.textContent = Element.id
// })

// console.log(sqrElements)

const resetButton = document.querySelector("button")
messageElement.textContent = "welcome"
const randomButton = document.querySelector("#random-button")

const undoButoon = document.querySelector("#undo")
const redoButoon = document.querySelector("#redo")

/*-------------------------------- Functions --------------------------------*/

function addXO(sqrEvent) {
    if (counter % 2 == 1 && counter < 10 && sqrEvent.target.textContent === "") {
        sqrEvent.target.textContent = "X"
        // console.log(sqrEvent.target)
        counter += 1
        messageElement.textContent = "It is O turn"
        undo.push(sqrEvent.target.id)
        console.log(undo)
        // console.log(sqrElements[0])
        // console.log(sqrElements)
        // whosTurn.textContent = counter
        // console.log(sqrElements[0].textContent)
        // setTimeout(function() {
        //     randomChoice();
        // }, 10000)
    }
    else if (counter % 2 == 0 && counter < 10 && sqrEvent.target.textContent === "") {
        sqrEvent.target.textContent = "O"
        // console.log(sqrEvent.target)
        counter += 1
        messageElement.textContent = "It is X turn"
        undo.push(sqrEvent.target.id)
        console.log(undo)
        // console.log(sqrElements)    
        // setTimeout(function() {
        //     randomChoice();
        // }, 10000)    
    }
    if (counter >= 6)
        winnerCheck(sqrEvent.target.id)
}
function winnerCheck(e) {
    const a = e % 3
    if ((sqrElements[0 + a].textContent == "X" && sqrElements[3 + a].textContent == "X" && sqrElements[6 + a].textContent == "X")
        || (sqrElements[0 + a].textContent == "O" && sqrElements[3 + a].textContent == "O" && sqrElements[6 + a].textContent == "O")) {
        // whosTurn.textContent = "we have winner"
        sqrElements[0 + a].style.color = 'red'
        sqrElements[3 + a].style.color = 'red'
        sqrElements[6 + a].style.color = 'red'
        counter = 11
        messageElement.textContent = `${sqrElements[0 + a].textContent} is the winner`
        if (sqrElements[0 + a].textContent == "X")
            x += 1
        else
            o += 1
        scoreElement.textContent = `X wins: ${x} and O wins: ${o}`

    }
    else if ((sqrElements[0].textContent == "X" && sqrElements[4].textContent == "X" && sqrElements[8].textContent == "X")
        || (sqrElements[0].textContent == "O" && sqrElements[4].textContent == "O" && sqrElements[8].textContent == "O")) {
        //      whosTurn.textContent = "we have winner"
        sqrElements[0].style.color = 'red'
        sqrElements[4].style.color = 'red'
        sqrElements[8].style.color = 'red'
        counter = 11
        messageElement.textContent = `${sqrElements[0].textContent} is the winner`
        if (sqrElements[0].textContent == "X")
            x += 1
        else
            o += 1
        scoreElement.textContent = `X wins: ${x} and O wins: ${o}`

    }
    else if ((sqrElements[2].textContent == "X" && sqrElements[4].textContent == "X" && sqrElements[6].textContent == "X")
        || (sqrElements[2].textContent == "O" && sqrElements[4].textContent == "O" && sqrElements[6].textContent == "O")) {
        // whosTurn.textContent = "we have winner"
        sqrElements[2].style.color = 'red'
        sqrElements[4].style.color = 'red'
        sqrElements[6].style.color = 'red'
        counter = 11
        messageElement.textContent = `${sqrElements[4].textContent} is the winner`
        if (sqrElements[4].textContent == "X")
            x += 1
        else
            o += 1
        scoreElement.textContent = `X wins: ${x} and O wins: ${o}`


    }
    else {
        let i = 0
        while (i < 7) {
            // console.log(i)
            if ((sqrElements[i + 0].textContent == "X" && sqrElements[i + 1].textContent == "X" && sqrElements[i + 2].textContent == "X")
                || (sqrElements[i + 0].textContent == "O" && sqrElements[i + 1].textContent == "O" && sqrElements[i + 2].textContent == "O")) {
                // whosTurn.textContent = "we have winner"
                sqrElements[i + 0].style.color = 'red'
                sqrElements[i + 1].style.color = 'red'
                sqrElements[i + 2].style.color = 'red'
                counter = 11
                messageElement.textContent = `${sqrElements[e].textContent} is the winner`
                if (sqrElements[e].textContent == "X")
                    x += 1
                else
                    o += 1
                scoreElement.textContent = `X wins: ${x} and O wins: ${o}`

            }
            i += 3
        }
    }
    if (counter == 10) {
        messageElement.textContent = "It is a tie!!"
        scoreElement.textContent = `X wins: ${x} and O wins: ${o}`

    }

}
const reset = () => {
    sqrElements.forEach(button => {
        // button.textContent = button.id
        button.textContent = ""
        button.style.color = "black"
    })
    messageElement.textContent = "welcome"
    // whosTurn.textContent = "Lets see who win!"
    counter = 1
    scoreElement.textContent = `X wins: ${x} and O wins: ${o}`
    redo.splice(0, redo.length)
    undo.splice(0, undo.length)
}

function randomChoice() {
    let r = Math.floor(Math.random() * 9)
    console.log(r)
    if (sqrElements[r].textContent == "") {
        if (counter % 2 == 1 && counter < 10) {
            sqrElements[r].innerText = "X"
            counter += 1
            messageElement.textContent = "It is O turn"
        }
        else if (counter % 2 == 0 && counter < 10) {
            sqrElements[r].textContent = "O"
            counter += 1
            messageElement.textContent = "It is X turn"
        }
        winnerCheck(sqrElements[r].id)
    }
    else
        randomChoice()
}
function undoFun() {
    if (counter < 11) {
        let x = undo.pop()
        console.log(x)
        redo.push(x)
        sqrElements[x].textContent = ""
        counter -= 1
        if (counter % 2 == 0)
            messageElement.textContent = "It is O turn"
        else if (counter % 2 == 1)
            messageElement.textContent = "It is X turn"
    }
}
function redoFun() {
    let y = redo.pop()
    undo.push(y)
    if (counter % 2 == 0) {
        messageElement.textContent = "It is O turn"
        sqrElements[y].textContent = "O"
    }
    else {
        messageElement.textContent = "It is X turn"
        sqrElements[y].textContent = "X"
    }
    counter += 1
}


/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener("click", reset)
randomButton.addEventListener("click", randomChoice)
redoButoon.addEventListener("click", redoFun)
undoButoon.addEventListener("click", undoFun)

