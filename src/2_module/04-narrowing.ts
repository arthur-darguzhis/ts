function example1(x?: number | string) {
    if (typeof x === "string") {
        x.toUpperCase();
    } else if (typeof x === "number") {
        x.toFixed()
    } else if (typeof x === undefined) {
        console.log('no value')
    }
}

function example2(strs: string | string[] | null) {
    if (typeof strs === "object") {

    }

    if (strs && Array.isArray(strs)) {
        strs.
    }
}


type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird){
    if('swim' in animal){
        return animal.swim()
    }
}


export default Fish;
























