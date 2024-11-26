// var hostnameMatched = ($request.hostname === 'home.com');
// var ssidMatched = ($network.wifi.ssid === 'My Home');

// {
//     "cellular-data": {
//       "carrier": null,
//       "radio": "NRNSA"
//     },
//     "dns": [
//       "240e:5a::6666",
//       "240e:5b::6666",
//       "218.2.2.2",
//       "218.4.4.4"
//     ],
//     "v4": {
//       "primaryAddress": "10.70.187.149",
//       "primaryInterface": "pdp_ip0",
//       "primaryRouter": "10.12.2.40"
//     },
//     "v6": {
//       "primaryAddress": "240e:400:4c40:a313:daf:f3a8:5a53:a7c7",
//       "primaryInterface": "pdp_ip0"
//     },
//     "wifi": {
//       "bssid": null,
//       "ssid": null
//     }
//   }
// let network = $network;

let env = $environment;


let isAtv = true

let deviceModel = env && env["device-model"];
if (!deviceModel || deviceModel == null) {
    isAtv = true
} else if (deviceModel.indexOf('AppleTV') !== -1) {
    isAtv = true
} else {
    isAtv = false
}

// isAtv = env && .

// let env_str = JSON.stringify(env);

// console.log("netowrk_str: " + env_str);

// let network_str = JSON.stringify(network);

// console.log("network_str: " + network_str);

// let isIPv6 = network.v6 && network.v6.primaryAddress && network.v6.primaryAddress != null && network.v6.primaryAddress.length > 0;
// if (isIPv6 == null) {
//     isIPv6 = false;
// }

// let isAtv = network.v4 && network.v4.primaryAddress && network.v4.primaryAddress != null && network.v4.primaryAddress == "192.168.199.252";
// isAtv = isAtv && env.system != "iOS" && env.system != "macOS" && env["device-model"] != "iPhone14,3";

// console.log("isAtv: " + isAtv.toString());

$done({ matched: isAtv });
