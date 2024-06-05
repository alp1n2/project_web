let cartItems = [];
let totalPrice;
if (localStorage.getItem("total.price")===null)totalPrice = 0;
else {
  totalPrice=parseInt(localStorage.getItem("total.price"));
  document.getElementById('cart-count').textContent = localStorage.getItem("total.price");
    }
localStorage.setItem("total.price",totalPrice);

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const item = this.dataset.item;
    console.log(item);
    const price = parseInt(this.dataset.price);
    totalPrice += price;
    updateCart();
  });
});

document.getElementById('cart-button').addEventListener('click', function() {
  localStorage.setItem("total.price",0);
  document.getElementById('cart-count').textContent=localStorage.getItem("total.price");
});

function updateCart() {
  localStorage.setItem("total.price",totalPrice);
  document.getElementById('cart-count').textContent=localStorage.getItem("total.price");
}
