const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Use filter() to get students who passed (marks >= 40)
const pass=students.filter((student)=>student.marks>=40)
console.log(pass);


//map() to add a grade field
             // ≥90 → A
             // ≥75 → B
             // ≥60 → C
             // else → D
const grade=students.map((student)=>{
    if(student.marks>=90){
        return{...student, grade:"A"};
    }
    else if(student.marks>=75){
        return{...student, grade:"B"};
    }
    else if(student.marks>=60){
        return{...student, grade:"C"};
    }
    else{
        return{...student, grade:"D"};
    }
})
console.log(grade);


//reduce() to calculate average marks
const average=students.reduce((total,student)=> total+student.marks,0)/students.length;
console.log(average);


//find() the student who scored 92
const find=students.find((students)=>students.marks===92)
console.log(find);


//findIndex() of student "Kiran"
const index=students.findIndex((students)=>students.name==="Kiran")
console.log(index);