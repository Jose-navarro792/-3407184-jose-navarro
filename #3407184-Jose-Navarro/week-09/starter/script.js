"use strict";

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

const DOMAIN_NAME = "AgroTech Solutions";
const VALUE_LABEL = "Equipos de Precisión";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Tractor JD 5E", precio: 45000, activo: true, categoria: "Maquinaria", potencia: "75 HP" },
  { id: 2, name: "Drone Agricola T40", precio: 15500, activo: true, categoria: "Drones", capacidad: "40L", gps: true },
  { id: 3, name: "Sensor Humedad V2", precio: 280, activo: true, categoria: "Sensores", bateria: "24 meses" },
  { id: 4, name: "Cosechadora S700", precio: 88000, activo: false, categoria: "Maquinaria", potencia: "450 HP", garantia: "3 años" },
  { id: 5, name: "Estación Clima Pro", precio: 1450, activo: true, categoria: "Sensores", conectividad: "4G", gps: true },
  { id: 6, name: "Sembradora 12R", precio: 22000, activo: true, categoria: "Maquinaria", surcos: 12 }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle Técnico de: ${item.name.toUpperCase()}`);
  // Usar Object.entries() + forEach para imprimir clave-valor alineados
  Object.entries(item).forEach(([key, value]) => {
    console.log(`   ${key.padEnd(15)} : ${value}`);
  });
};

const calculateStats = (numericKey) => {
  // Extraemos solo los valores numéricos usando map + Object.values (indirectamente sobre el array)
  const values = items.map(item => item[numericKey]);
  
  const total = values.reduce((acc, val) => acc + val, 0);
  const promedio = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 ESTADÍSTICAS DE ${numericKey.toUpperCase()}:`);
  console.log(`   Total acumulado : $${total.toLocaleString()}`);
  console.log(`   Promedio valor  : $${promedio.toFixed(2)}`);
  console.log(`   Valor máximo    : $${max.toLocaleString()}`);
  console.log(`   Valor mínimo    : $${min.toLocaleString()}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ Equipo: ${item.name} (${item.categoria})`);
  console.log(`  Estado: ${item.activo ? "✅ Operativo" : "❌ En mantenimiento"}`);
  
  // Verificar propiedades opcionales con hasOwn
  if (Object.hasOwn(item, "gps")) {
    console.log(`  📡 Característica: Posee GPS de alta precisión.`);
  }
  if (Object.hasOwn(item, "garantia")) {
    console.log(`  🛡️ Garantía extendida: ${item.garantia}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Mapeo de propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`   Key: ${key.padEnd(12)} | Value: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR (Actualización Inmutable)
// ============================================

const updateItem = (item, changes) => {
  // Retornar un nuevo objeto sin mutar el original
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.activo === true);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  // Agregamos el precio con IVA (19%) como propiedad calculada
  return items.map(item => ({ 
    ...item, 
    precioConIva: +(item.precio * 1.19).toFixed(2) 
  }));
};

const sortByNumericProp = (ascending = true) => {
  // Usar spread para no mutar el array 'items' original
  return [...items].sort((a, b) => ascending ? a.precio - b.precio : b.precio - a.precio);
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "═".repeat(60));
  console.log(`📦 REPORTE FINAL CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("═".repeat(60));

  const activos = getAvailable();
  console.log(`Total equipos registrados : ${items.length}`);
  console.log(`Equipos en operación      : ${activos.length}`);
  
  calculateStats("precio");

  console.log("\n📋 LISTADO ORDENADO POR PRECIO (Descendente):");
  const ordenados = sortByNumericProp(false);
  ordenados.forEach((equipo, index) => {
    console.log(`   ${index + 1}. ${equipo.name.padEnd(20)} | $${equipo.precio.toLocaleString()}`);
  });

  console.log("\n📌 NOTA: Todos los precios incluyen soporte técnico base.");
  console.log("═".repeat(60));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando sistema de gestión: ${DOMAIN_NAME}`);

// 1. Inspección
inspectItem(items[1]);

// 2. Estadísticas
calculateStats("precio");

// 3. Verificación de opcionales
console.log("\n--- REVISIÓN DE EQUIPOS CON FUNCIONES ESPECIALES ---");
items.forEach(showWithOptionals);

// 4. Iteración for...in
printAllProperties(items[2]);

// 5. Demostración de actualización inmutable
console.log("\n--- PRUEBA DE ACTUALIZACIÓN INMUTABLE ---");
const original = items[0];
const actualizado = updateItem(original, { precio: 42000, activo: false });
console.log(`Original: ${original.name} - $${original.precio} (Activo: ${original.activo})`);
console.log(`Update  : ${actualizado.name} - $${actualizado.precio} (Activo: ${actualizado.activo})`);

// 6. Reporte Final
buildReport();Prop()
// 10. buildReport()
