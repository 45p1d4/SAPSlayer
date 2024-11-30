require('dotenv').config();
const SAPSlayer = require('./SAPSlayer');
const connect = `http://${process.env.SAP_HOST}:50001/b1s/v2/`
const sap = new SAPSlayer(connect);

async function main() {
    try {
        if (await sap.login(`${process.env.SAP_USERNAME}`, `${process.env.SAP_PASSWORD}`, `${process.env.SAP_COMPANY}`)) {
            /*
            $filter
            Queries collections of entities.
            Currently supported functions for
            $filter are:
            · startswith
            · endswith
            · contains
            · substringof
            Currently supported logical and
            relational operators include:
            · and
            · or
            · le (less than or equal to)
            · lt (less than)
            · ge (greater than or equal to)
            · gt (greater than)
            · eq (equal to)
            · ne (not equal to)
            · not
            Example:
            /Orders?$filter=DocTotal gt 3000
            /Orders?$filter=DocEntry lt 8 and
            (DocEntry lt 8 or DocEntry gt 116)
            and CardCode eq 'c1'
            /Orders?$filter=DocEntry lt 8 and
            ((DocEntry lt 8 or DocEntry gt 116)
            and startswith(CardCode,'c1'))
            /Items?$filter=not
            (startswith(ItemName, 'item') and
            ForeignName eq null)

            $count Return the number of entities colecction.
            /Orders/$count

            */

            const results = await globalSearch(sap,'Invoices','Inversiones', ['CardName', 'U_RTN']);
            console.log("-----------------");
            console.log(results);
            
        } else {
            console.error('Error al iniciar sesión.');
        }
    } catch (error) {
        console.error('Error al obtener las facturas:', error);
    }
}
async function globalSearch(sap, object ,searchText, fieldsToSearch = ['CardName', 'U_RTN', 'DocNum']) {
    try {
        // Construir $filter dinámicamente
        const filterClause = fieldsToSearch.map(field => `contains(${field}, '${searchText}')`).join(' or ');
        const url = `${object}?$select=*&$filter=${filterClause}`;
        const result = await sap.get(url);
        return result;

    } catch (error) {
      console.error('Error al buscar facturas:', error);
      return null;
    }
  }
main();