window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-50){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".7s";

});
