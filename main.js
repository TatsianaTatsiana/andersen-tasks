const container = document.querySelector('.snake-task');

let timer;
const fieldSizeX = 15;
const fieldSizeY = 15;
let directx = (direct = 0); //что значит??

const direction = [
  [0, 1], //вправо
  [1, 0], //вниз
  [0, -1], //влево
  [-1, 0],
]; //вверх

const snake = {
  length: 3,
  body: [
    [1, 1],
    [1, 2],
    [1, 3],
  ],
  initialisationSnake: function () {
    for (let i = 0; i < this.length; i++) {
      const currentBodyPart = this.body[i];
      document.getElementById(currentBodyPart.join()).className = 'snake';
    }
  },
  move: function () {
    direct = directx; /// direct???
    let body = this.body;
    let head = this.body[this.length - 1];
    let headCell = head.map(function (value, index) {
      console.log(value + direction[direct][index], '///headCell');
      return value + direction[direct][index];
    });
    compareEatOrGameOver(headCell, body);
    return headCell;
  },
};

window.addEventListener('keydown', keyHandler, false);

draw(fieldSizeX, fieldSizeY);

function draw(fieldSizeX, fieldSizeY) {
  const table = document.createElement('table');
  for (let j = 0; j <= fieldSizeX; j++) {
    const row = document.createElement('tr');
    table.append(row);

    for (let i = 0; i <= fieldSizeY; i++) {
      const ceil = document.createElement('td');
      ceil.className = 'cell';
      ceil.id = `${j},${i}`;
      row.append(ceil);
    }
  }
  container.append(table);
  snake.initialisationSnake();
  makeFood(fieldSizeX, fieldSizeY);
}

function makeFood(fieldSizeX, fieldSizeY) {
  const coordX = Math.round(Math.random() * (fieldSizeX - 1));
  const coordY = Math.round(Math.random() * (fieldSizeY - 1));
  const food = document.getElementById(`${coordX},${coordY}`);
  food.className === 'cell'
    ? (food.className = 'food')
    : makeFood(fieldSizeX, fieldSizeY);
  return food;
}

function keyHandler(event) {
  switch (event.keyCode) {
    case 37: //стрелка влево
      if (direct != 0) {
        directx = 2;
      }
      break;
    case 39: //стрелка вправо
      if (direct != 2) {
        directx = 0;
      }
      break;
    case 38: //стрелка вверх
      if (direct != 1) {
        directx = 3;
      }
      break;
    case 40: //стрелка вниз
      if (direct != 3) {
        directx = 1;
      }
      break;
    default:
      return;
  }
}

function compareEatOrGameOver(headCell, body) {
  const tmp = document.getElementById(headCell.join());
  if (tmp === null) {
    alert('Game over');
    clearInterval(timer);
    return;
  }
  //if ceil is free, add it to snake body
  if (tmp != null && tmp.className == 'cell') {
    let removeTail = body.shift();
    body.push(headCell);
    document.getElementById(removeTail.join()).className = 'cell';
    document.getElementById(headCell.join()).className = 'snake';
  } else {
    //if ceil is food
    if (tmp != null && tmp.className === 'food') {
      snake.length++;
      body.push(headCell);
      document.getElementById(headCell.join()).className = 'snake';
      makeFood(fieldSizeX, fieldSizeY);
    } else {
      //if ceil is snake
      if (tmp.className === 'snake') {
        clearInterval(timer);
        alert('Game over!');
      }
    }
  }
}

const start = () => {
  timer = setInterval(function () {
    snake.move();
  }, 400);
};

const reset = () => {
  window.location.reload();
};
