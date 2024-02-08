const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getStartMonth(expense) {

    const [weekday, userMonth, ...rest] = expense.time.split(" ");
    return userMonth;
}

export function splitMonths(userMonth) {

    const index = months.indexOf(userMonth);
    const copyOfMonths = [...months];
    copyOfMonths.splice(0, index);
    return copyOfMonths;
}

export function getCurrentTime() {
    const currentTime = new Date();
    return `${weekdays[currentTime.getDay()]} ${months[currentTime.getMonth()]} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}`;
}