document.getElementById('copyleft-year').innerHTML =  new Date().getUTCFullYear();

const avatarBlackWhite = "https\:\/\/avatars.githubusercontent.com\/u\/42527377?v=4";
const avatarColorful = "https\:\/\/media-exp1.licdn.com/dms/image/C4D03AQHwoJLUcFqS3Q/profile-displayphoto-shrink_400_400/0/1668050180065?e=1673481600&v=beta&t=r0ttbzNaIpW36dlA0Fjb0KYxnP0YGuP6eE3nh97ep0w";

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
    }else{
        theme = 'dark';
        element.setAttribute('src', avatarBlackWhite);
        element.setAttribute('onmouseover','ChangeAvatar(this, avatarColorful)');
        element.setAttribute('onmouseout','ChangeAvatar(this, avatarBlackWhite)');
        document.getElementsByTagName('body')[0].style.backgroundImage = 'linear-gradient(rgb(15,15,15), rgb(74,74,74)';
        document.getElementById('animated-background').classList.add('display-none');
    }
}

/*
function GrabVectors() {
    let whatIconIWillPut = document.getElementsByClassName('icon')[0].childNodes[1].getAttribute('id');
    console.log(whatIconIWillPut);
    let namingVector = whatIconIWillPut.slice(5, whatIconIWillPut.length);
    namingVector = 'material-filled-' + namingVector;
    console.log(namingVector);
    let iframeAddress = 'https://vectours.blogspot.com';
    console.log(iframeAddress);
    //cross-origin problems
}
GrabVectors();

var statusLanguage;

function changeLanguage(statusLanguage){
    let pTagsList = document.getElementsByClassName('p');
    for (let i; i < pTagsList.length; i++){
        pTagsList[i].outerText = '';
    }
}
*/