var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world New!';



myHeading.onclick = alertFun
function alertFun() {
    alert("JavaScript Alert")
}

var h2Param = document.querySelector('h2');

h2Param.addEventListener('click', updateContent);
function updateContent() {
    var content = prompt('enter a new content');
    h2Param.textContent = content;
}
//
// var clickButtonPrev = document.getElementById('imagePrev');
// clickButtonPrev.addEventListener('click', changeImagePrev);
// function changeImagePrev() {
//     // alert("prev clicked!");
//     var imageSrc = document.querySelector('img');
//     imageSrc.src = 'images/58.jpg';
// }
//
// var clickButtonNext = document.getElementById('imageNext');
// clickButtonNext.addEventListener('click', changeImageNext);
// function changeImageNext() {
//     // alert("next clicked!");
//     var imageSrc = document.querySelector('img');
//     imageSrc.src = 'images/55.jpg';
// }

window.onload = init;
function init() {
    document.getElementById('imagePrev').onclick = changeImage;
    document.getElementById('imageNext').onclick = changeImage;
}

function changeImage() {
    var imageSrc = document.querySelector('img');
    switch(this.id) {
        case 'imagePrev':
            imageSrc.src = 'images/58.jpg';
            break;
        case 'imageNext':
            imageSrc.src = 'images/55.jpg';
            break;
    }
}