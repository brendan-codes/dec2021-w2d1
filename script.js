console.log("Hello world!");

function doStuff(element){
    console.log("I am script!");
    console.log(element);

    element.innerText = "Sign in!";
}

function remove(element){
    element.remove();
}

function deleteTitle(){
    var element = document.querySelector("body");
    console.log(element);
    var color = `background-color: rgb(${rand255()}, ${rand255()}, ${rand255()})`;
    console.log(color);
    element.style = color;
    // string interpolation
}

function rand255(){
    return Math.floor(Math.random() * 256);
}