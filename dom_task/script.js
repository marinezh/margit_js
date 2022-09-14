const header = document.querySelector('header')
const backButton = document.querySelector('#back_to_top')


window.onscroll = function () {
    scrollFunction();

};

const scrollFunction = () => 
{
    if (document.body.scroll > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg');
        backButton.getElementsByClassName.display = 'block'
    } else {
        header.classList.remove('bg');
        backButton.getElementsByClassName.display = 'none'
    }
}
 
const getToTop = () => {
    console.log('clicked');
    document.body.scrollTop = 0;
    document.documentElement.ScrollTop = 0;
};

backButton.addEventListener('click', getToTop)

