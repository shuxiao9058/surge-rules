
let headers = $request.headers;
let url = $request.url;
let body = $request.body;

let body_str;

if (headers) {
    let cookie = headers['Cookie'];
    if (cookie && cookie.includes("Lang=en-us")) {
        cookie = cookie.replace("Lang=en-us", "Lang=zh-cn");
    } else {
        cookie = cookie + "; Lang=zh-cn";
    }
    headers['Cookie'] = cookie;
    $request.headers = headers;

    // if (headers['Lang']) {
    headers['Lang'] = "zh-cn"
    // }

    if (headers['Accept-Language']) {
        headers['Accept-Language'] = "zh,zh-CN;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6"
    }
    $request.headers = headers;
}

/*
if (body) {
    if (url.endsWith("/api/v1/datarulereport/getReportEchart")) {
        let req_json = JSON.parse(body);

        let optimize = req_json.optimize;
        if (optimize) {
            const index = optimize.indexOf('useRedis');

            if (index !== -1) {
                optimize.splice(index, 1);
                console.log('Removed "useRedis" from optimize array');
            }
        }

        req_json.optimize = optimize;
        body_str = JSON.stringify(req_json);
    } else if (url.endsWith("/api/v1/dataruleEchart/getEchart")) {
        const params = new URLSearchParams(body);
        params.delete('useredis');
        body_str = params.toString();
    }
}
*/

if (body_str) {
    $done({
        headers: headers,
        body: body_str,
    });
} else {
    $done({
        headers: headers
    });
}



