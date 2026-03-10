const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};
// Deep copy using JSON method
const copiedOrder = JSON.parse(JSON.stringify(order));

// Modify copied object
copiedOrder.customer.address.city = "Bangalore";
copiedOrder.items[0].price = 65000;

// Print both objects
console.log("Original Order:", order);
console.log("Copied Order:", copiedOrder);