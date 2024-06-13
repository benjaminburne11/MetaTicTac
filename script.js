// Functions
function openMiniXOsGame(id, index) {

    console.log(bigGamePlacesTaken[index])
    if(bigGamePlacesTaken[index] == "0" && winnerOne == 0) {
        document.getElementById(id).style.animation = "fullScreen 1s forwards 0s"
        document.getElementById("final-Game-Result-Holder").style.animation = "hideGameResults 1s forwards 0s"
    
        var miniGames = document.querySelectorAll('.mini-Section-Open')
        
        for(var i=0;i<miniGames.length;i++) {
            if(i != index) {
                miniGames[i].style.animation = "getRidOfOtherGames 1s forwards 0s"
            }
        }
    
        document.getElementById('h-Line-One').style.animation = "getRidOfMainBoard 1s forwards 0s"
        document.getElementById('h-Line-Two').style.animation = "getRidOfMainBoard 1s forwards 0s"
        document.getElementById('v-Line-One').style.animation = "getRidOfMainBoard 1s forwards 0s"
        document.getElementById('v-Line-Two').style.animation = "getRidOfMainBoard 1s forwards 0s"
    
        var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")
    
        placeMarkerContainers[index].style.display = 'grid'
        index = index + 1
        // var Xs = document.querySelectorAll('.game-'+index)
        
        // for(var i=0;i<Xs.length;i++) {
        //     Xs[i].classList.add("fullScreen")
        // }
    
        playingGame = true
        currentGame = index
        boxID = id
    }
}



