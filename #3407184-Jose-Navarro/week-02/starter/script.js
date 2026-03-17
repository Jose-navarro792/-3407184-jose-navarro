// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// Dominio: Asesoría Agronómica / AgroTech 🌾
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// TODO: Reemplaza "Mi Dominio" con el nombre de tu dominio
const DOMAIN_NAME = "AGRO-ADVISOR PRO (AGROTECH)";

// TODO: Nombre del elemento de tu dominio
const cropName = "Maíz Híbrido DK-7210";

// TODO: Categoría, tipo o descripción corta (string)
const advisoryCategory = "Gestión de Nutrientes y Riego";

// TODO: Número relevante (con separador _ para legibilidad)
const hectareArea = 1_500.75; // Área total bajo asesoría en metros cuadrados o hectáreas

// TODO: Boolean con prefijo semántico (is/has/can/should)
const hasPestRisk = true; 

// TODO: Valor null que signifique "no asignado aún"
const lastSoilAnalysisDate = null; 


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Cultivo:        ${cropName}`);
console.log(`Categoría:     ${advisoryCategory}`);
// TODO: Agrega un console.log para itemQuantity
console.log(`Área Hectáreas: ${hectareArea}`);
// TODO: Agrega un console.log para isItemAvailable
console.log(`Riesgo Plaga:   ${hasPestRisk}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof cropName:      ", typeof cropName);
// TODO: Agrega typeof para otras 2 variables
console.log("typeof hectareArea:   ", typeof hectareArea);
console.log("typeof hasPestRisk:   ", typeof hasPestRisk);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// TODO: Realiza al menos UNA conversión explícita
// Convertimos el área (number) a String para generar una etiqueta de reporte
const areaReport = String(hectareArea) + " ha";
console.log("Reporte de Área:     ", areaReport);
console.log("typeof (convertido): ", typeof areaReport);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Último Análisis:      ", lastSoilAnalysisDate);
// TODO: Agrega typeof y la verificación === null
console.log("Tipo (null es object):", typeof lastSoilAnalysisDate);
console.log("¿Está pendiente?:     ", lastSoilAnalysisDate === null);
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");