let input = document.getElementById("input");
let form = document.getElementById("form");
let ul = document.getElementById('ul');

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
}
//文字が入っていればリスト追加
form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (input.value) {
            add();
        }
    })
    //リスト追加関数
function add(todo) {
    const li = document.createElement("li");
    li.innerText = input.value;
    if (todo) {
        li.innerText = todo.text;
    };
    //削除機能
    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        li.remove();
        saveData();
    });
    //完了線の保存
    li.addEventListener("click", () => {
        li.classList.toggle("text-decoration-line-through");
        saveData();
    });

    li.classList.add("list-group-item");

    if (todo && todo.completed) {
        li.classList.add("text-decoration-line-through");
    }

    ul.appendChild(li);
    input.value = "";
    saveData();
}
//データセーブ関数
function saveData() {
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration-line-through")
        };
        todos.push(todo);
    });
    localStorage.setItem("todos", JSON.stringify(todos));

}



// let input = document.getElementById("input");
// let output = document.getElementById('output');

// input.addEventListener("input", (e) => {
//     e.preventDefault();
//     let value = input.value;
//     output.innerText = `${value}`
//     console.log(input.value);
// })