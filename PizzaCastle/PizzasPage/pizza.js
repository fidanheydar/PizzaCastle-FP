const changeLang=document.querySelector(".lang_change");
const list=document.querySelector(".list");
const selected=document.querySelector(".selected");
const selectedImg=document.querySelector(".selectedImg");

changeLang.addEventListener("click",()=>{
    list.classList.toggle("show");
})
list.addEventListener("click",(e)=>{
const img=e.target.querySelector("img");
const txt=e.target.querySelector(".txt");


selectedImg.src=img.src;
selected.innerHTML=txt.innerHTML;
})

// document.getElementById("signin").addEventListener("click", function() {
//     document.getElementById("myModal").style.display = "block";
// });

// document.getElementsByClassName("close")[0].addEventListener("click", function() {
//     document.getElementById("myModal").style.display = "none";
// });

//  window.addEventListener("click", function(event) {
//      const modal = document.getElementById("myModal");
//      if (event.target === modal) {
//          modal.style.display = "none";
//      }
//  });
// const filters = document.querySelectorAll('.filter');
//     const pizzaCards = document.querySelectorAll('.col');

//     filters.forEach(filter => {
//       filter.addEventListener('click', (event) => {
//         event.preventDefault();
//         const selectedCategory = filter.getAttribute('data-category');

//         pizzaCards.forEach(card => {
//           const categories = card.querySelector('.card_desc span').textContent;
//           if (selectedCategory === 'all' || categories.includes(selectedCategory)) {
//             card.classList.remove('hidden');
//           } else {
//             card.classList.add('hidden');
//           }
//         });
//       });
//     });
