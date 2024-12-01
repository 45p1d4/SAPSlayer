/**
 * OITMFields representa los campos en la tabla OITM (Master Data Items).
 */
export const OITM = {
    /** Código único del artículo */
    ItemCode: 'ItemCode',
    /** Nombre del artículo */
    ItemName: 'ItemName',
    /** Descripción del artículo */
    ItemDesc: 'ItemDesc',
    /** Tipo de artículo (e.g., producto, servicio) */
    ItemType: 'ItemType',
    /** Unidad de medida del artículo */
    UomCode: 'UomCode',
    /** Grupo de artículos */
    ItmsGrpCod: 'ItmsGrpCod',
    /** Precio de venta del artículo */
    SalUnitMsr: 'SalUnitMsr',
    /** Precio del artículo */
    Price: 'Price',
    /** Indica si el artículo está activo o no */
    Frozen: 'Frozen',
    /** Código del proveedor asociado al artículo */
    BuyUnitMsr: 'BuyUnitMsr',
    /** Indica si el artículo es serializado */
    Serialized: 'Serialized',
    /** Descuento del artículo */
    Discount: 'Discount',
    /** Código de la lista de precios asociada al artículo */
    ListNum: 'ListNum',
    /** Porcentaje de IVA aplicable al artículo */
    VatGroup: 'VatGroup',
    /** Existencias en el inventario */
    OnHand: 'OnHand',
    /** Existencias disponibles para la venta */
    IsCommited: 'IsCommited',
    /** Existencias no comprometidas (no vendidas) */
    IsBuyQty: 'IsBuyQty',
    /** Costo estándar del artículo */
    StdCost: 'StdCost',
    /** Precio estándar del artículo */
    PriceBefDi: 'PriceBefDi',
    /** Estado del artículo (Activo/Inactivo) */
    Active: 'Active',
    /** Código del almacén asociado */
    WhsCode: 'WhsCode',
    /** Ruta de imagen del artículo */
    Picture: 'Picture',
    /** Fecha de creación del artículo */
    CreateDate: 'CreateDate',
    /** Fecha de la última actualización del artículo */
    UpdateDate: 'UpdateDate',
    /** Código de la unidad de medida del artículo */
    BaseUom: 'BaseUom',
    /** Ubicación de las existencias del artículo */
    OnOrder: 'OnOrder',
    /** Existencias disponibles para la venta en unidades */
    CommittedQty: 'CommittedQty',
    /** Nivel de inventario para reposición */
    MinLevel: 'MinLevel',
    /** Nivel de inventario para el máximo stock */
    MaxLevel: 'MaxLevel',
    /** Precio promedio del artículo */
    AvgPrice: 'AvgPrice',
    /** Indica si el artículo está bloqueado para venta */
    Blocked: 'Blocked',
    /** El número de serie o lote del artículo */
    SerialNum: 'SerialNum',
    /** ID del proveedor para el artículo */
    Supplier: 'Supplier',
    /** Descripción del proveedor para el artículo */
    SupplierDesc: 'SupplierDesc',
    /** Tipo de inventario del artículo */
    InvntItem: 'InvntItem',
    /** Número de la clasificación de impuestos del artículo */
    TaxCode: 'TaxCode',
    /** Cantidad de existencias disponible para el artículo en cada almacén */
    WarehouseQty: 'WarehouseQty',
    /** Descripción del artículo en otro idioma (si corresponde) */
    ItemDesc2: 'ItemDesc2',
    /** Código de la empresa para la que el artículo está disponible */
    BPLId: 'BPLId',
    /** Información adicional sobre el artículo */
    FreeText: 'FreeText',
    /** Número de serie de la unidad asociada al artículo */
    SerialNum2: 'SerialNum2',
    /** Fecha de expiración del artículo */
    ExpiryDate: 'ExpiryDate',
    /** Indica si el artículo está bloqueado para compras */
    FrozenForPurch: 'FrozenForPurch',
    /** ID del vendedor asignado al artículo */
    SlsEmpCode: 'SlsEmpCode',
    /** Código de tipo de artículo */
    ItemTypeCode: 'ItemTypeCode',
    /** Código del tipo de promoción (si aplica) */
    PromotionType: 'PromotionType',
    /** Código del artículo padre (si el artículo es parte de una jerarquía) */
    ParentItem: 'ParentItem',
    /** Porcentaje de ganancia del artículo */
    ProfitPercent: 'ProfitPercent',
    /** Tipo de cambio aplicado en la compra del artículo */
    Currency: 'Currency',
    /** Indicador de si el artículo es parte de un proceso de fabricación */
    ManufactureItem: 'ManufactureItem',
    /** Indica si el artículo es una parte del servicio */
    ServiceItem: 'ServiceItem',
    /** Número de identificación fiscal del artículo (si aplica) */
    LicTradNum: 'LicTradNum',
    /** Código del tipo de clasificación del artículo */
    ItemGrpCode: 'ItemGrpCode',
};