function placeMarker(id, index) {
    if(playingGame) {
        if(placesTaken[index] == 0) {
            
            if(playerOneTurn) {
                placesTaken[index] = 1
                index = index + 1
                document.getElementById(id).innerHTML = "<div class='x fullScreen game-"+currentGame+"'>+</div>"
                playerOneTurn = false
            } else {
                placesTaken[index] = 2
                index = index + 1
                document.getElementById(id).innerHTML = "<div class='o fullScreen game-"+currentGame+"'></div>"
                playerOneTurn = true
            }

            markersPlaced++

            if(placesTaken[0] == 1 && placesTaken[1] == 1 && placesTaken[2] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[0] == 1 && placesTaken[4] == 1 && placesTaken[8] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[2] == 1 && placesTaken[5] == 1 && placesTaken[8] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[2] == 2 && placesTaken[5] == 2 && placesTaken[8] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[0] == 1 && placesTaken[3] == 1 && placesTaken[6] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[1] == 1 && placesTaken[4] == 1 && placesTaken[7] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[2] == 1 && placesTaken[4] == 1 && placesTaken[6] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[3] == 1 && placesTaken[4] == 1 && placesTaken[5] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[3] == 1 && placesTaken[4] == 1 && placesTaken[5] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[6] == 1 && placesTaken[7] == 1 && placesTaken[8] == 1) {
                setTimeout(function() {    
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    xWonGame()
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[0] == 2 && placesTaken[1] == 2 && placesTaken[2] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[0] == 2 && placesTaken[4] == 2 && placesTaken[8] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[0] == 2 && placesTaken[3] == 2 && placesTaken[6] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[1] == 2 && placesTaken[4] == 2 && placesTaken[7] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[2] == 2 && placesTaken[4] == 2 && placesTaken[6] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[3] == 2 && placesTaken[4] == 2 && placesTaken[5] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[3] == 2 && placesTaken[4] == 2 && placesTaken[5] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(placesTaken[6] == 2 && placesTaken[7] == 2 && placesTaken[8] == 2) {
                setTimeout(function() {
                    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
                    oWonGame()    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            } else if(markersPlaced == 9) {
                console.log("tied")
                setTimeout(function() {
                    tiedGame()
                    
                    localStorage.setItem("board", bigGamePlacesTaken)
                }, 500)
            }
        }else {
            console.log("error")
        }
        // console.log(placesTaken)
    }
    // console.log(playingGame)
}

function tiedGame() {
    document.getElementById("final-Game-Result-Holder").style.animation = "showGameResults 1s forwards 0s"
    
    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        miniGames[i].style.animation = "bringBackOtherGames 1s forwards 0s"
    }

    document.getElementById('h-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"

    // var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    // placeMarkerContainers[currentGame].style.display = 'grid'

    var Xs = document.querySelectorAll('.game-'+currentGame)
    console.log(currentGame)
    // console.log(Xs)

    for(var i=0;i<Xs.length;i++) {
        Xs[i].classList.remove("fullScreen")
        console.log(Xs[i])
    }

    document.getElementById("game-Result-"+currentGame).innerHTML = '<div class="tie-Container"><div class="x-Holder"><div class="x-Main-Tie">+</div></div><div class="o-Holder"><div class="o-Main-Tie"></div></div></div>'
    
    bigGamePlacesTaken[currentGame - 1] = 3
    playingGame = false
    currentGame = null
    placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    markersPlaced = 0
    
    checkBigGameWins()
}

function playGame() {
    localStorage.clear()
    document.getElementById("whole-Game-Container").style.display = "flex"
    document.getElementById("whole-Game-Container").style.transition = ".5s"
    document.getElementById("main-Menu-Container").style.transition = ".5s"
    document.getElementById("main-Menu-Container").style.opacity = "0"

    setTimeout(function() {    
        document.getElementById("main-Menu-Container").style.display = "none"
        document.getElementById("whole-Game-Container").style.display = "flex"
        document.getElementById("whole-Game-Container").style.opacity = "1"
    }, 500)
}

function xWonGame() {
    document.getElementById("final-Game-Result-Holder").style.animation = "showGameResults 1s forwards 0s"

    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        miniGames[i].style.animation = "bringBackOtherGames 1s forwards 0s"
    }

    document.getElementById('h-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"

    var hlo = document.querySelectorAll('.h-Line-One')
    var hlt = document.querySelectorAll('.h-Line-Two')
    var vlo = document.querySelectorAll('.v-Line-One')
    var vlt = document.querySelectorAll('.v-Line-Two')

    // hlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // hlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    // placeMarkerContainers[currentGame].style.display = 'grid'

    var Xs = document.querySelectorAll('.game-'+currentGame)
    console.log(currentGame)
    // console.log(Xs)

    for(var i=0;i<Xs.length;i++) {
        Xs[i].classList.remove("fullScreen")
    }

    document.getElementById("game-Result-"+currentGame).innerHTML = '<div class="x-Main">+</div>'
    
    bigGamePlacesTaken[currentGame - 1] = 1
    console.log(currentGame)
    console.log(bigGamePlacesTaken)
    playingGame = false
    currentGame = null
    placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    markersPlaced = 0
    
    checkBigGameWins()
}

function oWonGame() {
    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
    document.getElementById("final-Game-Result-Holder").style.animation = "showGameResults 1s forwards 0s"

    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        miniGames[i].style.animation = "bringBackOtherGames 1s forwards 0s"
    }

    document.getElementById('h-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"

    var hlo = document.querySelectorAll('.h-Line-One')
    var hlt = document.querySelectorAll('.h-Line-Two')
    var vlo = document.querySelectorAll('.v-Line-One')
    var vlt = document.querySelectorAll('.v-Line-Two')

    // hlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // hlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    // placeMarkerContainers[currentGame].style.display = 'grid'

    var Xs = document.querySelectorAll('.game-'+currentGame)
    console.log(currentGame)
    // console.log(Xs)

    for(var i=0;i<Xs.length;i++) {
        Xs[i].classList.remove("fullScreen")
        console.log(Xs[i])
    }

    document.getElementById("game-Result-"+currentGame).innerHTML = '<div class="o-Main"></div>'
    
    bigGamePlacesTaken[currentGame - 1] = 2
    playingGame = false
    currentGame = null
    placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    markersPlaced = 0

    checkBigGameWins()
}

function checkBigGameWins() {
    if(bigGamePlacesTaken[0] == 3 && bigGamePlacesTaken[1] == 3 && bigGamePlacesTaken[2] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[0] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[8] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[0] == 3 && bigGamePlacesTaken[3] == 3 && bigGamePlacesTaken[6] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[1] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[7] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[2] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[6] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[3] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[5] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[3] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[5] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[6] == 3 && bigGamePlacesTaken[7] == 3 && bigGamePlacesTaken[8] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 1 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[1] == 1 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[2] == 1 || bigGamePlacesTaken[2] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 1 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[8] == 1 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 1 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[3] == 1 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[6] == 1 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[1] == 1 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[7] == 1 || bigGamePlacesTaken[7] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[2] == 1 || bigGamePlacesTaken[2] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[6] == 1 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 1 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 1 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 1 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 1 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[6] == 1 || bigGamePlacesTaken[6] == 3) && (bigGamePlacesTaken[7] == 1 || bigGamePlacesTaken[7] == 3) && (bigGamePlacesTaken[8] == 1 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 2 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[1] == 2 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[2] == 2 || bigGamePlacesTaken[2] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 2 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[8] == 2 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 2 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[3] == 2 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[6] == 2 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[1] == 2 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[7] == 2 || bigGamePlacesTaken[7] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[2] == 2 || bigGamePlacesTaken[2] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[6] == 2 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 2 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 2 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 2 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 2 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[6] == 2 || bigGamePlacesTaken[6] == 3) && (bigGamePlacesTaken[7] == 2 || bigGamePlacesTaken[7] == 3) && (bigGamePlacesTaken[8] == 2 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if(bigGameMarkersPlaced == 9) {
        tiedBigGame()
    }
    
    bigGameMarkersPlaced++
}

function xWonBigGame() {
    alert("X's won")
    winnerOne = 1
    localStorage.clear()
}

function oWonBigGame() {
    alert("O's won")
    winnerOne = 2
    localStorage.clear()
}

function tiedBigGame() {
    alert("Tied Game")
    winnerOne = 3
    localStorage.clear()
}

function loadPage() {
    var placesTakenSaved = localStorage.getItem("board")

    if(placesTakenSaved == null) {
        document.getElementById("main-Menu-Container").style.display = "flex"

    } else if(placesTakenSaved != null){
        document.getElementById("main-Menu-Container").style.display = "flex"
        document.getElementById("continue-Game").style.display = "flex"
        // document.getElementById("whole-Game-Container").style.display = "flex"
        // document.getElementById("whole-Game-Container").style.opacity = "1"
    }
}

function continueGame() {
    var placesTakenSaved = localStorage.getItem("board")
    var theActualIndex = 0
    bigGameMarkersPlaced = 0

    if(placesTakenSaved != null){
        console.log(placesTakenSaved)

        for(var i=0;i<placesTakenSaved.length;i++) {
            if(placesTakenSaved[i] != ",") {
                console.log(placesTakenSaved[i])
                bigGamePlacesTaken[theActualIndex] = placesTakenSaved[i]
                boxID = numberWords[theActualIndex]
                currentGame = theActualIndex + 1
                if(placesTakenSaved[i] == "1") {
                    xWonGame()
                    bigGameMarkersPlaced++
                } else if(placesTakenSaved[i] == "2") {
                    oWonGame()
                    bigGameMarkersPlaced++
                } else if(placesTakenSaved[i] == "3") {
                    tiedGame()
                    bigGameMarkersPlaced++
                }
                theActualIndex++
            }
        }

        if((bigGameMarkersPlaced / 2) % 2 == 0) {
            playerOneTurn = false
        }
    }
    
    document.getElementById("main-Menu-Container").style.transition = ".5s"
    document.getElementById("main-Menu-Container").style.opacity = "0"

    setTimeout(function() {

        document.getElementById("whole-Game-Container").style.display = "flex"
        document.getElementById("whole-Game-Container").style.opacity = "1"
    }, 500)
}

function showMenu() {

}

// Main
var boxID = ""
var numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"]
var placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var markersPlaced = 0
var currentGame = null
var playingGame = false
var playerOneTurn = true
var bigGamePlacesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var bigGameMarkersPlaced = 0
var winnerOne = 0

setInterval(function() {
    if(playerOneTurn && winnerOne == 0) {
        document.getElementById("turn-Indicator").textContent = "Xs Turn"
    } else if(!playerOneTurn && winnerOne == 0){
        document.getElementById("turn-Indicator").textContent = "Os Turn"
    } else if(winnerOne == 1) {
        document.getElementById("turn-Indicator").textContent = "Xs win"
    } else if(winnerOne == 2) {
        document.getElementById("turn-Indicator").textContent = "Os win"
    } else if(winnerOne == 3) {
        document.getElementById("turn-Indicator").textContent = "Tie Game"
    }
}, 500)