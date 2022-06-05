import json from './data.json' assert { type: 'json' };

const label = document.querySelectorAll('.label');
const barDay = document.querySelectorAll('.bar-day');
const amountArr = json.map((data) => data.amount);

const d = new Date();
let day = (d.getDay() === 0) ? 6 : d.getDate; 

for (let i = 0; i < amountArr.length; i++) {
    label[i].innerHTML = `$${amountArr[i]}`;
    barDay[i].style.height = `${amountArr[i]}%`;
    barDay[day].classList = "bar-day current";
}
