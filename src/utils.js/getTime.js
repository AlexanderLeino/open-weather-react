export const getTime = (time) => {
    let date = new Date(time * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = date.getMinutes();
    // Seconds part from the timestamp
    let seconds = date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime = hours + ':' + minutes + ':' + seconds;
    return formattedTime;
}