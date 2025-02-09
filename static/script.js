const input_day = document.querySelector('.day');
const input_month = document.querySelector('.month');
const input_year = document.querySelector('.year');
const inputs = document.querySelectorAll('input');
const titles = document.querySelectorAll('.titles');
const warnings = document.querySelector(".warning");
const click = document.querySelector('.arrow');;


const now = new Date();
const current_day = now.getDate();
const current_month = now.getMonth() + 1;
const current_year = now.getFullYear();

const years = document.querySelector('.bot-years');
const months = document.querySelector('.bot-months');
const days = document.querySelector('.bot-days');
console.log(current_month)

click.addEventListener('click', () => {
    if (Number(inputs[0].value) >= 29 && Number(inputs[1].value) == 4) { 
        for (let i = 0; i < titles.length; i++) {
            titles[i].setAttribute("style","color:red;");
            inputs[i].setAttribute("style","border: 1.4px solid red");
            
        }
        warnings.setAttribute("style", "display:grid;");
    } else if (
        (Number(inputs[0].value) > 0 && Number(inputs[0].value) <= 31) &&
        (Number(inputs[1].value) > 0 && Number(inputs[1].value) <= 12) &&
        (Number(inputs[2].value) > 0 && inputs[2].value.length == 4)
    ) { 
        years.textContent = current_year - Number(input_year.value);
        let month_diff = current_month - Number(input_month.value);
        let days_diff = current_day - Number(input_day.value);

        if (days_diff < 0) {
            const daysInLastMonth = new Date(current_year, current_month - 1, 0).getDate();
            days_diff += daysInLastMonth;
            month_diff -= 1; 
        }

        if (month_diff < 0) {
            month_diff += 12; 
            years.textContent = Number(years.textContent) - 1;
        }

        months.textContent = month_diff;
        days.textContent = days_diff;

       
    } else {
        for (let i = 0; i < titles.length; i++) {
            titles[i].setAttribute("style","color:red;");
            inputs[i].setAttribute("style","border: 1.4px solid red");
            
        }
        warnings.setAttribute("style", "display:grid;");
       
    }
});
