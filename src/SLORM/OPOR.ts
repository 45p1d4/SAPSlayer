/**
 * OPORFields represents the fields of the OPOR table (Purchase Orders) in SAP Business One.
 */
export const OPOR = {
    /** Unique identifier for the purchase order */
    DocEntry: 'DocEntry',
  
    /** Document number of the purchase order */
    DocNum: 'DocNum',
  
    /** Document type (e.g. "P" for Purchase Order) */
    DocType: 'DocType',
  
    /** Cancellation status of the purchase order */
    CANCELED: 'CANCELED',
  
    /** Total value of the purchase order */
    DocTotal: 'DocTotal',
  
    /** Total paid to date for the purchase order */
    PaidToDate: 'PaidToDate',
  
    /** Total VAT amount for the order */
    VatSum: 'VatSum',
  
    /** VAT percentage applied */
    VatPercent: 'VatPercent',
  
    /** Total discount applied to the order */
    DiscSum: 'DiscSum',
  
    /** Reference field 1 of the purchase order */
    Ref1: 'Ref1',
  
    /** Comments about the purchase order */
    Comments: 'Comments',
  
    /** Salesperson code associated with the order */
    SlpCode: 'SlpCode',
  
    /** Transporter code for the purchase order */
    TrnspCode: 'TrnspCode',
  
    /** Date of the purchase order */
    DocDate: 'DocDate',
  
    /** Due date for the purchase order */
    DocDueDate: 'DocDueDate',
  
    /** Currency used in the order */
    DocCur: 'DocCur',
  
    /** Exchange rate used for the order */
    Rate: 'Rate',
  
    /** Shipping address for the purchase order */
    Address: 'Address',
  
    /** Customer code associated with the purchase order */
    CardCode: 'CardCode',
  
    /** Customer name associated with the purchase order */
    CardName: 'CardName',
  
    /** Status of the order (Open, Closed, etc.) */
    DocStatus: 'DocStatus',
  
    /** Indicates whether the order has been paid */
    Paid: 'Paid',
  
    /** Total value of the purchase order without VAT */
    DocTotalFC: 'DocTotalFC',
  
    /** Total value of the purchase order with VAT */
    DocTotalSys: 'DocTotalSys',
  
    /** Payment terms associated with the purchase order */
    PayTerms: 'PayTerms',
  
    /** Date of the last update for the order */
    UpdateDate: 'UpdateDate',
  
    /** Order type description */
    OrderType: 'OrderType',
  
    /** Supplier code (if it's a purchase order) */
    SupplierCode: 'SupplierCode',
  
    /** Branch code assigned to the invoice */
    BPL_IDAssignedToInvoice: 'BPL_IDAssignedToInvoice',
  
    /** Payment group for the purchase order */
    PaymentGroup: 'PaymentGroup',
  
    /** Shipping method selected for the order */
    ShippingType: 'ShippingType',
  
    /** Account code associated with the order */
    AccntCode: 'AccntCode',
  
    /** Requested delivery date for the order */
    DeliveryDate: 'DeliveryDate',
  
    /** Custom order number (user-defined) */
    U_OrderNum: 'U_OrderNum',
  
    /** Original document related to this order (if applicable) */
    U_OriginalDoc: 'U_OriginalDoc',
  
    /** Last update timestamp of the order */
    LastUpdate: 'LastUpdate',
  
    /** Document template used for the order */
    DocTemplate: 'DocTemplate',
  
    /** Warehouse code associated with the purchase order */
    WarehouseCode: 'WarehouseCode',
  
    /** Priority level of the purchase order */
    Priority: 'Priority',
  
    /** Validation status of the purchase order */
    ValidStatus: 'ValidStatus',
  
    /** Original document entry reference */
    OriginalDocEntry: 'OriginalDocEntry',
  
    /** Currency used for payment in the order */
    PayCurrency: 'PayCurrency',
  
    /** Indicates whether the purchase order has been confirmed */
    Confirmed: 'Confirmed',
  
    /** Indicates whether tax is included in the order total */
    TaxIncluded: 'TaxIncluded',
  
    /** Total amount of taxes applied to the order */
    TaxAmount: 'TaxAmount',
  
    /** User who signed off the purchase order */
    UserSign: 'UserSign',
  
    /** Campaign code associated with the purchase order */
    CampaignCode: 'CampaignCode',
  
    /** Sales employee responsible for the order */
    SalesEmployee: 'SalesEmployee',
  
    /** Related documents linked to this purchase order */
    RelatedDocs: 'RelatedDocs',
  
    /** Type of operation for the purchase order */
    OperationType: 'OperationType',
  
    /** Indicates whether the order is partially paid */
    PartialPaid: 'PartialPaid',
  
    /** Short description of the purchase order */
    OrderDescription: 'OrderDescription',
  
    /** External reference number associated with the order */
    ExternalRef: 'ExternalRef',
  
    /** Amount of prepaid payment received */
    PrepaidAmount: 'PrepaidAmount',
  
    /** Tax code used for the order */
    TaxCode: 'TaxCode',
  
    /** Delivery location for the order */
    DeliveryLocation: 'DeliveryLocation',
  
    /** Type of delivery requested */
    DeliveryType: 'DeliveryType',
  
    /** Last modification timestamp of the order */
    LastModified: 'LastModified',
  };
  