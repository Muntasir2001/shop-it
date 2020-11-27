//Your entire JS code here
const filterProducts = document.querySelector('#search-product');

//event listener
filterProducts.addEventListener('keyup', filterProduct);
filterStores.addEventListener('mouseup', filterStore);

//filter tasks functions
function filterProduct(e) {
   const text = e.target.value.toLowerCase();

   console.log(text);

   document.querySelectorAll('.product-name').forEach(function(product) {
      console.log('i made it');
      const item = product.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1) {
            // console.log('i made it 1');
            product.parentNode.parentNode.style.display = 'block';
            // console.log('i made it 2');
      } else {
            // console.log('i made it 3');
            product.parentNode.parentNode.style.display = 'none';
            // console.log('i made it 4');
      }
   });
}

const filterStores = document.querySelector('#store-select');

function filterStore(e) {
   const text = e.target.value.toLowerCase();

   console.log(text);

   document.querySelectorAll('.store-name').forEach(function(store) {
      console.log("I am here!");
      const item = store.firstChild.textContent;

      if (item.toLowerCase().indexOf(text) != -1) {
         store.parentNode.parentNode.style.display = 'block';
      } else {
         store.parentNode.parentNode.style.display = 'none';
      }
   });
}

 