const axios = require('axios');

class exaSapSL {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.token = null;
    }

    async login(username, password, company) {
        try {
            const response = await axios.post(`${this.baseUrl}/Login`, {
                "CompanyDB": company,
                "Password": password,
                "UserName": username
            });
            this.token = response.headers['set-cookie'][0].split(';')[0];
            return true;
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            return false;
        }
    }

    async get(endpoint) {
        return await this._request('GET', endpoint);
    }

    async post(endpoint, data) {
        return await this._request('POST', endpoint, data);
    }

    async _request(method, endpoint, data = null) {
        if (!this.token) {
            throw new Error('No se ha iniciado sesión');
        }
        try {
            const config = {
                method,
                url: `${this.baseUrl}${endpoint}`,
                headers: {
                    'Cookie': this.token
                },
                data
            };
            const response = await axios(config);
            return response.data;
        } catch (error) {
            console.error(`Error al realizar la petición ${method} ${endpoint}:`, error);
            throw error;
        }
    }
}

module.exports = exaSapSL;