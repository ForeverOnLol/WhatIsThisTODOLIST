/* Функции для получения времени и дня недели */
let giveTime = () => {
    let now = new Date;
    hours = (now.getHours() < 10) ? '0' + now.getHours() : now.getHours(),
    minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes(),
    seconds = (now.getSeconds() < 10) ? '0' + now.getSeconds() : now.getSeconds();
    document.getElementById('ourClock').innerHTML = (hours + ":" + minutes + ":" + seconds);
}

let giveDay = () => {
    let now = new Date;
    todayIsN = now.getDay();
    let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    document.getElementById('ourDay').innerHTML = ("Сегодня " + days[todayIsN]);
}

// /* Пре-альфа функции для сбора информации из полей, также удаления. Взята из другого скрипта */
// /* Добавление */
// addTaskBtn.addEventListener('click', (event) => {
//     let name = document.getElementById("taskName").value;
//     let descrip = document.getElementById("taskDescrip").value;
//     let content = document.createElement("div");
//     content.className = "todo window";
//     content.id = 'todo';
//     content.innerHTML = '<div class="todo-title todo-padding"><h3>' + name + '</h3><img id="delTask" src="icons/clear-button.png" alt="clear"></div><p class="todo-padding todo-border">'+ descrip + '</p>'
//     list.append(content);
// });

// /* Удаление */
// document.body.addEventListener('click', (event) => { 
//     let target = event.target;
//    if (target.id == 'delTask') {
//        target.closest('.todo').remove();
//    }     
// });


giveTime();
giveDay();
setInterval(giveTime, 1000);
