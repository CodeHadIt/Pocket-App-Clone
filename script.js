const features = document.querySelectorAll(".features");
const tbds = document.querySelectorAll(".tbd");

const pay = document.querySelector(".pay");
const shop = document.querySelector(".shop");
const group = document.querySelector(".group");
const card = document.querySelector(".card");

const payContainer = document.querySelector(".payments-container");
const shopsContainer = document.querySelector(".shops-container");
const groupsContainer = document.querySelector(".groups-container");
const cardsContainer = document.querySelector(".cards-container");

function changeDisplay (container) {
    tbds.forEach(tbd => {
        tbd.classList.remove("active");
        tbd.classList.add("inactive");
    })
    container.classList.remove("inactive")
    container.classList.add("active");
}

function changeBg (element) {
    features.forEach((feature) => {
        feature.classList.remove("current");
        feature.classList.add("docile");
    })
    element.classList.remove("docile")
    element.classList.add("current");
}

pay.addEventListener("click", ()=>{
    changeDisplay(payContainer);
    changeBg(pay);
});

shop.addEventListener("click", ()=>{
    changeDisplay(shopsContainer);
    changeBg(shop);
});

group.addEventListener("click", ()=>{
    changeDisplay(groupsContainer);
    changeBg(group);
});

card.addEventListener("click", ()=>{
    changeDisplay(cardsContainer);
    changeBg(card);
});

