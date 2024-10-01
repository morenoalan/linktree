document.getElementById('copyleft-year').innerHTML = new Date().getUTCFullYear();

const avatarBlackWhite = "./media/profile_bw.png";
const avatarColorful = "./media/profile_colors.jpeg";

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

function changeLanguage(lang) {
    let allLangs = [];
    document.querySelectorAll('.bt_lang').forEach(function(el) {
        allLangs.push(el.id.slice(3));
    });
    console.log(allLangs);
    allLangs.forEach(function(el) {
        el2 = '.'+el;
        console.log(el2);
        if(el == lang) {
            document.querySelectorAll(`${el2}`).forEach(function(elx) {
                elx.classList.remove('display-none');
            });
        } else {
            document.querySelectorAll(`${el2}`).forEach(function(elx) {
                elx.classList.add('display-none');
            });
        }
    })

}