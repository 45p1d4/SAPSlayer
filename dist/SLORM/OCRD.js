/**
 * CustomersFields represents the fields in the OCRD table (Business Partner Master Data).
 */
export const OCRD = {
    /** Unique identifier for the business partner */
    CardCode: 'CardCode',
    /** Name of the business partner */
    CardName: 'CardName',
    /** Type of business partner (C for Customer, S for Supplier, etc.) */
    CardType: 'CardType',
    /** Group code for classification of the business partner */
    GroupCode: 'GroupCode',
    /** Indicates whether the business partner is a company or private */
    CmpPrivate: 'CmpPrivate',
    /** Default address of the business partner */
    Address: 'Address',
    /** ZIP code for the business partner's address */
    ZipCode: 'ZipCode',
    /** Mailing address of the business partner */
    MailAddres: 'MailAddres',
    /** ZIP code for the mailing address */
    MailZipCod: 'MailZipCod',
    /** Primary phone number */
    Phone1: 'Phone1',
    /** Secondary phone number */
    Phone2: 'Phone2',
    /** Fax number */
    Fax: 'Fax',
    /** Contact person for the business partner */
    CntctPrsn: 'CntctPrsn',
    /** General notes related to the business partner */
    Notes: 'Notes',
    /** Current balance of the business partner */
    Balance: 'Balance',
    /** Balance of checks issued by the business partner */
    ChecksBal: 'ChecksBal',
    /** Balance of delivery notes */
    DNotesBal: 'DNotesBal',
    /** Outstanding balance for orders */
    OrdersBal: 'OrdersBal',
    /** Payment terms code for the business partner */
    GroupNum: 'GroupNum',
    /** Credit limit assigned to the business partner */
    CreditLine: 'CreditLine',
    /** Debt limit assigned to the business partner */
    DebtLine: 'DebtLine',
    /** Discount percentage applicable to the business partner */
    Discount: 'Discount',
    /** VAT (tax) status of the business partner */
    VatStatus: 'VatStatus',
    /** Tax Identification Number (TIN) of the business partner */
    LicTradNum: 'LicTradNum',
    /** Deduction status */
    DdctStatus: 'DdctStatus',
    /** Deduction percentage */
    DdctPrcnt: 'DdctPrcnt',
    /** Date until the business partner is valid */
    ValidUntil: 'ValidUntil',
    /** Characteristics of the business partner */
    Chrctrstcs: 'Chrctrstcs',
    /** External matching number */
    ExMatchNum: 'ExMatchNum',
    /** Internal matching number */
    InMatchNum: 'InMatchNum',
    /** Price list associated with the business partner */
    ListNum: 'ListNum',
    /** Delivery note balance in foreign currency */
    DNoteBalFC: 'DNoteBalFC',
    /** Order balance in foreign currency */
    OrderBalFC: 'OrderBalFC',
    /** Delivery note balance in system currency */
    DNoteBalSy: 'DNoteBalSy',
    /** Order balance in system currency */
    OrderBalSy: 'OrderBalSy',
    /** Indicates if the data was transferred */
    Transfered: 'Transfered',
    /** Indicates if the balance was transferred */
    BalTrnsfrd: 'BalTrnsfrd',
    /** Interest rate applicable */
    IntrstRate: 'IntrstRate',
    /** Commission percentage for the business partner */
    Commission: 'Commission',
    /** Commission group code */
    CommGrCode: 'CommGrCode',
    /** Free text field for additional notes */
    Free_Text: 'Free_Text',
    /** Sales employee code associated with the business partner */
    SlpCode: 'SlpCode',
    /** Previous year account balance */
    PrevYearAc: 'PrevYearAc',
    /** Default currency for transactions */
    Currency: 'Currency',
    /** Rate differences account */
    RateDifAct: 'RateDifAct',
    /** Balance in system currency */
    BalanceSys: 'BalanceSys',
    /** Balance in foreign currency */
    BalanceFC: 'BalanceFC',
    /** Indicates if the business partner is protected from changes */
    Protected: 'Protected',
    /** Cellular phone number */
    Cellular: 'Cellular',
    /** Average late payment days */
    AvrageLate: 'AvrageLate',
    /** City of the business partner's default address */
    City: 'City',
    /** County or district of the business partner's address */
    County: 'County',
    /** Country of the business partner */
    Country: 'Country',
    /** City for the mailing address */
    MailCity: 'MailCity',
    /** County for the mailing address */
    MailCounty: 'MailCounty',
    /** Country for the mailing address */
    MailCountr: 'MailCountr',
    /** Email address of the business partner */
    E_Mail: 'E_Mail',
    /** Path to the picture file associated with the business partner */
    Picture: 'Picture',
    /** Default account for transactions */
    DflAccount: 'DflAccount',
    /** Default branch for transactions */
    DflBranch: 'DflBranch',
    /** Default bank code for the business partner */
    BankCode: 'BankCode',
    /** Additional ID for the business partner */
    AddID: 'AddID',
    /** Pager number */
    Pager: 'Pager',
    /** Parent card code (if part of a hierarchy) */
    FatherCard: 'FatherCard',
    /** Business partner's first name (if individual) */
    CardFName: 'CardFName',
    /** Type of parent card (if part of a hierarchy) */
    FatherType: 'FatherType',
    /** Query group 1 (user-defined grouping) */
    QryGroup1: 'QryGroup1',
    /** Query group 2 (user-defined grouping) */
    QryGroup2: 'QryGroup2',
    /** Query group 3 (user-defined grouping) */
    QryGroup3: 'QryGroup3',
    /** Query group 4 (user-defined grouping) */
    QryGroup4: 'QryGroup4',
    /** Query group 5 (user-defined grouping) */
    QryGroup5: 'QryGroup5',
    /** Query group 6 (user-defined grouping) */
    QryGroup6: 'QryGroup6',
    /** Query group 7 (user-defined grouping) */
    QryGroup7: 'QryGroup7',
    /** Query group 8 (user-defined grouping) */
    QryGroup8: 'QryGroup8',
    /** Query group 9 (user-defined grouping) */
    QryGroup9: 'QryGroup9',
    /** Query group 10 (user-defined grouping) */
    QryGroup10: 'QryGroup10',
    /** Query group 11 (user-defined grouping) */
    QryGroup11: 'QryGroup11',
    /** Query group 12 (user-defined grouping) */
    QryGroup12: 'QryGroup12',
    /** Query group 13 (user-defined grouping) */
    QryGroup13: 'QryGroup13',
    /** Query group 14 (user-defined grouping) */
    QryGroup14: 'QryGroup14',
    /** Query group 15 (user-defined grouping) */
    QryGroup15: 'QryGroup15',
    /** Query group 16 (user-defined grouping) */
    QryGroup16: 'QryGroup16',
    /** Query group 17 (user-defined grouping) */
    QryGroup17: 'QryGroup17',
    /** Query group 18 (user-defined grouping) */
    QryGroup18: 'QryGroup18',
    /** Query group 19 (user-defined grouping) */
    QryGroup19: 'QryGroup19',
    /** Query group 20 (user-defined grouping) */
    QryGroup20: 'QryGroup20',
    /** Query group 21 (user-defined grouping) */
    QryGroup21: 'QryGroup21',
    /** Query group 22 (user-defined grouping) */
    QryGroup22: 'QryGroup22',
    /** Query group 23 (user-defined grouping) */
    QryGroup23: 'QryGroup23',
    /** Query group 24 (user-defined grouping) */
    QryGroup24: 'QryGroup24',
    /** Query group 25 (user-defined grouping) */
    QryGroup25: 'QryGroup25',
    /** Query group 26 (user-defined grouping) */
    QryGroup26: 'QryGroup26',
    /** Query group 27 (user-defined grouping) */
    QryGroup27: 'QryGroup27',
    /** Query group 28 (user-defined grouping) */
    QryGroup28: 'QryGroup28',
    /** Query group 29 (user-defined grouping) */
    QryGroup29: 'QryGroup29',
    /** Query group 30 (user-defined grouping) */
    QryGroup30: 'QryGroup30',
    /** Query group 31 (user-defined grouping) */
    QryGroup31: 'QryGroup31',
    /** Query group 32 (user-defined grouping) */
    QryGroup32: 'QryGroup32',
    /** Query group 33 (user-defined grouping) */
    QryGroup33: 'QryGroup33',
    /** Query group 34 (user-defined grouping) */
    QryGroup34: 'QryGroup34',
    /** Query group 35 (user-defined grouping) */
    QryGroup35: 'QryGroup35',
    /** Query group 36 (user-defined grouping) */
    QryGroup36: 'QryGroup36',
    /** Query group 37 (user-defined grouping) */
    QryGroup37: 'QryGroup37',
    /** Query group 38 (user-defined grouping) */
    QryGroup38: 'QryGroup38',
    /** Query group 39 (user-defined grouping) */
    QryGroup39: 'QryGroup39',
    /** Query group 40 (user-defined grouping) */
    QryGroup40: 'QryGroup40',
    /** Query group 41 (user-defined grouping) */
    QryGroup41: 'QryGroup41',
    /** Query group 42 (user-defined grouping) */
    QryGroup42: 'QryGroup42',
    /** Query group 43 (user-defined grouping) */
    QryGroup43: 'QryGroup43',
    /** Query group 44 (user-defined grouping) */
    QryGroup44: 'QryGroup44',
    /** Query group 45 (user-defined grouping) */
    QryGroup45: 'QryGroup45',
    /** Query group 46 (user-defined grouping) */
    QryGroup46: 'QryGroup46',
    /** Query group 47 (user-defined grouping) */
    QryGroup47: 'QryGroup47',
    /** Query group 48 (user-defined grouping) */
    QryGroup48: 'QryGroup48',
    /** Query group 49 (user-defined grouping) */
    QryGroup49: 'QryGroup49',
    /** Query group 50 (user-defined grouping) */
    QryGroup50: 'QryGroup50',
    /** Query group 51 (user-defined grouping) */
    QryGroup51: 'QryGroup51',
    /** Query group 52 (user-defined grouping) */
    QryGroup52: 'QryGroup52',
    /** Query group 53 (user-defined grouping) */
    QryGroup53: 'QryGroup53',
    /** Query group 54 (user-defined grouping) */
    QryGroup54: 'QryGroup54',
    /** Query group 55 (user-defined grouping) */
    QryGroup55: 'QryGroup55',
    /** Query group 56 (user-defined grouping) */
    QryGroup56: 'QryGroup56',
    /** Query group 57 (user-defined grouping) */
    QryGroup57: 'QryGroup57',
    /** Query group 58 (user-defined grouping) */
    QryGroup58: 'QryGroup58',
    /** Query group 59 (user-defined grouping) */
    QryGroup59: 'QryGroup59',
    /** Query group 60 (user-defined grouping) */
    QryGroup60: 'QryGroup60',
    /** Query group 61 (user-defined grouping) */
    QryGroup61: 'QryGroup61',
    /** Query group 62 (user-defined grouping) */
    QryGroup62: 'QryGroup62',
    /** Query group 63 (user-defined grouping) */
    QryGroup63: 'QryGroup63',
    /** Query group 64 (user-defined grouping) */
    QryGroup64: 'QryGroup64',
    /** Deduction office associated with the business partner */
    DdctOffice: 'DdctOffice',
    /** Creation date of the business partner record */
    CreateDate: 'CreateDate',
    /** Last update date of the business partner record */
    UpdateDate: 'UpdateDate',
    /** Export code assigned to the business partner */
    ExportCode: 'ExportCode',
    /** Discount object reference */
    DscntObjct: 'DscntObjct',
    /** Discount relationship percentage */
    DscntRel: 'DscntRel',
    /** Sales performance group counter */
    SPGCounter: 'SPGCounter',
    /** Sales performance period counter */
    SPPCounter: 'SPPCounter',
    /** Deduction file number */
    DdctFileNo: 'DdctFileNo',
    /** Sales commission counter */
    SCNCounter: 'SCNCounter',
    /** Minimum interest rate applicable */
    MinIntrst: 'MinIntrst',
    /** Data source of the business partner record */
    DataSource: 'DataSource',
    /** Operational count associated with the business partner */
    OprCount: 'OprCount',
    /** Tax exemption number */
    ExemptNo: 'ExemptNo',
    /** Priority level assigned to the business partner */
    Priority: 'Priority',
    /** Indicates if the business partner uses credit cards */
    CreditCard: 'CreditCard',
    /** Credit card number associated with the business partner */
    CrCardNum: 'CrCardNum',
    /** Expiry date of the associated credit card */
    CardValid: 'CardValid',
    /** User signature identifier */
    UserSign: 'UserSign',
};
