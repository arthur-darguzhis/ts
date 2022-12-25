interface Car {
    wheels: number;
    brand: string;
    type: string;
    isNew: boolean;
    name?: string;

    [key: string]: unknown;
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan,',
    isNew: true,
}

car.go = true;


car.brand = '10';
