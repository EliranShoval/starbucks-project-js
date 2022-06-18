const header = document.querySelector('header');
header.setAttribute('id','header-page');

let imageLogo = document.querySelector('img');
imageLogo.src = './img/logo.png';
imageLogo.style.width = '65px';

let mainSection = document.querySelector('section');
mainSection.classList.add('main-section');

const mainTitle = document.querySelector('h1');
mainTitle.innerHTML = 'Its not just coffee<br>Its <span>Starbucks</span>';

const contentPage = document.querySelector('p');
contentPage.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type printer took a galley of type and scrambled it to make a type scrambled it to make a type printer took a galley of type and scrambled it to make a type ';

let button = document.querySelector('a');
button.innerText = 'Learn more';

let imageSliderSection = document.querySelector('.main-section img');
imageSliderSection.src = './img/img1.png';
//console.log(imageSliderSection);

let menuDrink = document.querySelector('footer div');
    menuDrink.style.textAlign = 'center';

let image_Footer = document.querySelector('footer div img:first-child');
    image_Footer.src = './img/thumb1.png';

let image_Footer_2 = document.querySelector('footer div img:nth-child(2)');
    image_Footer_2.src = './img/thumb2.png';

let image_Footer_3 = document.querySelector('footer div img:nth-child(3)');
    image_Footer_3.src = './img/thumb3.png';

let body = document.querySelector('body');

function sliderImg(){
        image_Footer_2.addEventListener('click',() =>{
        imageSliderSection.src = './img/img2.png';
        body.style.background = '#b25873';
    })

        image_Footer.addEventListener('click',() =>{
        imageSliderSection.src = './img/img1.png';
        body.style.background ='#035f39';

    })

        image_Footer_3.addEventListener('click',() =>{
        imageSliderSection.src = './img/img3.png';
        body.style.background ='#c94ba5';
    })


}
sliderImg();
