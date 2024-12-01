import dotenv from 'dotenv';
import SAPSlayer from './SAPSlayer.js';
import { oInv } from './oInv.js';
import { OCRD } from './OCRD.js';
dotenv.config();
const connect = `http://${process.env.SAP_HOST}:50001/b1s/v2/`;
const sap = new SAPSlayer(connect);
/**
 * Busca en la tabla especificada registros que contengan el texto en los campos indicados.
 */
async function globalSearch(sap, object, searchText, fieldsToSearch = []) {
    try {
        const filterClause = fieldsToSearch
            .map((field) => `contains(${field}, '${searchText}')`)
            .join(' or ');
        const url = `${object}?$select=*&$filter=${filterClause}`;
        console.log(url);
        return await sap.get(url);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error al realizar la búsqueda:', error.message);
        }
        else {
            console.error('Error al realizar la búsqueda:', String(error));
        }
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
            const results = await globalSearch(sap, 'Invoices', '501', [
                oInv.U_RTN,
                oInv.DocNum,
            ]);
            console.log('Facturas:', results);
            const customers = await globalSearch(sap, 'BusinessPartners', 'Diunsa', [
                OCRD.CardName,
                OCRD.CardCode,
            ]);
            console.log('Clientes:', customers);
        }
        else {
            console.log('Error al iniciar sesión.');
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error en el programa principal:', error.message);
        }
        else {
            console.error('Error en el programa principal:', String(error));
        }
    }
}
main();
