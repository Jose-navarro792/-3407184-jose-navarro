// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Asesoría Agronómica y Agrotech
// ============================================

"use strict";

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "AgroTech Insumos"; 
const VALUE_LABEL = "productos agrícolas"; 

// ============================================
// 1. ARRAY INICIAL — Inventario de Insumos
// ============================================

const items = [
  { id: 101, name: "Semilla Maíz Híbrido", precio: 120, stock: 50, categoria: "Semillas", disponible: true },
  { id: 102, name: "Fertilizante Urea", precio: 85, stock: 200, categoria: "Químicos", disponible: true },
  { id: 103, name: "Fungicida Orgánico", precio: 45, stock: 0, categoria: "Biológicos", disponible: false },
  { id: 104, name: "Herbicida Glifosato", precio: 60, stock: 15, categoria: "Químicos", disponible: true },
  { id: 105, name: "Semilla Soja Premium", precio: 110, stock: 80, categoria: "Semillas", disponible: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✅ Agregado al final: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  if (removed) console.log(`🗑️ Eliminado último: ${removed.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`🚀 Prioridad agregada al inicio: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  if (removed.length > 0) {
    console.log(`✂️ Eliminado por posición [${index}]: ${removed[0].name}`);
  }
};

const getActiveItems = () => {
  // Filtramos por la propiedad booleana 'disponible'
  return items.filter(item => item.disponible === true);
};

const findByName = (name) => {
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

const formatItem = (item) => {
  const status = item.disponible ? "✅" : "❌";
  return `[ID:${item.id}] ${item.name.padEnd(22)} | ${item.categoria.padEnd(12)} | Stock: ${item.stock.toString().padStart(3)} | ${status}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(65)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(65)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// 1. Agregar nuevo (Push)
addItem({ id: 106, name: "Insecticida Eco", precio: 55, stock: 30, categoria: "Biológicos", disponible: true });

// 2. Agregar prioritario (Unshift)
addPriorityItem({ id: 100, name: "Kit Emergencia Plagas", precio: 25, stock: 10, categoria: "Varios", disponible: true });

// 3. Eliminar del medio (Splice)
removeByIndex(3); 

// 4. Eliminar último (Pop)
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Búsqueda con find
const buscado = "Fertilizante Urea";
const encontrado = findByName(buscado);
console.log(`🔍 Buscando "${buscado}":`, encontrado ? `Encontrado (Stock: ${encontrado.stock})` : "No hallado");

// Filtrado con filter
const activos = getActiveItems();
console.log(`📊 Productos disponibles para despacho: ${activos.length}`);

console.log("\n--- Transformación con map e Inmutabilidad ---\n");

// Operador Spread para snapshot inmutable y agregar un extra
const inventarioCopia = [...items, { id: 999, name: "Producto Temporal", disponible: false }];
console.log(`📸 Snapshot creado (Copia con Spread tiene ${inventarioCopia.length} elementos)`);

// Map para extraer nombres
const listaNombres = items.map(item => item.name);
console.log("📝 Lista de nombres en inventario:", listaNombres.join(", "));

// Map para transformar valores (Precios con 10% de descuento por temporada)
const preciosDescuento = items.map(item => ({
    nombre: item.name,
    precioOferta: (item.precio * 0.9).toFixed(2)
}));
console.log("💰 Precios con descuento (Temporada de Siembra):");
preciosDescuento.forEach(p => console.log(`   - ${p.nombre}: $${p.precioOferta}`));

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario real: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Disponibles: ${activeCount} | Agotados: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(65)}`);
console.log("✅ Reporte Agrotech completado");
console.log(`${"=".repeat(65)}\n`);
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
