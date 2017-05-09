var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';



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