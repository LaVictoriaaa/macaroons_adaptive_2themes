document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

// document.querySelector('.theme svg').onclick = function () {
//     document.querySelector('.theme svg').classList.remove('theme_dark');
//     document.querySelector('.theme svg').classList.add('theme_light'.css('block'));
// }
