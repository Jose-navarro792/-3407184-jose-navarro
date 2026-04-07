"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Constantes globales del dominio Agrotech
const DOMAIN_NAME = "AgroTech Solutions - Asesoría Agronómica";
const VALUE_LABEL = "Hectáreas"; 
const NITRÓGENO_OPTIMO = 50; // mg/kg ideales en suelo

// Array con 6 lotes de cultivo (elementos del dominio)
const lotes = [
  { id: 101, nombre: "Lote Maíz Norte", categoria: "Cereales", area: 15, nitrogeno: 45, activo: true },
  { id: 102, nombre: "Lote Soja Este", categoria: "Oleaginosas", area: 30, nitrogeno: 12, activo: true },
  { id: 103, nombre: "Invernadero Tomate", categoria: "Hortalizas", area: 5, nitrogeno: 38, activo: false },
  { id: 104, nombre: "Lote Trigo Sur", categoria: "Cereales", area: 20, nitrogeno: 25, activo: true },
  { id: 105, nombre: "Lote Girasol Central", categoria: "Oleaginosas", area: 25, nitrogeno: 52, activo: true },
  { id: 106, nombre: "Huerta Orgánica", categoria: "Hortalizas", area: 2, nitrogeno: 18, activo: false }
];

// ============================================
// SECCIÓN 2: Función de formato (Arrow Function)
// ============================================

// Devuelve un string formateado con el nombre, categoría y área del lote
const formatItem = (lote) => 
  `🌱 ${lote.nombre.padEnd(20)} | Tipo: ${lote.categoria.padEnd(12)} | Superficie: ${lote.area} ha`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// Calcula el déficit de nitrógeno multiplicado por el área para saber cuánto fertilizante falta
const calculateValue = (nivelActual, area, factorConversion = 0.5) => {
  const deficit = NITRÓGENO_OPTIMO - nivelActual;
  // Si el nitrógeno es mayor al óptimo, el déficit es 0
  return deficit > 0 ? +(deficit * area * factorConversion).toFixed(2) : 0;
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Un lote es "válido para monitoreo" si está marcado como activo
const isValid = (lote) => lote.activo === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Genera un mensaje de estado con la moneda o unidad por defecto
const formatWithDefault = (valor, etiqueta = "Resultado", unidad = "unidades") => {
  return `${etiqueta}: ${valor} ${unidad}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

console.log(`\n${"═".repeat(60)}`);
console.log(`     REPORTE TÉCNICO — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(60)}`);

if (lotes.length === 0) {
  console.log("\n⚠️ No hay lotes registrados en el sistema.");
} else {
  // --- Listado ---
  console.log("\n📋 ESTADO ACTUAL DE LOS LOTES:");
  let lineNumber = 1;
  for (const lote of lotes) {
    console.log(`  ${lineNumber}. ${formatItem(lote)}`);
    lineNumber++;
  }

  // --- Validación ---
  let lotesActivos = 0;
  for (const lote of lotes) {
    if (isValid(lote)) {
      lotesActivos++;
    }
  }
  console.log(`\n✅ Lotes en monitoreo activo: ${lotesActivos} / ${lotes.length}`);

  // --- Cálculo ---
  let totalFertilizante = 0;
  let areaTotal = 0;

  for (const lote of lotes) {
    // Sumamos el área total
    areaTotal += lote.area;
    // Usamos calculateValue() para proyectar la necesidad de insumos
    totalFertilizante += calculateValue(lote.nitrogeno, lote.area);
  }

  console.log("\n📊 RESUMEN DE INSUMOS Y SUPERFICIE:");
  // Usamos la función con parámetros por defecto
  console.log(`  > ${formatWithDefault(areaTotal, "Superficie total gestionada", "hectáreas")}`);
  console.log(`  > ${formatWithDefault(totalFertilizante.toFixed(1), "Fertilizante necesario", "kg")}`);
}

console.log(`\n${"═".repeat(60)}`);
console.log("       FIN DEL INFORME - SISTEMA AGROTECH v1.0");
console.log(`${"═".repeat(60)}\n`);
