let user = {
  name: "Ravi",
  city: "Hyderabad"
};

// Clone object and add age
let updatedUser = {
  ...user,
  age: 25
};

// Print objects
console.log(user);
console.log(updatedUser);