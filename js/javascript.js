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
giveTime();
giveDay();
setInterval(giveTime, 1000);

