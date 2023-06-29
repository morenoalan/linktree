document.getElementById('copyleft-year').innerHTML =  new Date().getUTCFullYear();

const avatarBlackWhite = "https:\/\/docs.google.com\/uc?id=1uHDLyLczYNEdIDrHPjCkGthtKumsc-pr";
const avatarColorful = "https:\/\/docs.google.com\/uc?id=1O0vkLZaeW9DeJ2tuF0BkdytTI2qNqtuX";

function ChangeAvatar(element, avatar) {
    element.setAttribute('src', avatar);
}

var theme;
function ChangeTheme(element) {
    if (theme != 'colorful') {
        theme = 'colorful';
        element.setAttribute('src', avatarColorful);
        element.setAttribute('onmouseover','ChangeAvatar(this, avatarBlackWhite)');
        element.setAttribute('onmouseout','ChangeAvatar(this, avatarColorful)');
        document.getElementsByTagName('body')[0].style.backgroundImage = 'linear-gradient(rgb(177,0,170),rgb(212,0,85))';
        document.getElementById('animated-background').classList.remove('display-none');
        document.getElementById('favicon').setAttribute('href', avatarColorful);
    }else{
        theme = 'dark';
        element.setAttribute('src', avatarBlackWhite);
        element.setAttribute('onmouseover','ChangeAvatar(this, avatarColorful)');
        element.setAttribute('onmouseout','ChangeAvatar(this, avatarBlackWhite)');
        document.getElementsByTagName('body')[0].style.backgroundImage = 'linear-gradient(rgb(15,15,15), rgb(74,74,74)';
        document.getElementById('animated-background').classList.add('display-none');
        document.getElementById('favicon').setAttribute('href', avatarBlackWhite);
    }
}