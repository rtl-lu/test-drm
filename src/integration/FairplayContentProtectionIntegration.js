import * as utils from './../utils.js';

class FairplayContentProtectionIntegration {
    constructor(contentProtectionConfiguration) {
        this.contentProtectionConfiguration = contentProtectionConfiguration;
    }

    async onLicenseRequest(request) {

        const spcMessage = utils.fromUint8ArrayToBase64String(request.body);
        const bodyObject = {
            spc: spcMessage,
        };
        const bodyData = utils.fromObjectToUint8Array(bodyObject);
        request.url =
            this.contentProtectionConfiguration.fairplay?.licenseAcquisitionURL ?? DEFAULT_LICENSE_URL;

        let drmToken = await utils.getDrmToken(this.contentProtectionConfiguration.integrationParameters.contentId);

        request.headers = {
            'content-type': 'application/json',
            Authorization: drmToken ?? '',
        };
        request.body = bodyData;
        return request;
    }

    onLicenseResponse(response) {
        const responseObject = utils.fromUint8ArrayToObject(response.body);
        return utils.fromBase64StringToUint8Array(responseObject.ckc);
    }

    extractFairplayContentId(skdUrl) {
        console.log('extractFairplayContentId', skdUrl);
        // drop params in url
        const chunks = skdUrl.split('?');
        const sdkUrlWithoutParams = chunks[0];
        // drop the 'skd://' part
        return sdkUrlWithoutParams.substring(6, sdkUrlWithoutParams.length);
    }
}

export default FairplayContentProtectionIntegration;
