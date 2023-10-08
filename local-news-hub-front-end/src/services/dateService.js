export function formatDate(dateStr) {
    // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const daysOfWeek = ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'];
    const monthsOfYear = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"];

    // const now = new Date();
    const dateObj = new Date(dateStr);

    // if (dateObj.toDateString() === now.toDateString()) {
    //     return 'today';
    // } else {

    // let dayOfWeek = daysOfWeek[dateObj.getDay()];
    let month = monthsOfYear[dateObj.getMonth()];
    let day = dateObj.getDate();
    let year = dateObj.getFullYear();

    // return `${dayOfWeek}, ${day} ${month} ${year}`;
    return `${day} ${month} ${year}`;

    // }
    // Add more conditions for displaying other relative date strings,
    //  such as "yesterday" or "last week"
};