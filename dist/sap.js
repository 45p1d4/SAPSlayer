import dotenv from 'dotenv';
import SAPSlayer from './SAPSlayer.js';
import ServiceLayerEntities from './SLORM/ServiceLayerEntities.js';
const BusinessPartnersFields = ServiceLayerEntities.BusinessPartners.fields;
const InvoicesFields = ServiceLayerEntities.Invoices.fields;
dotenv.config();
const connect = `http://${process.env.SAP_HOST}:50001/b1s/v2/`;
const sap = new SAPSlayer(connect);
/**
 * Realiza una búsqueda global en los campos especificados de una tabla del Service Layer.
 * @param {SAPSlayer} sap Instancia de SAPSlayer.
 * @param {ServiceLayerEntityKeys} object Nombre de la entidad del Service Layer.
 * @param {string} searchText Texto a buscar en los campos especificados.
 * @param {string[]} fieldsToSearch Lista de campos en los que se buscará el texto.
 * @returns {Promise<any>} Resultado de la búsqueda.
 */
async function globalSearch(sap, object, searchText, fieldsToSearch = []) {
    try {
        const entity = ServiceLayerEntities[object];
        if (!('fields' in entity)) {
            throw new Error(`La entidad ${object} no tiene campos definidos para búsqueda.`);
        }
        const searchFields = fieldsToSearch.length > 0 ? fieldsToSearch : Object.values(entity.fields);
        const filterClause = searchFields.map((field) => `contains(${field}, '${searchText}')`).join(' or ');
        // Llamada a la función get pasando la URL con las cláusulas de selección y filtro
        const url = `${object}`;
        const result = await sap.get(url, {
            select: searchFields,
            filter: filterClause
        });
        return result;
    }
    catch (error) {
        console.error('Error al realizar la búsqueda global:', error);
        throw error;
    }
}
/**
 * Lista todos los socios comerciales con filtros opcionales.
 */
async function listBusinessPartners() {
    try {
        // Aquí se pasa el nombre de la entidad y los parámetros de filtro y select
        const url = 'BusinessPartners';
        const selectFields = [BusinessPartnersFields.CardCode, BusinessPartnersFields.CardName, BusinessPartnersFields.CardType];
        const filterClause = ``; // Puedes hacer más dinámico si lo deseas, dependiendo de los requisitos
        const businessPartners = await sap.get(url, {
            select: selectFields, // Se pasa el select dinámicamente
            filter: filterClause // Se pasa el filtro dinámicamente
        });
        console.log('Socios comerciales encontrados:', businessPartners);
    }
    catch (error) {
        console.error('Error al listar socios comerciales:', error);
        throw error;
    }
}
/**
 * Función principal.
 */
async function main() {
    try {
        const loggedIn = await sap.login(process.env.SAP_USERNAME ?? '', process.env.SAP_PASSWORD ?? '', process.env.SAP_COMPANY ?? '');
        if (loggedIn) {
            console.log('Sesión iniciada exitosamente.');
            // Buscar facturas por texto
            const invoices = await globalSearch(sap, 'Invoices', '501', [InvoicesFields.DocNum, InvoicesFields.CardName, InvoicesFields.Series, InvoicesFields.U_RTN]);
            console.log('Facturas encontradas:', invoices);
            // Buscar socios comerciales por nombre
            const partners = await globalSearch(sap, 'BusinessPartners', 'Computer', [BusinessPartnersFields.CardCode, BusinessPartnersFields.CardName]);
            console.log('Socios comerciales encontrados:', partners);
            // Listar socios comerciales con saldo mayor a 0
            await listBusinessPartners();
        }
        else {
            console.log('Error al iniciar sesión.');
        }
    }
    catch (error) {
        console.error('Error en el programa principal:', error);
    }
}
main();
