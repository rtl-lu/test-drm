import FairplayContentProtectionIntegrationFactory from './integration/FairplayContentProtectionIntegrationFactory.js';
import WidevineContentProtectionIntegrationFactory from './integration/WidevineContentProtectionIntegrationFactory.js';

import * as utils from './utils.js';

import * as THEOplayer from 'theoplayer';
window.THEOplayer = THEOplayer;


var element = document.querySelector(".theoplayer-container");


window.playerInit = async (sources) => {

    let useStreamingProtocol = await utils.testEME();

    player5(useStreamingProtocol, sources);

}


function player5(useStreamingProtocol, sources) {

    let streamSourceSrc = sources.dash.src;
    let streamSourceType = sources.dash.type;

    if (useStreamingProtocol == 'hls') {
        streamSourceSrc = sources.hls.src;
        streamSourceType = sources.hls.type;
    }

    let drmConfiguration = {
        integration: "streamkeeper",
        fairplay: {
            licenseAcquisitionURL: 'https://multidrm.vsaas.verimatrixcloud.net/fairplay',
            certificateURL: 'https://stream.rtl.lu/ateme/argus/fps_certificate.der',
        },
        widevine: {
            licenseAcquisitionURL: 'https://multidrm.vsaas.verimatrixcloud.net/widevine',
        },
        integrationParameters: {
            contentId: sources.content_id
        }
    };

    THEOplayer.registerContentProtectionIntegration(
        'streamkeeper',
        'fairplay',
        new FairplayContentProtectionIntegrationFactory()
    );

    THEOplayer.registerContentProtectionIntegration(
        'streamkeeper',
        'widevine',
        new WidevineContentProtectionIntegrationFactory()
    );


    let player = new THEOplayer.Player(element, {
        ui: {
            fluid: true
        },
        libraryLocation: "../dist/",
        license: "sZP7IYe6T6fZTSg6Tu3l0Zzk3QX6FSxg0ub-CDIlCmkg0ubi0uez0DI1TuC6FOPlUY3zWokgbgjNIOf9fKx63lbtIDIeFSbiTSa-3Q0ZTOk1IQ36FSbL3SakCLec3K4e3OfVfK4_bQgZCYxNWoryIQXzImf90SbL3lhi0Lfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3lCc3u0zTS0L3uerFOPeWok1dDrLYtA1Ioh6TgV6IDceWZrVUmfVfKIgIDxNUOrVUmfVfKgiWOrVUmfVfKcqCoXVdQjLUOfVfKrgUokgIQg1FKckf6i6bGxVFKckf6i6UQ1gWtAVCYggb6rlWoz6Ymi6IQj-CDgpbkjLWt4ZCoh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfG3edt06TgV6dwx-Wuh6Ymi6bo4pIXjNWYAZIY3LdDjpflNzbG4gya"
    });


    player.source = {
        sources: {
            contentProtection: (sources.drm === true) ? drmConfiguration : [],
            src: streamSourceSrc,
            type: streamSourceType
        }
    };

    player.play();

}
