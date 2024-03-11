import WidevineContentProtectionIntegration from './WidevineContentProtectionIntegration.js';

class WidevineContentProtectionIntegrationFactory {
    build(configuration) {
        return new WidevineContentProtectionIntegration(configuration);
    }
}

export default WidevineContentProtectionIntegrationFactory;
