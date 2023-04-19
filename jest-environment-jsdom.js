const { TextEncoder, TextDecoder } = require('util');
const { default: $JSDOMEnvironment } = require('jest-environment-jsdom');

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

module.exports = class CustomTestEnvironment extends $JSDOMEnvironment {
    async setup() {
        await super.setup();
        if (typeof this.global.TextEncoder === 'undefined') {
            const { TextEncoder } = require('util');
            this.global.TextEncoder = TextEncoder;
        }
    }
}