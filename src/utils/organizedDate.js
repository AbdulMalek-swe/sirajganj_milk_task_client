export const organizedDate = (date) =>{
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date(date);
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear()
return `${month} ${day}, ${year.toString().slice(2,4)}`
}