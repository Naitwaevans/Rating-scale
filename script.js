const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rateAgain");
const rates = document.querySelectorAll(".btn")
const rating = document.getElementById("rating")


submitButton.addEventListener("click", ()=>{
    thanksContainer.classList.remove("hidden")
    mainContainer.getElementsByClassName.display = "none"
})


rateAgain.addEventListener("click", ()=>{
    thanksContainer.classList.remove.add("hidden")
    mainContainer.getElementsByClassName.display = "block"
})


rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})