function add() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    document.getElementById("result").innerHTML = (a + b)
}
function minus() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    document.getElementById("result").innerHTML = (a - b)
}
function kopaytma () {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    document.getElementById("result").innerHTML = (a * b)
}
function bolish() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    document.getElementById("result").innerHTML = (a / b)
}