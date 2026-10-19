const formAddTask = document.getElementById("form-add-task") //форма создания новой задачи
const inputTask = document.getElementById("name") // элемент, куда пользователь вводит название новой задачи
const container = document.querySelector(".tasks") //контейнер со списком задач
let tasks = [] // список элементов задач(NodeList)

// функционал добавления задач
formAddTask.addEventListener("submit", function (event) {
    event.preventDefault() // отменяется событие по умолчанию: перезагрузка
    let nameTask = inputTask.value // считываем, что пользователь ввёл название задачи
    let newTask = document.createElement("div") // создаём пустой тег див для задач
    newTask.innerHTML = `<span>${nameTask}</span>` // добавляем текст задачи в див
    newTask.classList.add("task") // добавляем у дива класс таск
    container.append(newTask) // добавляем задачу в контейнер задач

    tasks.push(newTask) // добавляем задачу в массив
})

// функциионал - перевести все задачи в нижний регистр
const btnLowCase = document.getElementById("lowCase")
btnLowCase.addEventListener(`click`, function () {
    let newTasks = [...tasks] // н
    // овый массив на базе основного
    for (let i = 0; i < newTasks.length; i++) { // перебираем все элементы массива
        newTasks[i] = newTasks[i].innerHTML.toLowerCase() // переводим каждую задачу в нижний регистр
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

// сортировка по имени задачи по алфавиту
const btn1 = document.getElementById("btn")
function compare(a, b) { // функция сравнения для сортировки
    // если первое значение больше второго
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1
    // если равны
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0
    // если первое значение меньше второго
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1
}

btn1.addEventListener(`click`, function(){
    let newTasks = [...tasks].sort(compare) // преобразуем коллекцию в массив

    container.innerHTML = "" // очищаем контейнер

    for (let i in newTasks) { // перебор всех элементов в массиве
        container.append(newTasks[i]) // добавление новых элементов в контейнер
    }
})

