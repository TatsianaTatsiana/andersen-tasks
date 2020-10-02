// find total value of the machines
const findTotalValue = (arr) => {
  let res = 0;
  for (let elem of arr) {
    res += elem.value;
  }
  return res;
};

const inventory = [
  { type: 'machine', value: 5000 },
  { type: 'machine', value: 650 },
  { type: 'duck', value: 10 },
  { type: 'furniture', value: 1200 },
  { type: 'machine', value: 77 },
];

console.log(findTotalValue(inventory), 'sum');

var ids = {
  next: 0,
  get: function () {
    return this.next++;
  },
};

console.log(ids.get(), 'iid1');
// → 0
console.log(ids.get(), 'iid2');
// → 1
/////////////////////////
function startNode(type, value, options) {
  let { sourceValue } = options;
  let o = { type, value, options, src: sourceValue };
  return o;
}

console.log(
  startNode('Identifier', 'foo', {
    sourceProperty: 'src',
    sourceValue: 'bar.js',
  })
);
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}
//////////////////////////
const teamName = 'tooling';
const people = [
  { name: 'Jennie', role: 'senior' },
  { name: 'Ronald', role: 'junior' },
  { name: 'Martin', role: 'senior' },
  { name: 'Anneli', role: 'junior' },
];

let message = (arr) => {
  const qty = arr.filter((elem) => {
    if (elem.role == 'senior') {
      return elem;
    }
  });
  const names = arr.map((elem) => {
    return elem.name;
  });
  return `There are ${arr.length} people on the tooling team. Their names are ${names}. ${qty.length} of them have a senior role.`;
};

console.log(message(people), '///people');
