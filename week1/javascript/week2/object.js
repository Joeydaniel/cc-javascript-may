// const date = new Date();
// console.log(date);

// const month = ['January', 'February', 'March', 'April', 'May', 'June']
// console.log(date.getDay + date.getMonth + date.getFullYear)

const table = {
    noOfLegs: 4,
    color: 'white',
    material: 'plastic',
    isFoldable: true,
    height: 0.7,
}

console.log(table.isFoldable);

table['colorOfLegs'] = 'grey';
table['weight'] = 1.2;

console.log(table.noOfLegs + " " + table.color + " " + table.weight);