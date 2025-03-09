function getQueryParams(url) {
    const queryParams = {};
    const queryString = url.split('?')[1];

    if (!queryString) {
        return queryParams;
    }

    const pairs = queryString.split('&');

    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        queryParams[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });

    return queryParams;
}

let url = $request.url;
let headers = $request.headers;

// let userAgent = headers['user-agent'];

const params = getQueryParams(url);
delete params['client']
const baseUrl = url.split('?')[0];

const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

// console.log("queryString is: " + queryString)
const result = {};
result.url = baseUrl + "?" + queryString;
$done(result)
