let body = $request.body;

let req_json = JSON.parse(body);



// let optimize = req_json.optimize;
// if (optimize) {
//     const index = optimize.indexOf('useRedis');

//     if (index !== -1) {
//         optimize.splice(index, 1);
//         console.log('Removed "useRedis" from optimize array');
//     }
// }

// 2:  按小时 1: 按分钟 ; 3 按天
let type = req_json.type;

let start_date = req_json.startDate;
let end_date = req_json.endDate;
console.log(req_json)
console.log(start_date)
console.log('start_date: %s, , end_date: %s', start_date, end_date);

// 当前日期，格式：yyyy-MM-dd，如 2026-02-26
let currentDate = new Date().toJSON().slice(0, 10);

if (start_date && end_date) {
    if (start_date == 'Invalid date' && end_date == 'Invalid date') {
        var theDayBefore7Days = new Date();
        theDayBefore7Days.setDate(theDayBefore7Days.getDate() - 7);
        req_json.startDate = theDayBefore7Days.toJSON().slice(0, 10);
        req_json.endDate = currentDate;
        console.log('Removed invalid date');
    }
}

let reqDate = req_json.date;
// 小时且 date 为空
if ((type == 2 || type == 1) && (!reqDate || reqDate && reqDate.length == 0)) {
    req_json.date = [currentDate];
    // req_json.date = currentDate;
    console.log('Set date to current date');
}

// req_json.optimize = optimize;
let json_str = JSON.stringify(req_json);

$done(
    {
        body: json_str,
    }
)