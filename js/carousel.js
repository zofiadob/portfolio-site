const buttonUp = document.querySelector('.arrow-up');
const buttonDown = document.querySelector('.arrow-down');


buttonUp.addEventListener('click', state => {
    const currentImg = document.querySelector('.img-col');
    let style = window.getComputedStyle(currentImg, false); 
    let num = style.backgroundImage.slice(-7, -6); 
    let nextNum = (parseInt(num) + 1) % 3;
    currentImg.style.backgroundImage = "url('../images/projects-images/project-0" + nextNum + ".png')";
    console.log(style.backgroundImage);
    console.log(nextNum);
})

buttonDown.addEventListener('click', state => {
    const currentImg = document.querySelector('.img-col');
    let style = window.getComputedStyle(currentImg, false); 
    let num = style.backgroundImage.slice(-7, -6); 
    let nextNum = (parseInt(num) + 2) % 3;
    currentImg.style.backgroundImage = "url('../images/projects-images/project-0" + nextNum + ".png')";
    console.log(style.backgroundImage);
    console.log(nextNum);
})