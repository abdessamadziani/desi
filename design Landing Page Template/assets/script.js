const berger=document.querySelector(".burger");
const menu=document.querySelector(".navigation1");



berger.addEventListener("click",()=>
{
    menu.classList.toggle("active");
});

document.querySelectorAll(".h_links").forEach(n => n.
    addEventListener("click",() => { menu.classList.remove("active")}))