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