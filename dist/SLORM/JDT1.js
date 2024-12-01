/**
 * JDT1Fields representa los campos en la tabla JDT1 (Líneas de Asiento de Diario) de SAP Business One.
 */
export const JDT1 = {
    /** Transaction ID */
    TransId: 'TransId',
    /** Line ID */
    Line_ID: 'Line_ID',
    /** Account */
    Account: 'Account',
    /** Debit */
    Debit: 'Debit',
    /** Credit */
    Credit: 'Credit',
    /** System Credit */
    SYSCred: 'SYSCred',
    /** System Debit */
    SYSDeb: 'SYSDeb',
    /** Foreign Currency Debit */
    FCDebit: 'FCDebit',
    /** Foreign Currency Credit */
    FCCredit: 'FCCredit',
    /** Foreign Currency */
    FCCurrency: 'FCCurrency',
    /** Due Date */
    DueDate: 'DueDate',
    /** Source ID */
    SourceID: 'SourceID',
    /** Source Line */
    SourceLine: 'SourceLine',
    /** Short Name */
    ShortName: 'ShortName',
    /** Internal Match */
    IntrnMatch: 'IntrnMatch',
    /** External Match */
    ExtrMatch: 'ExtrMatch',
    /** Contra Account */
    ContraAct: 'ContraAct',
    /** Line Memo */
    LineMemo: 'LineMemo',
    /** Reference 3 Line */
    Ref3Line: 'Ref3Line',
    /** Transaction Type */
    TransType: 'TransType',
    /** Reference Date */
    RefDate: 'RefDate',
    /** Reference 2 Date */
    Ref2Date: 'Ref2Date',
    /** Reference 1 */
    Ref1: 'Ref1',
    /** Reference 2 */
    Ref2: 'Ref2',
    /** Created By */
    CreatedBy: 'CreatedBy',
    /** Base Reference */
    BaseRef: 'BaseRef',
    /** Project */
    Project: 'Project',
    /** Transaction Code */
    TransCode: 'TransCode',
    /** Profit Code */
    ProfitCode: 'ProfitCode',
    /** Tax Date */
    TaxDate: 'TaxDate',
    /** System Rate */
    SystemRate: 'SystemRate',
    /** Month Date */
    MthDate: 'MthDate',
    /** To Month Sum */
    ToMthSum: 'ToMthSum',
    /** User Signature */
    UserSign: 'UserSign',
    /** Batch Number */
    BatchNum: 'BatchNum',
    /** Financial Period */
    FinncPriod: 'FinncPriod',
    /** Related Transaction ID */
    RelTransId: 'RelTransId',
    /** Related Line ID */
    RelLineID: 'RelLineID',
    /** Related Type */
    RelType: 'RelType',
    /** Log Instance */
    LogInstanc: 'LogInstanc',
    /** VAT Group */
    VatGroup: 'VatGroup',
    /** Base Sum */
    BaseSum: 'BaseSum',
    /** VAT Rate */
    VatRate: 'VatRate',
    /** Indicator */
    Indicator: 'Indicator',
    /** Adjustment Transaction */
    AdjTran: 'AdjTran',
    /** Reversal Source */
    RevSource: 'RevSource',
    /** Object Type */
    ObjType: 'ObjType',
    /** VAT Date */
    VatDate: 'VatDate',
    /** Payment Reference */
    PaymentRef: 'PaymentRef',
    /** System Base Sum */
    SYSBaseSum: 'SYSBaseSum',
    /** Multiple Match */
    MultMatch: 'MultMatch',
    /** VAT Line */
    VatLine: 'VatLine',
    /** VAT Amount */
    VatAmount: 'VatAmount',
    /** System VAT Sum */
    SYSVatSum: 'SYSVatSum',
    /** Closed */
    Closed: 'Closed',
    /** Gross Value */
    GrossValue: 'GrossValue',
    /** Check Absolute */
    CheckAbs: 'CheckAbs',
    /** Line Type */
    LineType: 'LineType',
    /** Debit or Credit */
    DebCred: 'DebCred',
    /** Sequence Number */
    SequenceNr: 'SequenceNr',
    /** Storno Account */
    StornoAcc: 'StornoAcc',
    /** Balance Due Debit */
    BalDueDeb: 'BalDueDeb',
    /** Balance Due Credit */
    BalDueCred: 'BalDueCred',
    /** Balance Foreign Currency Debit */
    BalFcDeb: 'BalFcDeb',
    /** Balance Foreign Currency Credit */
    BalFcCred: 'BalFcCred',
    /** Balance System Currency Debit */
    BalScDeb: 'BalScDeb',
    /** Balance System Currency Credit */
    BalScCred: 'BalScCred',
    /** Is Net */
    IsNet: 'IsNet',
    /** Dunning Wizard Block */
    DunWizBlck: 'DunWizBlck',
    /** Dunning Level */
    DunnLevel: 'DunnLevel',
    /** Dunning Date */
    DunDate: 'DunDate',
    /** Tax Type */
    TaxType: 'TaxType',
    /** Tax Posting Account */
    TaxPostAcc: 'TaxPostAcc',
    /** Status Code */
    StaCode: 'StaCode',
    /** Status Type */
    StaType: 'StaType',
    /** Tax Code */
    TaxCode: 'TaxCode',
    /** Valid From */
    ValidFrom: 'ValidFrom',
    /** Gross Value Foreign Currency */
    GrossValFc: 'GrossValFc',
    /** Level Update Date */
    LvlUpdDate: 'LvlUpdDate',
    /** OCR Code 2 */
    OcrCode2: 'OcrCode2',
    /** OCR Code 3 */
    OcrCode3: 'OcrCode3',
    /** OCR Code 4 */
    OcrCode4: 'OcrCode4',
    /** OCR Code 5 */
    OcrCode5: 'OcrCode5',
    /** MI Entry */
    MIEntry: 'MIEntry',
    /** MIV Entry */
    MIVEntry: 'MIVEntry',
    /** Closing in TP */
    ClsInTP: 'ClsInTP',
    /** Central VAT Company */
    CenVatCom: 'CenVatCom',
    /** Material Type */
    MatType: 'MatType',
    /** Posting Type */
    PstngType: 'PstngType',
    /** Valid From 2 */
    ValidFrom2: 'ValidFrom2',
    /** Valid From 3 */
    ValidFrom3: 'ValidFrom3',
    /** Valid From 4 */
    ValidFrom4: 'ValidFrom4',
    /** Valid From 5 */
    ValidFrom5: 'ValidFrom5',
    /** Location */
    Location: 'Location',
    /** Withholding Tax Code */
    WTaxCode: 'WTaxCode',
    /** Equivalent VAT Rate */
    EquVatRate: 'EquVatRate',
    /** Equivalent VAT Sum */
    EquVatSum: 'EquVatSum',
    /** System Equivalent Sum */
    SYSEquSum: 'SYSEquSum',
    /** Total VAT */
    TotalVat: 'TotalVat',
    /** System VAT */
    SYSTVat: 'SYSTVat',
    /** Withholding Tax Liable */
    WTLiable: 'WTLiable',
    /** Withholding Tax Line */
    WTLine: 'WTLine',
    /** Withholding Tax Applied */
    WTApplied: 'WTApplied',
    /** Withholding Tax Applied (Local Currency) */
    WTAppliedS: 'WTAppliedS',
    /** Withholding Tax Applied (Foreign Currency) */
    WTAppliedF: 'WTAppliedF',
    /** Withholding Tax Sum */
    WTSum: 'WTSum',
    /** Withholding Tax Sum (Foreign Currency) */
    WTSumFC: 'WTSumFC',
    /** Withholding Tax Sum (Local Currency) */
    WTSumSC: 'WTSumSC',
    /** Payment Block */
    PayBlock: 'PayBlock',
    /** Payment Block Reference */
    PayBlckRef: 'PayBlckRef',
    /** License Trade Number */
    LicTradNum: 'LicTradNum',
    /** Interim Type */
    InterimTyp: 'InterimTyp',
    /** Depreciation ID */
    DprId: 'DprId',
    /** Match Reference */
    MatchRef: 'MatchRef',
    /** Ordered */
    Ordered: 'Ordered',
    /** CUP */
    CUP: 'CUP',
    /** CIG */
    CIG: 'CIG',
    /** Business Place ID */
    BPLId: 'BPLId',
    /** Business Place Name */
    BPLName: 'BPLName',
    /** VAT Registration Number */
    VatRegNum: 'VatRegNum',
    /** Sub Ledger F */
    SLEDGERF: 'SLEDGERF',
    /** Initial Reference 2 */
    InitRef2: 'InitRef2',
    /** Initial Reference 3 Line */
    InitRef3Ln: 'InitRef3Ln',
    /** Expense UUID */
    ExpUUID: 'ExpUUID',
    /** Expense Operation Type */
    ExpOPType: 'ExpOPType',
    /** External Transaction ID */
    ExTransId: 'ExTransId',
    /** Document Arrival */
    DocArr: 'DocArr',
    /** Document Line */
    DocLine: 'DocLine',
    /** MYF Type */
    MYFtype: 'MYFtype',
    /** Document Entry */
    DocEntry: 'DocEntry',
    /** Document Number */
    DocNum: 'DocNum',
    /** Document Type */
    DocType: 'DocType',
    /** Document Sub Type */
    DocSubType: 'DocSubType',
    /** Remark Template */
    RmrkTmpt: 'RmrkTmpt',
    /** Cem Code */
    CemCode: 'CemCode',
    /** CA Out Code */
    CAOutCode: 'CAOutCode'
};
