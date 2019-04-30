console.log("parsing script");

var change = document.getElementById("change");
var container = document.getElementsByClassName("container");

//alert('hiiiiiiiiiii this workkkks');

function add() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var result = document.getElementById("result");
    try {
        result.innerHTML = parseInt(a.value) + parseInt(b.value);
        a.value = "";
        b.value = "";
    } catch (error) {
        console.log("error: " + error);
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

function pFun() {
    var p = document.getElementById('p-fun');
    p.innerHTML = 'You just ran a function!';
    p.style.fontSize = '30px';
    p.style.color = 'blue';
}

console.log("script parsed");