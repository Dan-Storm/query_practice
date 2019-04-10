console.log("You linked your JS file!");
// change test in header
document.querySelector(".article__header").textContent = "Welcome To The Unicorn Blog";
// create variable to change article header
const changeClassList = document.querySelectorAll(".article__header");
// for loop 
for(let i = 0; i < changeClassList.length; i++){
    changeClassList[i].classList.add("important")
}

const changeClassList2 = document.querySelector(".dashed"); 
changeClassList2.classList.remove("dashed");

const changeClassList3 = document.querySelector(".article__footer"); 
changeClassList3.classList.add("goldenrod");