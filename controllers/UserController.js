const axios = require('axios');
const soapService = require('../services/soapService');

class UserController {
    async register(req, res) {
        const { email, nombre } = req.body;

        // Validar el email
        if (!this.validateEmail(email)) {
            return res.status(400).json({ message: 'Email inválido' });
        }

        try {
            const result = await soapService.callSoapMethod('userRegister', { nombre, email });
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: 'Error al conectar al API SOAP', error });
        }
    }

    validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

module.exports = new UserController();