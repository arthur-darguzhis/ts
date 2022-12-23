type MyBoolean = false | true;

const a: MyBoolean = true;

type Pair = [string, string];
type Pairs = Pair[];

const collection: Pairs = [];
collection.push(['asdf', 'asdf'])
collection.push(['asdf', 'asdf'])
collection.push(['asdf', 'asdf'])
collection.push(['asdf', 'asdf'])

type DiffCar = {
    wheels: number;
    brand: string;
    type: string;
    isNew: boolean;
    name?: string;

    [key: string]: unknown;
}
