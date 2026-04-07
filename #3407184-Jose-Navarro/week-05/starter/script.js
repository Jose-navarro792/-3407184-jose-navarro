// ============================================
// SECCIÓN 1: Datos del elemento (Dominio: Asesoría Agronómica)
// ============================================

const elementName = "Lote Norte - Cultivo de Maíz"; 
const elementStatus = "active"; 
const elementValue = 18;            // Porcentaje de humedad del suelo
const elementType = "riego";        // Categoría de la asesoría
const elementInfo = {               // Objeto anidado opcional
    sensorId: "SN-405",
    lastCheck: "2026-04-07"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================
// Clasificación según el nivel de humedad
let classification;
if (elementValue > 60) {
    classification = "Saturado (Riesgo de inundación)";
} else if (elementValue >= 20) {
    classification = "Óptimo (Nivel saludable)";
} else {
    classification = "Crítico (Necesita riego urgente)";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================
const statusLabel = elementStatus === "active" ? "Monitoreo Activo" : "Sensor Desconectado";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================
let typeLabel;
switch (elementType) {
    case "riego":
        typeLabel = "Asesoría de Gestión de Agua";
        break;
    case "plagas":
        typeLabel = "Control Fitosanitario";
        break;
    case "nutricion":
        typeLabel = "Plan de Fertilización";
        break;
    default:
        typeLabel = "Consulta General Técnica";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================
const displayName = elementName ?? "Parcela sin identificar";
const infoDetail = elementInfo?.lastCheck ?? "Sin fecha registrada";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================
const safeProperty = elementInfo?.sensorId ?? "ID de sensor no disponible";

// ============================================
// SECCIÓN 7: Ficha de salida (Template Literals)
// ============================================

console.log("=".repeat(40));
console.log("🌱 SISTEMA DE ASESORÍA AGROTECH");
console.log("=".repeat(40));
console.log(`Lote: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Humedad: ${elementValue}% -> ${classification}`);
console.log(`Servicio: ${typeLabel}`);
console.log(`Última Revisión: ${infoDetail}`);
console.log(`Sensor: ${safeProperty}`);
console.log("=".repeat(40));
// TODO: console.log(`Estado: ${statusLabel}`);
// TODO: console.log(`Clasificación: ${classification}`);
// TODO: console.log(`Tipo: ${typeLabel}`);
// TODO: console.log(`Detalle: ${infoDetail}`);
// TODO: console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
