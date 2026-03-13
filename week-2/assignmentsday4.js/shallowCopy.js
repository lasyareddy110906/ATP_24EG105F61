const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};
// Shallow copy using spread
const copiedUser = { ...user };

// Modify copied object
copiedUser.name = "Rahul";
copiedUser.preferences.theme = "light";

// Print both objects
console.log("Original User:", user);
console.log("Copied User:", copiedUser);