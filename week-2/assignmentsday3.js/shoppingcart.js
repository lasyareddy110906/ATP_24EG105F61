const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Use filter() to get only inStock products
const r1= cart.filter((item)=> item.inStock===true);
console.log(r1);


//Use map() to create a new array with: { name, totalPrice }
const r2=cart.map((item)=>({...item, totalPrice: item.price*item.quantity}));
console.log(r2);


//Use reduce() to calculate grand total cart value
const r3=cart.reduce((total,item)=> total+item.price*item.quantity,0);
console.log(r3);


//Use find() to get details of "Mouse"
const r4=cart.find((item)=> item.name==="Mouse");
console.log(r4);


//Use findIndex() to find the position of "Keyboard"
const r5=cart.findIndex((item)=> item.name==="Keyboard");
console.log(r5);