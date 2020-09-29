// task1
const getResultTask1 = (instance) => {
  return instance instanceof Array;
  //return Array.isArray(instance); variant2
};

console.log(getResultTask1('abcd'));
console.log(getResultTask1([1, 2, 3]));

// task2
const getResultTask2 = (arr) => {
  // return arr.slice(); variant2
  // return [].concat(arr); variant3
  // let copyArr = [];
  // for (let elem of arr) {
  //   copyArr.push(elem);
  // }
  // return copyArr; variant 4
  return arr.map((elem) => {
    return elem;
  });
};

console.log(getResultTask2([1, 2, 3, 6]));

// task3
const getResultTask3 = (...args) => {
  if (args.length < 2) {
    const [res] = args[0];
    return res;
  }
  if (args[0].length === 0 || args[1] < 0) {
    return [];
  }
  return args[0].slice(0, args[1]);
};

console.log(getResultTask3([1, 2, 3, 6]));
console.log(getResultTask3([9, 9], -2));
console.log(getResultTask3([], 2));
console.log(getResultTask3([1, 2, 3, 6], 6));

// task4
const getResultTask4 = (...args) => {
  if (args.length < 2) {
    const [res] = args[0].reverse();
    return res;
  }
  if (args[0].length === 0 || args[1] < 0) {
    return [];
  }
  return args[0].slice(-args[1]);
};

console.log(getResultTask4([1, 2, 3, 6]), 'm1');
console.log(getResultTask4([9, 9], -2), 'm2');
console.log(getResultTask4([1, 2, 3, 6], 9), 'm3');

// task5
const getResultTask5 = (arr) => {
  return arr.join('+');
};

console.log(getResultTask5([1, 2, 3, 6]));

// task6
const getResultTask6 = (n) => {
  let result = '';
  let odd = false;
  for (let elem of String(n).split('')) {
    if (Number(elem) % 2 === 0) {
      if (odd === true) {
        result += '-' + elem;
      } else {
        odd = true;
        result += elem;
      }
    }
    if (Number(elem) % 2 !== 0) {
      result += elem;
      odd = false;
    }
  }
  return result;
};

console.log(getResultTask6(423568));

// task7
const getResultTask7 = (arr) => {
  const sortedArray = [];
  let max;
  while (arr.length > 0) {
    max = Math.min.apply(null, arr);
    sortedArray.push(max);
    arr = arr.filter((item) => item !== max);
  }
  return sortedArray;
};

console.log(getResultTask7([3, 8, 7, 6, 5]));

// task8
const getResultTask8 = (arr) => {
  const result = {};
  let repeats;
  let value;
  for (let elem of arr) {
    if (Object.keys(result).includes(String(elem))) {
      result[elem] += 1;
      repeats = result[elem];
      value = elem;
    } else {
      result[elem] = 1;
    }
  }
  return `${value}: ${repeats} times`;
};

console.log(getResultTask8([3, 3, 3, 8, 3, 6, 5]));

// task9
const getResultTask9 = (str) => {
  let result = '';
  for (let elem of str) {
    const transformedLetter =
      elem === elem.toLowerCase() ? elem.toUpperCase() : elem.toLowerCase();
    result += transformedLetter;
  }
  return result;
};

console.log(getResultTask9('aBCc'));

// task10
const getResultTask10 = (arr) => {
  for (let index in arr) {
    console.log('row ' + index);
    for (let elem of arr[index]) {
      console.log(elem);
    }
  }
};

console.log(
  getResultTask10([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ])
);

// task12
const getResultTask12 = (arr) => {
  return `Results: ${sum(arr)}, ${multiply(arr)}`;
};

const sum = (arr) => {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
};

const multiply = (arr) => {
  let mult = 1;
  for (let elem of arr) {
    mult *= elem;
  }
  return mult;
};

console.log(getResultTask12([1, 2, 3, 5]));

// task14
const getResultTask14 = (arr) => {
  let newArr = [];
  for (let elem of arr) {
    if (newArr.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  }
  return newArr;
};

console.log(getResultTask14([1, 2, 3, 9, 1, 5]));

// task15
let color = ['Blue ', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow '];
let order = ['th', 'st', 'nd', 'rd'];

const getResultTask15 = (n) => {
  const order = getOrder(n);
  const color = getColor(n);
  return `${n}${order} choice is ${color}`;
};

const getOrder = (n) => {
  if (n == 1) {
    return order[1];
  }
  if (n == 2) {
    return order[2];
  }
  if (n == 3) {
    return order[3];
  }
  if (n > 4) {
    return order[0];
  }
};

const getColor = (n) => {
  for (let index = 1; index < color.length; index++) {
    if (n == index) {
      return color[index - 1];
    }
  }
};

console.log(getResultTask15(8), '///myres');
