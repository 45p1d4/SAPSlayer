import { oInv } from './oInv.js'; // Import fields for the Invoices entity
import { OCRD } from './OCRD.js'; // Import fields for the BusinessPartners entity
import { OPOR } from './OPOR'; // Import fields for the Purchase Orders entity
import { OITM } from './OITM.js'; // Import fields for the Items entity
import { OWHS } from './OWHS.js'; // Import fields for the Warehouses entity
import { ITM1 } from './ITM1.js'; // Import fields for the Item Price Lists entity
import { OCTG } from './OCTG.js'; // Import fields for the Payment Terms entity
import { OHEM } from './OHEM.js'; // Import fields for the Employee Info entity
import { OACT } from './OACT.js'; // Import fields for the Chart of Accounts entity
import { OJDT } from './OJDT.js'; // Import fields for the Journal Entries entity
import { JDT1 } from './JDT1.js'; // Import fields for the Journal Entry Lines entity
import { ODLN } from './ODLN.js'; // Import fields for the Delivery Notes entity
import { DLN1 } from './DLN1.js'; // Import fields for the Delivery Note Lines entity
// import { OPDN } from './OPDN'; // Import fields for the Goods Receipts entity
// import { PDN1 } from './PDN1'; // Import fields for the Goods Receipt Lines entity
// import { OIGE } from './OIGE'; // Import fields for the Goods Issues entity
// import { IGE1 } from './IGE1'; // Import fields for the Goods Issue Lines entity
// import { OWOR } from './OWOR'; // Import fields for the Production Orders entity
// import { OSTC } from './OSTC'; // Import fields for the Tax Codes entity
// import { OBTN } from './OBTN'; // Import fields for the Batch Numbers entity
// import { OSRN } from './OSRN'; // Import fields for the Serial Numbers entity
// import { CUFD } from './CUFD'; // Import fields for the User Defined Fields entity
// import { CUOT } from './CUOT'; // Import fields for the User Defined Objects entity

/**
 * Service Layer Entities mapped to SAP Business One Tables (9.3 Schema).
 */
