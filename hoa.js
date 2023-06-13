document.getElementById('increase-btn').addEventListener('click', increaseQuantity);
document.getElementById('decrease-btn').addEventListener('click', decreaseQuantity);

function increaseQuantity() {
  var input = document.querySelector('.quantity-input');
  var currentValue = parseInt(input.value);
  input.value = currentValue + 1;
}

function decreaseQuantity() {
  var input = document.querySelector('.quantity-input');
  var currentValue = parseInt(input.value);
  if (currentValue > 0) {
    input.value = currentValue - 1;
  }
}
