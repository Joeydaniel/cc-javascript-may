// Inpute section
let itemCost = Number(prompt('type in the price of the item'));
// alert(typeof itemCost)

let moneyPaid = Number(prompt('type in the amount paid'));
let change;

// Processing section
change = moneyPaid - itemCost;

// output section
// if the price of the item is --- and the money paid is ---, then the change is ---
alert('if the price of the item is ' + itemCost + ' and the money paid is ' + moneyPaid + ' then the change is ' + change);