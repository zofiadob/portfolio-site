
const modal = document.getElementById("myModal");
const items = document.querySelectorAll(".item:nth-of-type(n)");

    items.forEach(item => {
    item.addEventListener("click", () => {
        const modalImg = document.getElementById("imgToShow");
        let style = window.getComputedStyle(item, false); 
          modal.style.display = "block";
          modalImg.src = style.backgroundImage.slice(5,-2);
    })
})

let span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}