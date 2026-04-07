// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Asesoría Agronómica y Agrotech
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio (Lotes de Cultivo)
// ============================================
const lotes = [
  { name: "Lote Maíz Norte", category: "Cereales", value: 45 },
  { name: "Lote Soja Este", category: "Oleaginosas", value: 12 },
  { name: "Invernadero Tomate", category: "Hortalizas", value: 38 },
  { name: "Lote Trigo Sur", category: "Cereales", value: 25 },
  { name: "Lote Girasol", category: "Oleaginosas", value: 50 },
  { name: "Huerta Orgánica", category: "Hortalizas", value: 15 }
];

const categories = ["Cereales", "Oleaginosas", "Hortalizas"];

// Usamos el nivel de Nitrógeno como valor numérico relevante
const valueLabel = "Nitrógeno (mg/kg)"; 

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO DE LOTES ===");

let lineNumber = 0;
for (const lote of lotes) {
  lineNumber++;
  // Imprimimos la información básica de cada lote
  console.log(`${lineNumber}. ${lote.name} — [${lote.category}] — ${valueLabel}: ${lote.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  // Bucle interior para contar cuántos lotes pertenecen a la categoría actual
  for (const lote of lotes) {
    if (lote.category === category) {
        count++;
    }
  }

  console.log(`${category}: ${count} lote(s) registrados`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS GENERALES ===");

let totalValue = 0;

for (const lote of lotes) {
  // Acumulamos el valor de nitrógeno de cada lote
  totalValue += lote.value;
}

const averageValue = lotes.length > 0 ? totalValue / lotes.length : 0;

console.log(`Total ${valueLabel} acumulado: ${totalValue}`);
console.log(`Promedio de Fertilidad: ${averageValue.toFixed(1)} mg/kg`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== ANÁLISIS DE FERTILIDAD (MÁX/MÍN) ===");

let maxItem = lotes[0] ?? null;
let minItem = lotes[0] ?? null;

if (lotes.length > 0) {
  for (const lote of lotes) {
    // Lógica para encontrar el valor máximo
    if (lote.value > maxItem.value) {
        maxItem = lote;
    }
    // Lógica para encontrar el valor mínimo
    if (lote.value < minItem.value) {
        minItem = lote;
    }
  }

  console.log(`Lote más fértil: ${maxItem?.name} (${maxItem?.value} mg/kg)`);
  console.log(`Lote con déficit: ${minItem?.name} (${minItem?.value} mg/kg)`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO DE ASESORÍA ===");

for (let i = 0; i < lotes.length; i++) {
  const lote = lotes[i];

  // Determinamos si el lote está por encima o por debajo del promedio del campo
  const comparison = lote.value >= averageValue ? "SOBRE EL PROMEDIO ✅" : "BAJO EL PROMEDIO ⚠️";

  // Imprimimos la línea numerada del reporte
  console.log(`${i + 1}. ${lote.name.padEnd(20)} | Estado: ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE AGROTECH ===");

  // TODO: Imprime la línea del reporte
  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
