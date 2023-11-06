const buttonUp = document.querySelector('.arrow-up');
const buttonDown = document.querySelector('.arrow-down');
const columnList = document.querySelectorAll('.text-col');


function changeText(num, nextnum, upOrDown){

    if(upOrDown === 'up'){
        columnList[(num + 2)%3].style.display = 'none';
        columnList[(nextnum + 2)%3].style.display = 'inline';
    }
    else if(upOrDown === 'down'){
        columnList[(num + 2)%3].style.display = 'none';
        columnList[(num + 1)%3].style.display = 'inline';
    }
}


buttonUp.addEventListener('click', state => {
    const currentImg = document.querySelector('.img-col');
    let style = window.getComputedStyle(currentImg, false); 
    let num = style.backgroundImage.slice(-7, -6); 
    let nextNum = (parseInt(num) + 1) % 3;
    currentImg.style.backgroundImage = "url('https://raw.githubusercontent.com/zofiadob/portfolio-site/main/images/projects-images/project-00" + nextNum + ".png')";
    changeText(num, nextNum, 'up');
})

buttonDown.addEventListener('click', state => {
    const currentImg = document.querySelector('.img-col');
    let style = window.getComputedStyle(currentImg, false); 
    let num = style.backgroundImage.slice(-7, -6); 
    let nextNum = (parseInt(num) + 2) % 3;
    currentImg.style.backgroundImage = "url('https://raw.githubusercontent.com/zofiadob/portfolio-site/main/images/projects-images/project-00" + nextNum + ".png')";
    changeText(num, nextNum, 'down');
})