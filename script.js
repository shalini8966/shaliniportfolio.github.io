const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#000000", "#808080", "#000000", "#808080", "#000000","#808080", "#000000"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item=>{
     item.style.cssText=`background-color: ${colors[i++]}`;
});


Array.from(document.querySelectorAll(".navigate-button")).forEach((item)=>{
item.onclick = () =>{
     item.parentElement.parentElement.classList.toggle("change");
};
});
