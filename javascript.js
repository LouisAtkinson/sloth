const sloth = document.getElementById("sloth")
sloth.classList.add("sloth");
let height = 50;

document.body.addEventListener("click", function() {
    height += 50;
    sloth.style.height = height + "px";
});