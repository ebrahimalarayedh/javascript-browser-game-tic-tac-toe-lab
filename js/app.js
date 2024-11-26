/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let counter = 1


/*------------------------ Cached Element References ------------------------*/
// const whosTurn = document.createElement("h4")
// const bodyElement = document.querySelector("body")
// bodyElement.appendChild(whosTurn)
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

/*-------------------------------- Functions --------------------------------*/

function addXO(sqrEvent) {
    if (counter % 2 == 1 && counter < 10 && sqrEvent.target.textContent === "") {
        sqrEvent.target.textContent = "X"
        // console.log(sqrEvent.target)
        counter += 1
        messageElement.textContent = "It is O turn"
        // console.log(sqrElements[0])
        // console.log(sqrElements)
        // whosTurn.textContent = counter
        // console.log(sqrElements[0].textContent)
    }
    else if (counter % 2 == 0 && counter < 10
        // && sqrEvent.target.textContent==="" 
    ) {
        sqrEvent.target.textContent = "O"
        // console.log(sqrEvent.target)
        counter += 1
        messageElement.textContent = "It is X turn"
        // console.log(sqrElements)        
    }
    if (counter >= 6)
        winnerCheck(sqrEvent.target.id)
}
function winnerCheck(e) {
    const a = e % 3
    if (qrElements[0 + a].textContent == sqrElements[3 + a].textContent &&
        sqrElements[3 + a].textContent == sqrElements[6 + a].textContent) {
        // hardcoding condition:
        // (sqrElements[0 + a].textContent == "X" && sqrElements[3 + a].textContent == "X" && sqrElements[6 + a].textContent == "X")
        // || (sqrElements[0 + a].textContent == "O" && sqrElements[3 + a].textContent == "O" && sqrElements[6 + a].textContent == "O")
        // whosTurn.textContent = "we have winner"
        sqrElements[0 + a].style.color = 'red'
        sqrElements[3 + a].style.color = 'red'
        sqrElements[6 + a].style.color = 'red'
        counter = 11
        messageElement.textContent = `${sqrElements[0 + a].textContent} is the winner`
    }
    else if (sqrElements[0].textContent == sqrElements[4].textContent &&
        sqrElements[4].textContent == sqrElements[8].textContent) {
        //hardcoding condition:
        // (sqrElements[0].textContent == "X" && sqrElements[4].textContent == "X" && sqrElements[8].textContent == "X")
        //     || (sqrElements[0].textContent == "O" && sqrElements[4].textContent == "O" && sqrElements[8].textContent == "O")
        //      whosTurn.textContent = "we have winner"
        sqrElements[0].style.color = 'red'
        sqrElements[4].style.color = 'red'
        sqrElements[8].style.color = 'red'
        counter = 11
        messageElement.textContent = `${sqrElements[0].textContent} is the winner`
    }
    else if (sqrElements[2].textContent == sqrElements[4].textContent &&
        sqrElements[4].textContent == sqrElements[6].textContent) {
        //hardcoding condition:
        // (sqrElements[2].textContent == "X" && sqrElements[4].textContent == "X" && sqrElements[6].textContent == "X")
        // || (sqrElements[2].textContent == "O" && sqrElements[4].textContent == "O" && sqrElements[6].textContent == "O")
        // whosTurn.textContent = "we have winner"
        sqrElements[2].style.color = 'red'
        sqrElements[4].style.color = 'red'
        sqrElements[6].style.color = 'red'
        counter = 11
        messageElement.textContent = `${sqrElements[4].textContent} is the winner`

    }
    else {
        let i = 0
        while (i < 7) {
            console.log(i)
            if (sqrElements[i + 0].textContent == sqrElements[i + 1].textContent
                && sqrElements[i + 1].textContent == sqrElements[i + 2]) {
                //hardcoding condition:
                // (sqrElements[i + 0].textContent == "X" && sqrElements[i + 1].textContent == "X" && sqrElements[i + 2].textContent == "X")
                // || (sqrElements[i + 0].textContent == "O" && sqrElements[i + 1].textContent == "O" && sqrElements[i + 2].textContent == "O")
                // whosTurn.textContent = "we have winner"
                sqrElements[i + 0].style.color = 'red'
                sqrElements[i + 1].style.color = 'red'
                sqrElements[i + 2].style.color = 'red'
                counter = 11
                messageElement.textContent = `${sqrElements[e].textContent} is the winner`
            }
            i += 3
        }
    }
    if (counter == 10) {
        messageElement.textContent = "It is a tie!!"
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
}


/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener("click", reset)
