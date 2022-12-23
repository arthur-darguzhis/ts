const number = [1, 2, 3, 4, true, 'asdf']


const arr: number[] = [];
const arr2: Array<number> = [];


// interface Car {
//     wheels: number;
//     brand: string;
// }

const car1: Car = {
    wheels: 4,
    brand: 'tesla'
}

const cars: Car[] = [];

cars.push(car1);

// cars.push({
//     wheels: 4,
//     brand: 'tesla',
//     type: 'sedan',
//     isNew: true
// })


const example = [['asdf', 'asdf'], ['fdsa', 'fdsa']]

const arrOfArr: string[][] = [];
arrOfArr.push(['asdf', 'asdf']);
arrOfArr.push(['fdsa', 'fdsa']);


function printArr(arr: unknown[]): void {
    arr.forEach((el, index, array) => {

    })
}
