console.log("parsing script");

var a = document.getElementById("a");
var b = document.getElementById("b");
var result = document.getElementById("result");
var change = document.getElementById("change");
var container = document.getElementsByClassName("container");


//alert('hiiiiiiiiiii this workkkks');

function add() {
    try {
        result.innerHTML = parseInt(a.value) + parseInt(b.value);
        a.value = "";
        b.value = "";
    } catch (error) {   
        result.innerHTML = "please input an integer uwu"
    }
}

function big() {
    change.style.fontSize = '50px';
}

function smol() {
    change.style.fontSize = "10px"; 
}

function greet() {
    var name = document.getElementById("name");
    var ouput = document.getElementById("output");
    output.innerHTML = name.value;
}


console.log("script parsed");