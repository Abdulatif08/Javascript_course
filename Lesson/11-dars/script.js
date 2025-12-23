const students = [
    { name: "Ali", grade: 85 },
    { name: "Vali", grade: 92 },
    { name: "Sardor", grade: 78 },
    { name: "Doston", grade: 95 },
    { name: "Gulnora", grade: 88 }
];

const studentList = document.getElementById("studentList");
showStudents(students);

function filterStudents() {
    const minGrade = Number(document.getElementById("gradeInput").value);
    const filtered = students.filter(student => student.grade >= minGrade);

    showStudents(filtered);
}

function showStudents(data) {
    studentList.innerHTML = "";
    data.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `${student.name} - ${student.grade}`;
        studentList.appendChild(li);
    });
}