export const ServiceLayerEntities = {
    /**
     * @description Represents customer invoice data.
     * @sapTable OINV (SAP 9.3)
     */
    Invoices: {
      description: "Represents customer invoice data.",
      sapTable: "OINV",  // SAP 9.3 table name
      fields: oInv
    },
    /**
     * @description Represents details about invoice items.
     * @sapTable INV1
     */
    InvoiceLines: {
      description: "Represents details about invoice items.",
      sapTable: "INV1",
    },
    /**
     * @description Represents credit note data.
     * @sapTable ORIN
     */
    CreditNotes: {
      description: "Represents credit note data.",
      sapTable: "ORIN",
    },
    /**
     * @description Represents details about credit note items.
     * @sapTable RIN1
     */
    CreditNoteLines: {
      description: "Represents details about credit note items.",
      sapTable: "RIN1",
    },
    /**
     * @description Represents customers, suppliers, and leads.
     * @sapTable OCRD
     */
    BusinessPartners: {
      description: "Represents customers, suppliers, and leads.",
      sapTable: "OCRD",  // SAP 9.3 table name
      fields: OCRD
    },
    /**
     * @description Represents customer orders.
     * @sapTable ORDR
     */
    Orders: {
      description: "Represents customer orders.",
      sapTable: "ORDR",  // SAP 9.3 table name
    },
    /**
     * @description Represents details about order items.
     * @sapTable RDR1
     */
    OrderLines: {
      description: "Represents details about order items.",
      sapTable: "RDR1",
    },
    /**
     * @description Represents inventory items.
     * @sapTable OITM
     */
    Items: {
      description: "Represents inventory items.",
      sapTable: "OITM",  // SAP 9.3 table name
      fields: OITM
    },
    /**
     * @description Represents warehouses.
     * @sapTable OWHS
     */
    Warehouses: {
      description: "Represents warehouses.",
      sapTable: "OWHS",  // SAP 9.3 table name
      fields: OWHS
    },
    /**
     * @description Represents item price lists.
     * @sapTable ITM1
     */
    ItemPriceLists: {
      description: "Represents item price lists.",
      sapTable: "ITM1",  // SAP 9.3 table name
      fields: ITM1
    },
    /**
     * @description Represents payment terms.
     * @sapTable OCTG
     */
    PaymentTerms: {
      description: "Represents payment terms.",
      sapTable: "OCTG",  // SAP 9.3 table name
      fields: OCTG
    },
    /**
     * @description Represents employee details.
     * @sapTable OHEM
     */
    EmployeesInfo: {
      description: "Represents employee details.",
      sapTable: "OHEM",  // SAP 9.3 table name
      fields: OHEM
    },
    /**
     * @description Represents chart of accounts.
     * @sapTable OACT
     */
    ChartOfAccounts: {
      description: "Represents chart of accounts.",
      sapTable: "OACT",  // SAP 9.3 table name
      fields: OACT
    },
    /**
     * @description Represents journal entries.
     * @sapTable OJDT
     */
    JournalEntries: {
      description: "Represents journal entries.",
      sapTable: "OJDT",  // SAP 9.3 table name
      fields: OJDT
    },
    /**
     * @description Represents journal entry lines.
     * @sapTable JDT1
     */
    JournalEntryLines: {
      description: "Represents journal entry lines.",
      sapTable: "JDT1",  // SAP 9.3 table name
      fields: JDT1
    },
    /**
     * @description Represents delivery notes.
     * @sapTable ODLN
     */
    DeliveryNotes: {
      description: "Represents delivery notes.",
      sapTable: "ODLN",  // SAP 9.3 table name
      fields: ODLN
    },
    /**
     * @description Represents details about delivery note items.
     * @sapTable DLN1
     */
    DeliveryNoteLines: {
      description: "Represents details about delivery note items.",
      sapTable: "DLN1",  // SAP 9.3 table name
      fields: DLN1
    },
    /**
     * @description Represents goods receipts for purchase orders.
     * @sapTable OPDN
     */
    GoodsReceipts: {
      description: "Represents goods receipts for purchase orders.",
      sapTable: "OPDN",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents details about goods receipt items.
     * @sapTable PDN1
     */
    GoodsReceiptLines: {
      description: "Represents details about goods receipt items.",
      sapTable: "PDN1",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents goods issues.
     * @sapTable OIGE
     */
    GoodsIssues: {
      description: "Represents goods issues.",
      sapTable: "OIGE",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents details about goods issue items.
     * @sapTable IGE1
     */
    GoodsIssueLines: {
      description: "Represents details about goods issue items.",
      sapTable: "IGE1",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents production orders.
     * @sapTable OWOR
     */
    ProductionOrders: {
      description: "Represents production orders.",
      sapTable: "OWOR",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents tax rate definitions.
     * @sapTable OSTC
     */
    TaxCodes: {
      description: "Represents tax rate definitions.",
      sapTable: "OSTC",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents batch numbers for inventory items.
     * @sapTable OBTN
     */
    BatchNumbers: {
      description: "Represents batch numbers for inventory items.",
      sapTable: "OBTN",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents serial numbers for inventory items.
     * @sapTable OSRN
     */
    SerialNumbers: {
      description: "Represents serial numbers for inventory items.",
      sapTable: "OSRN",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents user-defined fields in SAP.
     * @sapTable CUFD
     */
    UserDefinedFields: {
      description: "Represents user-defined fields in SAP.",
      sapTable: "CUFD",  // SAP 9.3 table name
      fields: ""
    },
    /**
     * @description Represents user-defined objects in SAP.
     * @sapTable CUOT
     */
    UserDefinedObjects: {
      description: "Represents user-defined objects in SAP.",
      sapTable: "CUOT",  // SAP 9.3 table name
      fields: ""
    }
};

export default ServiceLayerEntities;
