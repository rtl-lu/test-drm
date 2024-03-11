import FairplayContentProtectionIntegration from './FairplayContentProtectionIntegration.js';

class FairplayContentProtectionIntegrationFactory {
    build(configuration) {
        return new FairplayContentProtectionIntegration(configuration);
    }
}

export default FairplayContentProtectionIntegrationFactory;
