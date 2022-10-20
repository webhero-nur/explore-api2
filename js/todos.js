function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // get the element
    const todosContainer = document.getElementById('todo-container');

    for (const todo of todos) {
        // create the child
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is completed: ${todo.completed === true ? 'Complete' : 'Not complete'}</p>
        `;
        todosContainer.appendChild(todoDiv);
    }
    console.log(todos);
}


loadTodos();