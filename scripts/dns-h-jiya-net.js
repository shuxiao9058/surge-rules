$httpClient.get('http://119.29.29.29/d?dn=' + $domain, function (error, response, data) {
  if (error) {
    console.log("h.jiya.net dns error: " + error);
    $done({}); // Fallback to standard DND query
  } else {
    // console.log("h.jiya.net dns res is: aaaab");
    let addrs = [];
    let splits = data.split(';');
    for (let i = 0; i < splits.length; i++) {
      if (splits[i].includes(".")) {
        addrs.push(splits[i]);
        // console.log("h.jiya.net addr is: " + splits[i]);
      }
    }
    $done({ addresses: addrs, ttl: 600 });
  }
});
