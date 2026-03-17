/**
 * Proyecto Semana 04: Generador de Mensajes de Dominio
 * Dominio: App de Asesoría Agronómica
 * Categoría: Agricultura y Agrotech
 */

// ============================================
// SECCIÓN 1: Datos del dominio (Agronomía)
// ============================================

// Nombre del sistema
const DOMAIN_NAME = "AgroScan Pro";

// Entidad: Un lote de cultivo con espacios y mayúsculas mixtas
const rawEntityName = "   lote huerTA del SUR   ";

// Categoría técnica
const entityCategory = "Monitoreo de Suelos y Nutrientes";

// Código identificador con prefijo técnico
const entityCode = "AGRO-772-L05";

// Descripción con palabras clave para validar
const entityDescription = "Se detectó una deficiencia crítica de nitrógeno y fósforo en el sector norte.";

// Valor numérico (Hectáreas o nivel de PH)
const mainValue = 12.5;

// Estado del reporte
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string (Los 5 métodos)
// ============================================

// 1. trim(): Limpia el nombre del lote
const entityName = rawEntityName.trim();

// 2. toUpperCase(): Nombre en mayúsculas para el título oficial
const entityNameUpper = entityName.toUpperCase();

// 3. toLowerCase(): Para generar un slug o identificador visual
const entityNameLower = entityName.toLowerCase();

// 4. slice(): Extrae el prefijo "AGRO" del código
const codePrefix = entityCode.slice(0, 4);

// 5. replace(): Cambia una palabra para dar énfasis (Método extra para asegurar nota)
const urgentDescription = entityDescription.replace("deficiencia", "⚠️ ALERTA DE DEFICIENCIA");


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// startsWith(): Valida que el código sea de tipo AGRO
const hasValidPrefix = entityCode.startsWith("AGRO");

// includes(): Busca si el problema es de nitrógeno
const descriptionIsRelevant = entityDescription.includes("nitrógeno");

// endsWith(): Verifica si termina en el lote específico
const hasValidSuffix = entityCode.endsWith("L05");


// ============================================
// SECCIÓN 4: Generación de la ficha principal (Template Literals)
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — REPORTE DE CAMPO
${separator}
Productor:    ${entityNameUpper}
Categoría:    ${entityCategory}
ID Reporte:   ${entityCode}
Prefijo:      ${codePrefix}
Superficie:   ${mainValue} Hectáreas
Estado:       ${isActive ? "ANÁLISIS COMPLETADO" : "PENDIENTE"}

${subSeparator}
Diagnóstico Técnico:
${urgentDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Panel de Validaciones
// ============================================

console.log("--- Diagnóstico de Integridad ---");
console.log(`¿Es un código AGRO válido?: ${hasValidPrefix}`);
console.log(`¿Requiere fertilización nitrogenada?: ${descriptionIsRelevant}`);
console.log(`¿Referencia al Lote 05?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación Push ---");

// Uso de template literal con el nombre limpio y el código
const notification = `📢 NUEVO REPORTE: El ${entityName} ha generado una alerta técnica (${entityCode})`;
console.log(notification);
console.log("");