type Fish = { swim: () => void }
type Bird = { fly: () => void, swim: () => void }

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim()
    }
}

function isFish(per: Fish | Bird): per is Fish {
    return (per as Fish).swim !== undefined;
}


const b: Bird = {
    fly: () => {},
    swim: () => {}
};

isFish(b);
