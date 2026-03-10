// payment.js

import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function validatePaymentMethod(method) {
  const methods = ["card", "upi", "cod"];
  return methods.includes(method);
}

export function processPayment(paymentMethod, couponCode = null) {

  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  let discountData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal
  };

  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, items);
  }

  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment successful"
  };
}

function generateOrderId() {
  return "ORD" + Date.now();
}