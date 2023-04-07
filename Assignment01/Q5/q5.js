let students = [
    { name: "Abiha", marks: [ 98, 92, 89, 94, 85] },
    { name: "Hani", marks: [86, 74, 70, 90, 85 ] },
    { name: "Zainab", marks:  [60, 59, 70, 75, 83]}
]; 

students.forEach((student) => {
  const avg = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
  student.avg = avg;

  let grade;
  if (student.avg < 60) {
    grade = "F";
  } else if (student.avg < 70) {
    grade = "D";
  } else if (student.avg < 80) {
    grade = "C";
  } else if (student.avg < 90) {
    grade = "B";
  } else {
    grade = "A";
  }
  student.grade = grade;
});

document.write("<h1>MARKSHEET </h1>");
document.write("<table>");
document.write("<tr><th>Student Name </th><th>Range </th><th>Grade </th></tr>");


students.forEach((student) => {
  document.write(`<tr><td>${student.name}</td>
  <td>${student.avg.toFixed(2)}</td>
  <td>${student.grade}</td></tr>`);
});
document.write("</table>");
