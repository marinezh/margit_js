const header = document.querySelector('header');
const backButton = document.querySelector('#back_to_top');
const mobButton = document.querySelector('#mob_button');
const nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');

const modalBtn = document.querySelector('#modal_btn');
const modal = document.querySelector('.overlay')
const modalClose = document.querySelector('.close')

console.log(modalBtn);
console.log(modal);
console.log(modalClose);

// modalBtn.onclick = function() {
//     modal.style.display = "block";
//   }

window.onscroll = function () {
    scrollFunction();

};

const scrollFunction = () => {
    if (document.body.scroll > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg');
        backButton.style.display = 'block'
    } else {
        header.classList.remove('bg');
        backButton.style.display = 'none'
    }
};

const getToTop = () => {
    console.log('clicked');
    document.body.scrollTop = 0;
    document.documentElement.ScrollTop = 0;
};

const mobMenu = () => {
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
};



for (const link of links) {
    link.addEventListener('click', mobMenu);
}


// const modalWinFunc = () => {
//     console.log('clicked');
//     modal.style.display = 'block'
//     }

//    const modalWinClose = () => {
//     modal.style.display = 'none'
//    }


backButton.addEventListener('click', getToTop);
mobButton.addEventListener('click', mobMenu);

// modalBtn.addEventListener('click', modalWinFunc);
// modalClose.addEventListener('click', modalWinClose);



const modalFunc = () => {
    modal.classList.toggle('visible')
}


modalBtn.addEventListener('click', modalFunc);
modalClose.addEventListener('click', modalFunc);
// modul func insted modalwinFunc and modalWinClose