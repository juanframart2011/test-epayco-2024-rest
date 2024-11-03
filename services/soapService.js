const soap = require('soap');

class SoapService {
    constructor() {
        this.url = process.env.SOAP_URL;
    }

    async callSoapMethod(methodName, params) {
        try {
            const client = await soap.createClientAsync(this.url);
            const result = await client[methodName + 'Async'](params);
            return result;
        } catch (error) {
            throw new Error(`Error al llamar al método SOAP: ${error.message}`);
        }
    }
}

module.exports = new SoapService();