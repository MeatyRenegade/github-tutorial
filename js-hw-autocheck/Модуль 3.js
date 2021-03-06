/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 16 / 41  - Задача. Расходы на зарплату */

/* *************************************************************************** */
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки

  for (let price of Object.values(salaries)) {
    totalSalary += price;
  }

  // Пиши код выше этой строки
  return totalSalary;
}
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 17 / 41  - Массив объектов */

/* *************************************************************************** */
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
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 18 / 41  - Задача. Поиск объекта по значению свойства */

/* *************************************************************************** */
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
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 19 / 41  - Задача. Коллекция значений свойства */

/* *************************************************************************** */
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
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 20 / 41  - Задача. Общая стоимость товара */

/* *************************************************************************** */
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let product = 0;
  for (const key of products) {
    if (Object.values(key).includes(productName))
      return key.price * key.quantity;
    {
    }
  }
  return product;
  // Пиши код выше этой строки
}
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 21 / 41  - Деструктуризация объектов */

/* *************************************************************************** */
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const { yesterday, today, tomorrow } = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 22 / 41  - Значения по умолчанию */

/* *************************************************************************** */
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 23 / 41  - Изменение имени переменной */

/* *************************************************************************** */
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 24 / 41  - Деструктуризация в циклах */

/* *************************************************************************** */
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 25 / 41  - Глубокая деструктуризация */

/* *************************************************************************** */
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 26 / 41  - Паттерн «Объект настроек» */

/* *************************************************************************** */
// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 27 / 41  - Операция spread при передаче аргументов */

/* *************************************************************************** */
const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 28 / 41  - Операция spread при создании нового массива */

/* *************************************************************************** */
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 29 / 41  - Операция spread при создании нового объекта */

/* *************************************************************************** */
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = { ...defaultSettings, ...overrideSettings };
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 30 / 41  - Задача. Карточки задач */

/* *************************************************************************** */
function makeTask(data) {
  const completed = false;
  const category = "Общее";
  const priority = "Обычный";
  // Пиши код ниже этой строки

  const newData = {
    completed,
    category,
    priority,
    ...data,
  };

  return newData;
  // Пиши код выше этой строки
}
/* *************************************************************************** */
/* **************************************************************************** */

/* Задача 31 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 32 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 33 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 34 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 35 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 36 / 41  -  */

/* *************************************************************************** */

/* *************************************************************************** */

/* Задача 37 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 38 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 39 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 40 / 41  -  */

/* *************************************************************************** */

/* **************************************************************************** */

/* Задача 41 / 41  -  */

/* *************************************************************************** */

/* *************************************************************************** */
