const productSection = document.querySelector('#p-section');


const URL = 'http://localhost:5000/products/';

const getProducts = async () => {
   fetch ('https://muntasir-shopit.herokuapp.com/products/')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         data.forEach(product => {
            const { name, address, description } = product;
            const storeName = 'Tesco';
            let random = Object.values(address);
            console.log(Array.isArray(random));

            let a = document.createElement('a');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let div = document.createElement('div');
            let img = document.createElement('img');

            img.setAttribute('src', './img/bread.jpg');
            p1.className = 'product-name';
            p2.className = 'store-name';
            p3.className = 'address';
            div.className = 'product';

            p1.appendChild(document.createTextNode(`${name}`));
            p2.appendChild(document.createTextNode(`${storeName}`));
            p3.appendChild(document.createTextNode(`${random}`));
            
            div.appendChild(img);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            a.appendChild(div);
            productSection.appendChild(a);
         })
      });
};

document.onload = getProducts();




