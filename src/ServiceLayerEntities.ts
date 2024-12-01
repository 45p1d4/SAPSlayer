import { oInv } from './oInv.js'; // Importa los campos de la entidad Invoices
import { OCRD } from './OCRD.js'; // Importa los campos de la entidad BusinessPartners
/**
 * Service Layer Entities mapped to SAP Business One Tables.
 */
export const ServiceLayerEntities = {
    /**
     * @description Represents customer invoice data.
     * @sapTable OINV
     */
    Invoices: {
      description: "Represents customer invoice data.",
      sapTable: "OINV",
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
      sapTable: "OCRD",
      fields: OCRD
    },
    /**
     * @description Represents customer orders.
     * @sapTable ORDR
     */
    Orders: {
      description: "Represents customer orders.",
      sapTable: "ORDR",
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
      sapTable: "OITM",
    },
    /**
     * @description Represents warehouses.
     * @sapTable OWHS
     */
    Warehouses: {
      description: "Represents warehouses.",
      sapTable: "OWHS",
    },
    /**
     * @description Represents item price lists.
     * @sapTable ITM1
     */
    ItemPriceLists: {
      description: "Represents item price lists.",
      sapTable: "ITM1",
    },
    /**
     * @description Represents payment terms.
     * @sapTable OCTG
     */
    PaymentTerms: {
      description: "Represents payment terms.",
      sapTable: "OCTG",
    },
    /**
     * @description Represents employee details.
     * @sapTable OHEM
     */
    EmployeesInfo: {
      description: "Represents employee details.",
      sapTable: "OHEM",
    },
    /**
     * @description Represents chart of accounts.
     * @sapTable OACT
     */
    ChartOfAccounts: {
      description: "Represents chart of accounts.",
      sapTable: "OACT",
    },
    /**
     * @description Represents journal entries.
     * @sapTable OJDT
     */
    JournalEntries: {
      description: "Represents journal entries.",
      sapTable: "OJDT",
    },
    /**
     * @description Represents journal entry lines.
     * @sapTable JDT1
     */
    JournalEntryLines: {
      description: "Represents journal entry lines.",
      sapTable: "JDT1",
    },
    /**
     * @description Represents delivery notes.
     * @sapTable ODLN
     */
    DeliveryNotes: {
      description: "Represents delivery notes.",
      sapTable: "ODLN",
    },
    /**
     * @description Represents details about delivery note items.
     * @sapTable DLN1
     */
    DeliveryNoteLines: {
      description: "Represents details about delivery note items.",
      sapTable: "DLN1",
    },
    /**
     * @description Represents goods receipts for purchase orders.
     * @sapTable OPDN
     */
    GoodsReceipts: {
      description: "Represents goods receipts for purchase orders.",
      sapTable: "OPDN",
    },
    /**
     * @description Represents details about goods receipt items.
     * @sapTable PDN1
     */
    GoodsReceiptLines: {
      description: "Represents details about goods receipt items.",
      sapTable: "PDN1",
    },
    /**
     * @description Represents goods issues.
     * @sapTable OIGE
     */
    GoodsIssues: {
      description: "Represents goods issues.",
      sapTable: "OIGE",
    },
    /**
     * @description Represents details about goods issue items.
     * @sapTable IGE1
     */
    GoodsIssueLines: {
      description: "Represents details about goods issue items.",
      sapTable: "IGE1",
    },
    /**
     * @description Represents production orders.
     * @sapTable OWOR
     */
    ProductionOrders: {
      description: "Represents production orders.",
      sapTable: "OWOR",
    },
    /**
     * @description Represents tax rate definitions.
     * @sapTable OSTC
     */
    TaxCodes: {
      description: "Represents tax rate definitions.",
      sapTable: "OSTC",
    },
    /**
     * @description Represents batch numbers for inventory items.
     * @sapTable OBTN
     */
    BatchNumbers: {
      description: "Represents batch numbers for inventory items.",
      sapTable: "OBTN",
    },
    /**
     * @description Represents serial numbers for inventory items.
     * @sapTable OSRN
     */
    SerialNumbers: {
      description: "Represents serial numbers for inventory items.",
      sapTable: "OSRN",
    },
    /**
     * @description Represents user-defined fields.
     * @sapTable CUFD
     */
    UserDefinedFields: {
      description: "Represents user-defined fields.",
      sapTable: "CUFD",
    },
    /**
     * @description Represents user-defined objects.
     * @sapTable CUOT
     */
    UserDefinedObjects: {
      description: "Represents user-defined objects.",
      sapTable: "CUOT",
    },
  };
  
  export default ServiceLayerEntities;
  