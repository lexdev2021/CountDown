const form = document.querySelector('.form');
const input = document.getElementById('input');
const button = document.querySelector('.button');
const output = document.querySelector('.output');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const dateInput = input.value;
    const date = new Date(dateInput);

    const yearInput = date.getFullYear();
    const yearNow = new Date().getFullYear();
    let yearDif = yearInput - yearNow;
    console.log(`yearDif: ${yearDif}`);
   
    const monthInput = date.getMonth();
    const monthNow = new Date().getMonth();
    let monthDif = monthInput - monthNow;
    console.log(`monthDif: ${monthDif}`);

    const dayInput = date.getDate();
    const dayNow = new Date().getDate();
    let dayDif = dayInput - dayNow;
    console.log(`dayDif: ${dayDif}`);

    if(monthDif < 0) {
        yearDif = yearDif - 1;
        monthDif = monthDif + 12;
    }
    if(monthDif === 0 && dayDif < 0) {
        yearDif = yearDif - 1;
        monthDif = monthDif + 12;
        dayDif = dayDif + 31;
    }
    if(dayDif < 0) {
        monthDif = monthDif - 1;
        dayDif = dayDif + 31;
    }
   
    yearDif = convertYear(yearDif);
    monthDif = convertMonth(monthDif);
    dayDif = convertDay(dayDif);

    console.log(`convertYear: ${yearDif}`);
    console.log(`convertMonth: ${monthDif}`);
    console.log(`convertDay: ${dayDif}`);
    
    output.textContent = `До введенной вами даты осталось: ${yearDif} ${monthDif} ${dayDif}`;
})

function convertYear(years) {
    if(years === 1) {
        years = years + ' год';
    } else if(years === 2 || years === 3 || years === 4) {
        years = years + ' года';
    } else if(years === 0) {
        years = '';
    } else {
        years = years + ' лет';
    }
    return years;
}

function convertMonth(months) {
    
    if (months === 1) {
        months = months + ' месяц';
    } else if(months === 2 || months === 3 || months === 4) {
        months = months + ' месяца';
    } else if(months === 0) {
        months = '';
    } else {
        months = months + ' месяцев';
    }
    return months;
}

function convertDay(days) {
    
    if (days === 1) {
        days = days + ' день';
    } else if(days === 2 || days === 3 || days === 4) {
        days = days + ' дня';
    } else if(days === 0) {
        days = '';
    } else {
        days = days + ' дней';
    }
    return days;
}
