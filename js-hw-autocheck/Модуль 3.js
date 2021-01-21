/* Задача 16 / 41  - Задача. Расходы на зарплату */
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки

  for (let price of Object.values(salaries)) {
    totalSalary += price;
  }

  // Пиши код выше этой строки
  return totalSalary;
}

/* Задача 17 / 41  - Массив объектов */
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const key of colors) {
  hexColors.push(key.hex);
  rgbColors.push(key.rgb);
}

/* Задача 18 / 41  - Задача. Поиск объекта по значению свойства */
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const key of products) {
    console.log(key);
    if (productName === key.name) {
      return key.price;
    }
  }
  return null;
  // Пиши код выше этой строки
}

/* Задача 19 / 41  - Задача. Коллекция значений свойства */
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const values = [];
  for (const item of products) {
    if (propName in item) {
      values.push(item[propName]);
    }
  }
  return values;
  // Пиши код выше этой строки
}
