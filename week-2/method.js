// map, filter


// ** ma
//problem: given an array give me back a new array in which which every value is multiply by 2
// [1, 2, 3, 4, 5] => [2, 4, 6, 8, 10]

const arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.map((value) => value * 2);
// console.log(arr2);

function fn(i) {
    return i * 2;
}
// create a map funcion that takes 2 inputs,  an array and a trnaformation callback/fn and transforms the array into a new one using the trnasformation fn
function myMap(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

// const finalArr = myMap(arr1, fn);
// console.log(finalArr);

// ** filter
// [1, 2, 3, 4, 5] => [2, 4] => give me all even value

const arr3 = [1, 2, 3, 4, 5];

// const filterArr = arr3.filter((value) => value % 2 === 0);
// console.log(filterArr);

// my way
function fn2(value) {
    return value % 2 === 0;
}

function myFilter(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// const finalArr2 = myFilter(arr3, fn2);
// console.log(finalArr2);
