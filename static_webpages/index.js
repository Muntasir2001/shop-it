//filter tasks
window.onload= function (){
   //Your entire JS code here
   const filterTasks = document.querySelector('#search-product');

   //event listener
   filterTasks.addEventListener('keyup', filterTask);

   //filter tasks functions
   function filterTask(e) {
      const text = e.target.value.toLowerCase();

      console.log(text);

      document.querySelectorAll('.product-name').forEach(function(task) {
         console.log('i made it');
         const item = task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) != -1) {
               // console.log('i made it 1');
               task.parentNode.parentNode.style.display = 'block';
               // console.log('i made it 2');
         } else {
               // console.log('i made it 3');
               task.parentNode.parentNode.style.display = 'none';
               // console.log('i made it 4');
         }
      });
   }

}


