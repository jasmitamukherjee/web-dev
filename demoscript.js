let btn=document.querySelector('button');
btn.addEventListener('click',showMsg);

function showMsg(){
    let name=prompt('Enter Student name');
    btn.textContent = name;
}