
// import * as THEOplayer from '@theoplayer/extended';


function fromObjectToUint8Array(obj) {
    return new TextEncoder().encode(JSON.stringify(obj));
}

function fromUint8ArrayToObject(array) {
    return JSON.parse(new TextDecoder().decode(array));
}

function fromBase64StringToUint8Array(str) {
    return THEOplayer.utils.base64.decode(str);
}

function fromUint8ArrayToBase64String(array) {
    return THEOplayer.utils.base64.encode(new Uint8Array(array));
}

async function getDrmToken(content_id) {

    try {
        const response = await fetch('https://stream.rtl.lu/ateme/argus/?content_id=' + content_id);
        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }
        const data = await response.text();
        console.log(data);
        return data;

    } catch (error) {


        // if http 403  not authorized 
        // => VPN or Anonymous Proxy (Tor...)
        // alert User
        alert('Error retrieving Token: You are behind VPN or Anonymous Proxy');
        console.error('Error:', error.message);

    }

}


async function testEME() {

    let config = [{
        "initDataTypes": ["cenc"],
        "audioCapabilities": [{
            "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
        }],
        "videoCapabilities": [{
            "contentType": "video/mp4;codecs=\"avc1.42E01E\""
        }]
    }];


    try {

        let mediaKeySystemAccess = await navigator.requestMediaKeySystemAccess("com.apple.fps", config);
        return 'hls';

    } catch (e) {
        console.log('no fairplay support');
        // console.log(e);
    }

    try {

        let mediaKeySystemAccess = await navigator.requestMediaKeySystemAccess("com.widevine.alpha", config);
        return 'dash';

    } catch (e) {
        console.log('no widevine support');
        // console.log(e);
    }

    return '';

}


export { testEME, getDrmToken, fromObjectToUint8Array, fromUint8ArrayToObject, fromBase64StringToUint8Array, fromUint8ArrayToBase64String }
