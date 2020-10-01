// task DOM
let container = document.querySelector('.dom-task');
let table = document.createElement('table');
let btn = document.createElement('button');
let rowQty = prompt('Row quantity:') || 10;
let cellQty = prompt('Cell quantity:') || 10;

const renderLayout = () => {
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
  container.append(table, renderBtn());
  table.onclick = changeColorCell;
};

const renderBtn = () => {
  btn.textContent = 'Change color';
  btn.onclick = changeColorBtn;
  return btn;
};

const changeColorBtn = () => {
  Array.from(table.children).forEach((tr) => {
    for (let td of tr.children) {
      td.style.backgroundColor == 'rgb(0, 0, 0)'
        ? (td.style.backgroundColor = '#fff')
        : (td.style.backgroundColor = '#000');
    }
  });
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

renderLayout();

// task22 unique values of 2 arrays
const getResultTask22 = (arr1, arr2) => {
  const uniqValuesArr1 = getUniqNumbers(arr1);
  const uniqValuesArr2 = getUniqNumbers(arr2);
  const unionArrays = uniqValuesArr1.concat(uniqValuesArr2);
  return Array.from(new Set(unionArrays));
};

const getUniqNumbers = (arr) => {
  return Array.from(new Set(arr));
};

console.log(getResultTask22([1, 2, 3, 7, 3, 10, 10], [4, 9, 10]));

// task23 difference of 2 arrays
const getResultTask23 = (arr1, arr2) => {
  return filterArray(arr1, arr2).concat(filterArray(arr2, arr1));
};

const filterArray = (arr1, arr2) => {
  let newArray = arr1.filter((elem) => {
    if (!arr2.includes(elem)) {
      return elem;
    }
  });
  return newArray;
};

console.log(getResultTask23([1, 2, 3], [100, 2, 1, 10]));

// task24 difference of 2 arrays
const getResultTask24 = (arr, ...values) => {
  for (let index in arr) {
    if (arr.includes(values[index])) {
      let deleteIndex = arr.indexOf(values[index]);
      arr.splice(deleteIndex, 1);
      return arr;
    }
  }
};

console.log(
  getResultTask24(
    [1, 2, 3, 'null'],
    'null',
    '0',
    '',
    'false',
    'undefined',
    'NaN'
  )
);

// task26 difference of 2 arrays
const getResultTask26 = (arr, n) => {
  for (let index in arr) {
    if (arr[index] + arr[Number(index) + 1] == n) {
      let index2 = Number(index) + 1;
      return `${index}, ${index2}`;
    }
  }
};

console.log(getResultTask26([10, 20, 10, 40, 50, 60, 70], 50));

// task27
const getResultTask27 = (arr) => {
  return arr.filter((elem) => {
    return elem > 0 || elem < 0;
  });
};

console.log(getResultTask27([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// task28 longest common starting substring
const getResultTask28 = (arr) => {
  const [first] = arr;
  const [, second] = arr;
  return second.includes(first) ? first : 'not found';
};

console.log(getResultTask28(['go', 'google']));

// task31
const getResultTask31 = (arr, n) => {
  return arr.filter((elem) => {
    return elem != n;
  });
};

console.log(getResultTask31([2, 5, 9, 6], 5));

// task32
const getResultTask32 = (arr, n) => {
  return arr.some((elem) => {
    return elem == n;
  }); // аналог include
};

console.log(getResultTask32([2, 5, 9, 6], 5));

// task33
const getResultTask33 = (arr) => {
  // arr.splice(0, arr.length);
  // return arr; ////variant1
  // arr.length = 0;
  // return arr; ////variant2
  while (arr.length) {
    arr.pop();
  }
  return arr;
};

console.log(getResultTask33([2, 5, 9, 6]));

// task36
const getResultTask36 = (qty, n) => {
  let result = [];
  for (let i = 0; i < qty; i++) {
    result.push(n);
  }
  return result;
};

console.log(getResultTask36(6, 0));

// task39
const getResultTask39 = (arr) => {
  let elemToRemove = ['', false, null, 0]; //почему если массив будет [false, null, 0, ''], то пустая строчка не удалается, он до нее не доходит
  let filteredArr = arr.filter((elem, index) => {
    console.log(elemToRemove[index], 'elem from elemToRemove'); //здесь нет пустой строчки, если ее поставить последним элементом в elemToRemove
    if (arr.includes(elemToRemove[index])) {
      return elem != elemToRemove[index];
    }
  });
  return filteredArr;
};
console.log(getResultTask39([58, '', 'abcd', true, null, false, 0]));

// task40
const getResultTask40 = (start, len) => {
  let res = [];
  let i = start;
  while (res.length < len) {
    res.push(i);
    i++;
  }
  return res;
};

console.log(getResultTask40(-1, 6));

// task41
const getResultTask41 = (start, end) => {
  let result = [];
  let i = start;
  while (i <= end) {
    result.push(i);
    i++;
  }
  return result;
};

console.log(getResultTask41(-1, 5));
