// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// DOMINIO: App de Asesoría Agronómica (Agrotech)
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes base para el análisis de un lote de cultivo (Maíz)
const COST_PER_HECTARE = 1_500_000; // Costo base de operación por hectárea
const MAX_HUMIDITY_THRESHOLD = 80;   // Umbral máximo de humedad permitido (%)
const MIN_HUMIDITY_THRESHOLD = 30;   // Umbral mínimo para activar riego (%)
const IDEAL_CULTIVATION_TYPE = "Maiz"; // Cultivo objetivo para asesoría técnica

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Análisis de Inversión y Rendimiento ===");

const totalHectares = 15;
const seedsPerHectare = 75_000;

// Multiplicación: Total de semillas necesarias
const totalSeedsNeeded = totalHectares * seedsPerHectare;
console.log("Total de semillas necesarias para el lote:", totalSeedsNeeded);

// División: Cálculo de presupuesto base
const baseBudget = COST_PER_HECTARE * totalHectares;
console.log("Presupuesto base de inversión:", baseBudget);

// Módulo (%): Semillas sobrantes tras empaques estándar (ej. sacos de 50,000)
const leftoverSeeds = totalSeedsNeeded % 50_000;
console.log("Semillas restantes tras completar sacos:", leftoverSeeds);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Seguimiento de Gastos Operativos ===");

let operationalExpenses = 0;

// Suma de gastos de fertilización
operationalExpenses += 450_000;
console.log("Gastos tras fertilización inicial:", operationalExpenses);

// Suma de gastos de mano de obra
operationalExpenses += 200_000;
console.log("Gastos sumando mano de obra:", operationalExpenses);

// Aplicación de un descuento por compra masiva de insumos (15% de descuento)
// Multiplicamos por 0.85 para restar el 15%
operationalExpenses *= 0.85;
console.log("Gasto operativo final (aplicando 15% de descuento):", operationalExpenses);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones de Seguridad Agronómica ===");

const currentPH = 6.5;
const currentCrop = "Maiz";

// Validación estricta del tipo de cultivo
const isCorrectCrop = currentCrop === IDEAL_CULTIVATION_TYPE;
console.log("¿El cultivo actual coincide con la asesoría técnica?:", isCorrectCrop);

// Comparación de acidez del suelo
const isHighAcidity = currentPH < 5.5;
console.log("¿El suelo presenta acidez crítica (< 5.5)?:", isHighAcidity);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Alertas de Sistema Agrotech ===");

const currentHumidity = 25;
const rainForecast = false;
const isDaytime = true;

// Uso de && (AND): Activar riego si hay poca humedad Y no se espera lluvia
const activateIrrigation = currentHumidity < MIN_HUMIDITY_THRESHOLD && !rainForecast;
console.log("¿Activar sistema de riego automático?:", activateIrrigation);

// Uso de || (OR): Alerta de riesgo si la humedad es muy baja O muy alta
const extremeHumidityAlert = currentHumidity < 10 || currentHumidity > MAX_HUMIDITY_THRESHOLD;
console.log("¿Disparar alerta de humedad extrema?:", extremeHumidityAlert);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen de Asesoría Agronómica ===");

console.log(`Lote analizado: ${totalHectares} hectáreas.`);
console.log(`Inversión total proyectada: $${baseBudget + operationalExpenses}`);
console.log(`Estado del riego: ${activateIrrigation ? "ACTIVO" : "INACTIVO"}`);

console.log("");