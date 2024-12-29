# SAPSlayer

**SAPSlayer** es una librería escrita en TypeScript que permite interactuar fácilmente con el Service Layer de SAP Business One, simplificando la integración y automatización de operaciones como consultas, inserciones y actualizaciones de datos en tablas de SAP.

## 🚀 Funcionalidades

- **Autenticación**: Realiza el inicio de sesión con el SAP Service Layer.
- **Query Builder**: Construye consultas dinámicas para filtrar, ordenar y seleccionar datos.
- **Manejo de paginación**: Recupera todos los registros, incluso cuando el servidor limita las respuestas.
- **Mapeo de entidades**: Define estructuras preconfiguradas de las tablas de SAP.
- **Ejemplos prácticos**: Incluye ejemplos para consultas comunes, como calcular totales facturados.

## 📂 Estructura del proyecto

```plaintext
src/
├── SLORM/
│   ├── QueryBuilder.ts   # Construcción de consultas dinámicas.
│   └── ServiceLayerEntities.ts # Mapeo de entidades de SAP.
├── SAPSlayer.ts          # Clase principal para interactuar con el SAP Service Layer.
├── examples/
│   └── sap.ts            # Ejemplo de uso con consultas a SAP.
└── index.ts              # Punto de entrada.
.env                      # Configuración de variables de entorno.