const hearts = document.querySelector(".hearts");
const flowers = document.querySelector(".flowers");



function createHeart(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(5+Math.random()*5)+"s";


heart.style.fontSize=
(15+Math.random()*30)+"px";


hearts.appendChild(heart);



setTimeout(()=>{

heart.remove();

},10000);


}



function createFlower(){

let flower=document.createElement("div");

flower.className="flower";


let flowersList=[
"🌸",
"🌷",
"🌹",
"🌺"
];


flower.innerHTML=
flowersList[
Math.floor(Math.random()*flowersList.length)
];


flower.style.left=
Math.random()*100+"vw";


flower.style.animationDuration=
(6+Math.random()*6)+"s";



flowers.appendChild(flower);



setTimeout(()=>{

flower.remove();

},12000);


}



setInterval(createHeart,500);

setInterval(createFlower,800);
