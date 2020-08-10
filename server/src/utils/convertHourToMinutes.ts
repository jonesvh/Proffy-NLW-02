export default function convertHourToMinute(time: string){
    const [hour, minutes] = time.split(':').map(Number); // 8:30 -> (hour = 8, minutes = 30) to number
    const timeInMinutes = (hour * 60) + minutes; // hour * 60 = minutes + minutes
    return timeInMinutes;
}