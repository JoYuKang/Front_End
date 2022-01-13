console.log("HELLO JS ");


const sc = document.querySelectorAll('div')

sc.forEach(el =>{
  console.log(el.dataset.fruitName);
});