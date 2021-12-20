console.log("Hello world!");


function login(element){
    element.innerText = "logout";
}


function alertWord(){
    alert("You have clicked Ninja!");
}


function removeElement(){
    // getting element from query selector instead of passing in 'this'
    var element = document.querySelector("#removedElement");
    element.remove();
}

function generate(){
    var area = document.querySelector("#area");
    var htmlString = ""

    for(var i = 1; i < 100; i++){
        htmlString += `<div id="${i}" class="square">${i}</div>`
    }

    area.innerHTML = htmlString;
}

generate();