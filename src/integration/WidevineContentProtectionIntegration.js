import * as utils from './../utils.js';

class WidevineContentProtectionIntegration {
    constructor(contentProtectionConfiguration) {
        this.contentProtectionConfiguration = contentProtectionConfiguration;
    }

    async onCertificateRequest(request) {

        let drmToken = await utils.getDrmToken(this.contentProtectionConfiguration.integrationParameters.contentId);

        request.headers = {
            ...request.headers,
            'content-type': 'application/octet-stream',
            Authorization: drmToken ?? '',
        };
        return request;
    }

    async onLicenseRequest(request) {

        let drmToken = await utils.getDrmToken(this.contentProtectionConfiguration.integrationParameters.contentId);

        request.headers = {
            'content-type': 'application/octet-stream',
            Authorization: drmToken ?? '',
        };

        return request;
    }


}

export default WidevineContentProtectionIntegration;
