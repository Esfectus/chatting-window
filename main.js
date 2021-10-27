const list = document.getElementById('list');
const button = document.getElementById('button');
const input = document.getElementById('input');

button.addEventListener('click', ()=>{
    if (input.value.length <= 0){
        return
    }
    let message = document.createElement('li');
    message.innerText = input.value;
    list.appendChild(message);
    input.value = '';
})