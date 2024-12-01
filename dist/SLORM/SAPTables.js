/**
 * SAP Business One Tables and their corresponding Service Layer entities.
 */
export const SAPTables = {
    /**
     * @description Invoice table, contains customer invoice data.
     * @serviceLayerEntity Invoices
     */
    OINV: {
        description: "Invoice table, contains customer invoice data.",
        serviceLayerEntity: "Invoices",
    },
    /**
     * @description Invoice Lines table, stores details about invoice items.
     * @serviceLayerEntity InvoiceLines
     */
    INV1: {
        description: "Invoice Lines table, stores details about invoice items.",
        serviceLayerEntity: "InvoiceLines",
    },
    /**
     * @description Credit Memos table, contains credit note data.
     * @serviceLayerEntity CreditNotes
     */
    ORIN: {
        description: "Credit Memos table, contains credit note data.",
        serviceLayerEntity: "CreditNotes",
    },
    /**
     * @description Business Partners table, stores details about customers, suppliers, and leads.
     * @serviceLayerEntity BusinessPartners
     */
    OCRD: {
        description: "Business Partners table, stores details about customers, suppliers, and leads.",
        serviceLayerEntity: "BusinessPartners",
    },
    /**
     * @description Sales Orders table, contains information about customer orders.
     * @serviceLayerEntity Orders
     */
    ORDR: {
        description: "Sales Orders table, contains information about customer orders.",
        serviceLayerEntity: "Orders",
    },
    /**
     * @description Order Lines table, stores details about order items.
     * @serviceLayerEntity OrderLines
     */
    RDR1: {
        description: "Order Lines table, stores details about order items.",
        serviceLayerEntity: "OrderLines",
    },
    /**
     * @description Items table, stores data about inventory items.
     * @serviceLayerEntity Items
     */
    OITM: {
        description: "Items table, stores data about inventory items.",
        serviceLayerEntity: "Items",
    },
    /**
     * @description Sales Employees table, contains details about sales employees.
     * @serviceLayerEntity SalesPersons
     */
    OSLP: {
        description: "Sales Employees table, contains details about sales employees.",
        serviceLayerEntity: "SalesPersons",
    },
    /**
     * @description Warehouse table, contains details about warehouses.
     * @serviceLayerEntity Warehouses
     */
    OWHS: {
        description: "Warehouse table, contains details about warehouses.",
        serviceLayerEntity: "Warehouses",
    },
    /**
     * @description Chart of Accounts table, stores financial accounts.
     * @serviceLayerEntity ChartOfAccounts
     */
    OACT: {
        description: "Chart of Accounts table, stores financial accounts.",
        serviceLayerEntity: "ChartOfAccounts",
    },
    /**
     * @description Journal Entries table, records financial transactions.
     * @serviceLayerEntity JournalEntries
     */
    OJDT: {
        description: "Journal Entries table, records financial transactions.",
        serviceLayerEntity: "JournalEntries",
    },
    /**
     * @description Delivery Notes table, stores delivery information for sales orders.
     * @serviceLayerEntity DeliveryNotes
     */
    ODLN: {
        description: "Delivery Notes table, stores delivery information for sales orders.",
        serviceLayerEntity: "DeliveryNotes",
    },
    /**
     * @description Delivery Note Lines table, stores details about delivery items.
     * @serviceLayerEntity DeliveryNoteLines
     */
    DLN1: {
        description: "Delivery Note Lines table, stores details about delivery items.",
        serviceLayerEntity: "DeliveryNoteLines",
    },
    /**
     * @description Purchase Orders table, contains information about supplier orders.
     * @serviceLayerEntity PurchaseOrders
     */
    OPOR: {
        description: "Purchase Orders table, contains information about supplier orders.",
        serviceLayerEntity: "PurchaseOrders",
    },
    /**
     * @description Purchase Order Lines table, stores details about purchase order items.
     * @serviceLayerEntity PurchaseOrderLines
     */
    POR1: {
        description: "Purchase Order Lines table, stores details about purchase order items.",
        serviceLayerEntity: "PurchaseOrderLines",
    },
    /**
     * @description Goods Receipt PO table, records received goods for purchase orders.
     * @serviceLayerEntity GoodsReceiptPO
     */
    OPDN: {
        description: "Goods Receipt PO table, records received goods for purchase orders.",
        serviceLayerEntity: "GoodsReceiptPO",
    },
    /**
     * @description Payment Terms table, stores terms of payment.
     * @serviceLayerEntity PaymentTerms
     */
    OCTG: {
        description: "Payment Terms table, stores terms of payment.",
        serviceLayerEntity: "PaymentTerms",
    },
    /**
     * @description Price Lists table, manages pricing information for items.
     * @serviceLayerEntity PriceLists
     */
    OPLN: {
        description: "Price Lists table, manages pricing information for items.",
        serviceLayerEntity: "PriceLists",
    },
    /**
     * @description Bill of Materials table, stores information about item components.
     * @serviceLayerEntity BillOfMaterials
     */
    OITT: {
        description: "Bill of Materials table, stores information about item components.",
        serviceLayerEntity: "BillOfMaterials",
    },
    /**
     * @description Production Orders table, contains production order data.
     * @serviceLayerEntity ProductionOrders
     */
    OWOR: {
        description: "Production Orders table, contains production order data.",
        serviceLayerEntity: "ProductionOrders",
    },
    /**
     * @description Employee Master Data table, stores details about employees.
     * @serviceLayerEntity EmployeesInfo
     */
    OHEM: {
        description: "Employee Master Data table, stores details about employees.",
        serviceLayerEntity: "EmployeesInfo",
    },
    /**
     * @description Tax Codes table, stores tax rate information.
     * @serviceLayerEntity TaxCodes
     */
    OSTC: {
        description: "Tax Codes table, stores tax rate information.",
        serviceLayerEntity: "TaxCodes",
    },
};
export default SAPTables;
