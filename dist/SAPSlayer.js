import axios from 'axios';
export default class SAPSlayer {
    baseUrl;
    token;
    /**
     * Constructor de la clase SAPSlayer.
     * @param {string} baseUrl URL base del servicio SAP.
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.token = null;
    }
    /**
     * Inicia sesión en el sistema SAP.
     * @param {string} username Nombre de usuario.
     * @param {string} password Contraseña del usuario.
     * @param {string} company Nombre de la compañía.
     * @returns {Promise<boolean>} Devuelve `true` si el inicio de sesión fue exitoso.
     */
    async login(username, password, company) {
        try {
            const response = await axios.post(`${this.baseUrl}/Login`, {
                CompanyDB: company,
                Password: password,
                UserName: username,
            });
            // Obtén y almacena el token de sesión desde las cookies
            this.token = response.headers['set-cookie']?.[0]?.split(';')[0] ?? null;
            if (!this.token) {
                throw new Error('No se recibió un token de sesión válido.');
            }
            console.log('Inicio de sesión exitoso.');
            return true;
        }
        catch (error) {
            console.error('Error al iniciar sesión:', this.getErrorMessage(error));
            return false;
        }
    }
    /**
     * Realiza una solicitud GET al servicio SAP con soporte para filtros y campos de selección.
     * @param {string} endpoint Endpoint de la API.
     * @param {object} [options] Opciones para configurar la solicitud.
     * @param {string[]} [options.select] Campos a seleccionar (opcional).
     * @param {string} [options.filter] Filtro para la solicitud (opcional).
     * @returns {Promise<any>} Respuesta de la API.
     */
    async get(endpoint, options = {}) {
        if (!this.token) {
            throw new Error('No se ha iniciado sesión.');
        }
        try {
            const params = [];
            // Construcción de la cláusula $select
            if (options.select && options.select.length > 0) {
                params.push(`$select=${options.select.join(',')}`);
            }
            // Construcción de la cláusula $filter
            if (options.filter) {
                params.push(`$filter=${options.filter}`);
            }
            const queryString = params.length > 0 ? `?${params.join('&')}` : '';
            const url = `${this.baseUrl}${endpoint}${queryString}`;
            const config = {
                method: 'GET',
                url,
                headers: {
                    Cookie: this.token,
                },
            };
            const response = await axios(config);
            return response.data;
        }
        catch (error) {
            console.error(`Error al realizar la solicitud GET a ${endpoint}:`, this.getErrorMessage(error));
            throw error;
        }
    }
    /**
     * Realiza una solicitud POST al servicio SAP.
     * @param {string} endpoint Endpoint de la API.
     * @param {any} data Datos a enviar en la solicitud.
     * @returns {Promise<any>} Respuesta de la API.
     */
    async post(endpoint, data) {
        return await this._request('POST', endpoint, data);
    }
    /**
     * Método privado para manejar solicitudes HTTP.
     * @param {string} method Método HTTP (GET, POST, etc.).
     * @param {string} endpoint Endpoint de la API.
     * @param {any} [data=null] Datos a enviar en la solicitud (opcional).
     * @returns {Promise<any>} Respuesta de la API.
     * @throws Error si la solicitud falla.
     */
    async _request(method, endpoint, data = null) {
        if (!this.token) {
            throw new Error('No se ha iniciado sesión.');
        }
        try {
            const config = {
                method,
                url: `${this.baseUrl}${endpoint}`,
                headers: {
                    Cookie: this.token,
                },
                data,
            };
            const response = await axios(config);
            return response.data;
        }
        catch (error) {
            console.error(`Error al realizar la solicitud ${method} ${endpoint}:`, this.getErrorMessage(error));
            throw error;
        }
    }
    /**
     * Obtiene un mensaje legible desde un error desconocido.
     * @param {unknown} error Error capturado.
     * @returns {string} Mensaje del error.
     */
    getErrorMessage(error) {
        if (error instanceof Error) {
            return error.message;
        }
        return String(error);
    }
}
