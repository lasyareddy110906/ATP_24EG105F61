const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter() employees from IT department
const r1=employees.filter((employee)=> employee.department==="IT");
console.log(r1);


//map() to add:
   //         netSalary = salary + 10% bonus
const r2=employees.map((employee)=>({...employee, netSalary: employee.salary*1.1}));
console.log(r2);


//reduce() to calculate total salary payout
const r3=employees.reduce((total,employee)=> total+employee.salary,0);
console.log(r3);


//find() employee with salary 30000
const r4=employees.find((employee)=> employee.salary===30000);
console.log(r4);


//findIndex() of employee "Neha"
const r5=employees.findIndex((employee)=> employee.name==="Neha");
console.log(r5);