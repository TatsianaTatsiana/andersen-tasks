// task1

const getResultTask1 = () => {
  let date = new Date();
  return `Today is: ${getWeekDay(date)}.
  Current time is: ${getHours(date)}: ${getMinutesSeconds(date)}`;
};

const getWeekDay = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednes­day',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[date.getDay()];
};

const getHours = (date) => {
  const fullHours = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${date.getHours()} ${fullHours}`;
};

const getMinutesSeconds = (date) => {
  return `${date.getMinutes()} : ${date.getSeconds()}`;
};

console.log(getResultTask1());

// task2
const print = () => {
  window.print();
};

// task3
const getResultTask3 = () => {
  const date = new Date();
  const day = date.getDate() < 10 ? '0' : date.getDate();

  const month = date.getMonth() + 1 < 10 ? '0' : date.getMonth() + 1;

  const year = date.getFullYear();

  return `${day}-${month}-${year}, ${day}/${month}/${year} 
  or ${month}-${day}-${year}, ${month}-${day}-${year}`;
};

console.log(getResultTask3());

// task4
const getResultTask4 = (a, b, c) => {
  if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number') {
    const halfPerimeter = (a + b + c) / 2;
    return Math.sqrt(
      halfPerimeter *
        (halfPerimeter - a) *
        (halfPerimeter - b) *
        (halfPerimeter - c)
    );
  }
};

console.log(getResultTask4(5, 6, 7));

// task5
const getResultTask5 = () => {
  replaceLetters();
  const setIntervalId = setInterval(replaceLetters, 1000);
  setTimeout(() => clearInterval(setIntervalId), 8000);
};

const replaceLetters = () => {
  const title = document.querySelector('.task5-target');
  const content = title.innerHTML;
  const last = content[content.length - 1];
  const newContent = last + content.slice(0, -1);
  title.innerHTML = newContent;
  // return title.innerHTML;
};

console.log(getResultTask5());

// task6
const getResultTask6 = (year) => {
  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  }
  return false;
}; //только такой вариант и заработал, хотя я в нем не уверена совсем

console.log(getResultTask6(2000)); //true
console.log(getResultTask6(1700)); //false
console.log(getResultTask6(1800)); //false
console.log(getResultTask6(100)); //false

// task7
const getResultTask7 = () => {
  for (let year = 2014; year <= 2050; year++) {
    const firstJan = new Date(year, 0, 1);
    if (firstJan.getDay() === 0) {
      return year;
    }
  }
};

console.log(getResultTask7());

// task8
const getResultTask8 = (min, max) => {
  const randomNumber = getRandom(min, max);
  const userInput = prompt();
  const answer = userInput == randomNumber ? 'Good Work' : 'Not matched';
  alert(answer);
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// getResultTask8(1, 10);

// task9
const getResultTask9 = () => {
  const Christmas = new Date(2020, 11, 25);
  const today = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysLeft = (Christmas.getTime() - today.getTime()) / msPerDay;
  return Math.round(daysLeft);
};

console.log(getResultTask9());

// task10
const btnMultiply = document.querySelector('.btn-multiply');
btnMultiply.onclick = (e) => {
  e.preventDefault();
  const number1 = document.querySelector('.number1').value;
  const number2 = document.querySelector('.number2').value;
  document.querySelector('.result-data').innerHTML = number1 * number2;
};

const btnDivide = document.querySelector('.btn-divide');
btnDivide.onclick = (e) => {
  e.preventDefault();
  const number1 = document.querySelector('.number1').value;
  const number2 = document.querySelector('.number2').value;
  number2 == 0
    ? (document.querySelector('.result-data').innerHTML =
        'Division by 0 is prohibited')
    : (document.querySelector('.result-data').innerHTML = number1 / number2);
};

// task11
transformCelToFah = (celsius) => {
  const fahrenheit = Math.round(celsius * (9 / 5) + 32);
  return `${celsius}°C is ${fahrenheit}°F`;
};

transformFahToCel = (fahrenheit) => {
  const celsius = Math.round((fahrenheit - 32) * (5 / 9));
  return `${fahrenheit}°C is ${celsius}°F`;
};

console.log(transformCelToFah(60));
console.log(transformFahToCel(45));

// task12
const getResultTask12 = () => {
  return document.URL;
};

console.log(getResultTask12());

// task13
const getResultTask13 = () => {
  const new_name = 'tania';
  let value = 10000;
  this[new_name] = value;
  console.log(this[new_name]);
};

getResultTask13();

// task14
const getResultTask14 = (str) => {
  return str.split('.')[1];
};

console.log(getResultTask14('test.txt'));

// task15
const getResultTask15 = (number) => {
  return number > 13 ? (number - 13) * 2 : 13 - number;
};

console.log(getResultTask15(2));
console.log(getResultTask15(15));

// task16
const getResultTask16 = (number1, number2) => {
  return number1 === number2 ? Math.pow(number1 * 2, 3) : number1 + number2;
};

console.log(getResultTask16(2, 10));
console.log(getResultTask16(2, 2));

// task17
const getResultTask17 = (number) => {
  return number > 19 ? Math.pow(number - 19, 3) : 19 - number;
};

console.log(getResultTask17(9));
console.log(getResultTask17(21));

// task18
const getResultTask18 = (number1, number2) => {
  return true
    ? number1 === 50 || number2 === 50 || number1 + number2 === 50
    : false;
};

console.log(getResultTask18(50, 3));
console.log(getResultTask18(25, 25));
console.log(getResultTask18(15, 25));

// task19
const getResultTask19 = (number) => {
  if (100 - number <= 20 || 400 - number <= 20) {
    return true;
  }
  return false;
};

console.log(getResultTask19(10), '///19'); //false
console.log(getResultTask19(90), '///19'); //true
console.log(getResultTask19(99)); //true
console.log(getResultTask19(199)); //false
console.log(getResultTask19(200)); //false
//не дошел до меня Math.abc(), вроде как по модулю считает, но нет, возвращает всегда положительные числа...

// task20
const getResultTask20 = (number1, number2) => {
  if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) {
    return true;
  }
  return false;
};

console.log(getResultTask20(50, 3));
console.log(getResultTask20(50, -3));
