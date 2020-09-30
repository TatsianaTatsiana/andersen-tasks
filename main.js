// task DOM
let table = document.createElement('table');
let colorTableChanged = false;
let rowQty = prompt('Row quantity:');
let cellQty = prompt('Cell quantity:');

const renderTable = () => {
  for (let i = 1; i <= rowQty; i++) {
    const row = document.createElement('tr');
    table.append(row);
    for (let i = 1; i <= cellQty; i++) {
      let cell = document.createElement('td');
      addAttributes(cell, {
        width: '28px',
        height: '28px',
      });
      row.append(cell);
    }
  }
  let btn = document.createElement('button');
  btn.textContent = 'Change color';
  btn.onclick = changeColorBtn;
  let container = document.querySelector('.dom-task');
  container.append(table, btn);
  table.onclick = changeColorCell;
};

const changeColorBtn = () => {
  console.log(colorTableChanged, '///colorTableChanged before');
  colorTableChanged
    ? (table.style.backgroundColor = '#000')
    : (table.style.backgroundColor = '#fff');
  colorTableChanged = !colorTableChanged;
  console.log(colorTableChanged, '///colorTableChanged after');
};

const changeColorCell = (e) => {
  e.target.style.backgroundColor = '#000';
};

addAttributes = (cell, attrs) => {
  for (let key in attrs) {
    cell.setAttribute(key, attrs[key]);
  }
  cell.style.border = '1px solid #000';
};

renderTable();

// task18 binarySearch
const getResultTask18 = (arr, n) => {
  let first = 0;
  let last = arr.length - 1;
  let position = -1;
  let middle;
  let found = false;

  while (first <= last && found === false) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] == n) {
      found = true;
      position = middle;
    }
    if (arr[middle] > n) {
      last = middle - 1;
    }
    if (arr[middle] < n) {
      first = middle + 1;
    }
  }
  return position;
};

console.log(getResultTask18([1, 2, 3, 7], 7));

// task19 sum of arrays
const getResultTask19 = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return sumQualArrays(arr1, arr2);
  }
  if (arr1.length != arr2.length) {
    const longestArr = arr1.length > arr2.length ? arr1 : arr2;
    const shortestArr = arr1.length < arr2.length ? arr1 : arr2;
    const longestArrCut = longestArr.slice(0, shortestArr.length);
    const tail = longestArr.slice(shortestArr.length);
    const sum = sumQualArrays(shortestArr, longestArrCut);
    return sum.concat(tail);
  }
};
const sumQualArrays = (arr1, arr2) => {
  return arr1.map((elem, index) => {
    return elem + arr2[index];
  });
};

console.log(getResultTask19([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
console.log(getResultTask19([1, 6], [2, 3]));

// task20 duplicates in array
const getResultTask20 = (arr) => {
  let obj = {};
  for (let elem of arr) {
    Object.keys(obj).includes(String(elem))
      ? (obj[elem] += 1)
      : (obj[elem] = 1);
  }
  return findDuplicates(obj);
};

const findDuplicates = (obj) => {
  let result = [];
  for (let key in obj) {
    if (obj[key] >= 2) {
      result.push(key);
    }
  }
  return result;
};

console.log(getResultTask20([1, 0, 2, 3, 2, 4, 4]));

// 4 link of tasks
// task1 factorial
const getResultTask1 = (n) => {
  if (n <= 1) {
    return n;
  }
  return n * getResultTask1(n - 1);
};

console.log(getResultTask1(5));
console.log(getResultTask1(0));

// task3 numbers between start and end
const getResultTask3 = (start, end) => {
  let res = [];
  for (let i = start + 1; i < end; i++) {
    res.push(i);
  }
  return res;
};

console.log(getResultTask3(2, 5));

// task4 numbers between start and end
const getResultTask4 = (arr) => {
  let sum = 0;
  arr.forEach((elem) => {
    return (sum += elem);
  });
  return sum;
};

console.log(getResultTask4([1, 2, 3, 4, 5, 6])); //21

// task6 fibonacci
const getResultTask6 = (n) => {
  if (n <= 1) {
    return [0, 1];
  } else {
    const res = getResultTask6(n - 1) + getResultTask6(n - 2);
    return res.split(',');
  }
};

console.log(getResultTask6(2));
console.log(getResultTask6(1));

// task7 even or not
const getResultTask7 = (n) => {
  return n % 2 != 0;
};

console.log(getResultTask7(2));
console.log(getResultTask7(1));

// task8 sort
const getResultTask8 = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
};

console.log(getResultTask8([34, 7, 23, 32, 5, 62]), '//res1');
