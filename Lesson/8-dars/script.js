let students = [
  { name: "Ali", age: 18, score: 72 },
  { name: "Vali", age: 20, score: 85 },
  { name: "Hasan", age: 17, score: 60 },
  { name: "Husan", age: 22, score: 90 },
  { name: "Olim", age: 19, score: -10 }
];

document.getElementById("ro'yhat").innerHTML = JSON.stringify(students, null, 2);