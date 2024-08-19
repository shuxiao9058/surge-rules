
let headers = $request.headers;

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

const result = {};
result.headers = headers;

$done(result);


