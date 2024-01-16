document.querySelectorAll('.product-showcase img').forEach(function(image) {
    image.addEventListener('mouseenter', function() {
      this.parentElement.querySelector('.add-to-cart').style.display = 'block';
    });
  
    image.addEventListener('mouseleave', function() {
      this.parentElement.querySelector('.add-to-cart').style.display = 'none';
    });
  });
  
  document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
      // Add the clicked product to the cart and update the cart display
    });
  });