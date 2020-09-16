/***** Deliverable 1 *****/

document.addEventListener('DOMContentLoaded', function(e){
    const header = setHeader();
    changeElementStyleColor(header, 'red');
    listAllPlayers(document.getElementsByClassName('player-container')[0]);
    deletePlayerByDataNumber(document.getElementsByClassName('player-container')[0], 7);
})

function setHeader(){
    const header = document.querySelector("#header");
    console.log("Here's your header:", header);
    return header;
}

/***** Deliverable 2 *****/
function changeElementStyleColor(element, color){
    element.style.color = color;
}


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
function listAllPlayers(playerContainer){
    for (let player of PLAYERS){
        playerContainer.appendChild(displayPlayer(player));
    }
}

function displayPlayer(player){
    const playerDIV = document.createElement('div');
    playerDIV.classList.add("player");
    playerDIV.setAttribute("data-number",player.number);

    const playerHeader = document.createElement('h3');
    playerHeader.innerHTML = `${player.name} (<em>${player.nickname}</em>)`;

    const playerImage = document.createElement('img');
    playerImage.src = player.photo;
    playerImage.alt = player.name;

    playerDIV.appendChild(playerHeader);
    playerDIV.appendChild(playerImage);

    return playerDIV;
}

/***** Deliverable 4 *****/

function deletePlayerByDataNumber(container, number){
    container.querySelector(`[data-number="${number}"]`).remove();
}