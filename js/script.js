const list = document.querySelector('ul');

const input = document.querySelector('#item');

const btn = document.querySelector('button');


btn.addEventListener("click", () => {
    let input_value = input.value;
    input.value = "";

    const list_item = document.createElement('li');
    list.appendChild(list_item);

    const span = document.createElement('span');
    span.textContent = input_value;
    list_item.appendChild(span);

    const button = document.createElement('button');
    button.textContent = "Delete";
    list_item.appendChild(button);

    
    button.addEventListener("click", () => {
        list.removeChild(list_item);
    })


})

