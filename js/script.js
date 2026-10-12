const formAddTask = document.getElementById("form-add-task") //форма создания новой задачи
const inputTask = document.getElementById("name") // элемент, куда пользователь вводит название новой задачи
const container = document.querySelector(".tasks") //контейнер со списком задач
let tasks = [] // массив задач

// функционал добавления задач
formAddTask.addEventListener("submit", function (event) {
    event.preventDefault() // отменяется событие по умолчанию: перезагрузка
    let nameTask = inputTask.value // считываем, что пользователь ввёл название задачи
    let newTask = document.createElement("div") // создаём пустой тег див для задач
    newTask.innerHTML = `<span>${nameTask}</span>` // добавляем текст задачи в див
    newTask.classList.add("task") // добавляем у дива класс таск
    container.append(newTask) // добавляем задачу в контейнер задач

    tasks.push(nameTask) // добавляем задачу в массив
})

// функциионал - перевести все задачи в нижний регистр
const btnLowCase = document.getElementById("lowCase")
btnLowCase.addEventListener(`click`, function () {
    let newTasks = [...tasks] // новый массив на базе основного
    for (let i = 0; i < newTasks.length; i++) { // перебираем все элементы массива
        newTasks[i] = newTasks[i].toLowerCase() // переводим каждую задачу в нижний регистр
    }
    // console.log("Основной массив")
    // console.log(tasks)
    // console.log("Новый массив")
    // console.log(newTasks)

    container.innerHTML = "" // очищаем контейнер

    for (let i in newTasks) { // перебираем массив и для каждого элемента создаём запись в контейнере
        let newTask = document.createElement("div") // создаём пустой тег див для задач
        newTask.innerHTML = `<span>${newTasks[i]}</span>` // добавляем текст задачи в див
        newTask.classList.add("task") // добавляем у дива класс таск
        container.append(newTask) // добавляем задачу в контейнер задач
    }
})


