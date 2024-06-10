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

const fan = {
    color: 'black',
    type: 'standing',
    isRechargable: false,
    noOfBlades: 3,
    adjustableHeight: true,
}


const television = {}
television['type'] = 'flatscreen';
television['size'] = 55;
television['color'] = 'silver';
television['make'] = 'StartTimes';


// console.log(table.isFoldable);

table['colorOfLegs'] = 'grey';
table['weight'] = 1.2;

// console.log(table.noOfLegs + " " + table.color + " " + table.weight);

const allObjects = {}

for (items in table){
    // console.log(table[items]);
    allObjects[items] = table[items]
}

console.log('\n\n')
for (properties in fan)
    // console.log(fan[properties]);
allObjects[properties] = fan[properties]

console.log('\n\n')


for (things in television)
    // console.log(television[things]);
allObjects[things] = television[things]

console.log(allObjects);


