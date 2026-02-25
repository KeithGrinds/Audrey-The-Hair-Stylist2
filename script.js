const buttons = document.querySelectorAll('.filters button');
const items = document.querySelectorAll('.item');

buttons.forEach(btn=>{
btn.addEventListener('click',()=>{
document.querySelector('.filters .active').classList.remove('active');
btn.classList.add('active');

const filter = btn.dataset.filter;

items.forEach(item=>{
if(filter === "all" || item.classList.contains(filter)){
item.style.display="block";
setTimeout(()=> item.style.opacity="1",100);
}else{
item.style.opacity="0";
setTimeout(()=> item.style.display="none",300);
}
});
});
});

/* MODAL */

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const close = document.querySelector('.close');

items.forEach(item=>{
item.addEventListener('click',()=>{
modal.style.display="flex";
modalImg.src=item.querySelector('img').src;
});
});

close.addEventListener('click',()=>{
modal.style.display="none";
});
