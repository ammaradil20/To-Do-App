const todoInput = document.getElementById('input');
const addButton = document.getElementById('add-button');
const todoItems = document.getElementById('items');

addButton.addEventListener('click', function () {
    const value = todoInput.value.trim();

    if (value !== "") {  
        const li = document.createElement('li');
        li.innerText = value;
        todoItems.appendChild(li);

        const delButton = document.createElement('button');
        delButton.innerText = 'X';
        li.appendChild(delButton);

        delButton.addEventListener('click', function () {
            li.remove();
        });

        todoInput.value = ''; 
    }
});

todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addButton.click();
    }
});
