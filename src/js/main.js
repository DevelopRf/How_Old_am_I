let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let result_date = document.getElementById('result_date')
let result_time = document.getElementById('result_time')
let result_year;
let result_month;
let result_day;
let result_hour;
let result_minute;
let result_second;

function age(y, m, d) {

    switch (m) {
        case 'Yanvar': m = 0;
            break;
        case 'Fevral': m = 1;
            break;
        case 'Mart': m = 2;
            break;
        case 'Aprel': m = 3;
            break;
        case 'May': m = 4;
            break;
        case 'Iyun': m = 5;
            break;
        case 'Iyul': m = 6;
            break;
        case 'Avqust': m = 7;
            break;
        case 'Sentyabr': m = 8;
            break;
        case 'Oktyabr': m = 9;
            break;
        case 'Noyabr': m = 10;
            break;
        case 'Dekabr': m = 11;
            break;
    }

    let one_hour = 1000 * 60 * 60;
    let one_minute = 1000 * 60;

    let gt = new Date(y, m, d)

    result_year = Math.floor((Date.now() - gt.getTime()) / (86400000 * 365))
    result_month = Math.floor((Date.now() - gt.getTime()) / (86400000 * 30.4))
    result_day = Math.floor((Date.now() - gt.getTime()) / 86400000)
    result_hour = Math.floor((Date.now() - gt.getTime()) / one_hour)
    result_minute = Math.floor((Date.now() - gt.getTime()) / one_minute)
    result_second = Math.floor((Date.now() - gt.getTime()) / 1000);

    result_date.innerHTML=result_day + ' gün, ' + result_month + ' ay, ' + result_year + ' il';
    result_time.innerHTML=result_hour + ' saat, ' + result_minute + ' dəqiqə, ' + result_second + ' saniyə';
}

