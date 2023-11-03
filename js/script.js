const shoppingList = ["Coffee", "Aubergine", "Pizza", "Sushi", "Cheese"];

let newList = [];

let i = removeLastElem(shoppingList, newList);
console.log(shoppingList, newList);
document.getElementById("first-array").innerHTML = shoppingList;
document.getElementById("second-array").innerHTML = newList;

function removeLastElem(array = [], arraytoFill = []){
    
    for(let j = 0; j < array.length - 1; j++){
        arraytoFill[j] = array[j];
    }

    return arraytoFill;
}