function sum(a: number, b: number): number {
    return a + b;
}
const sum2 = (a: number, b: number): number => a + b;

sum(5, 5);

function log(name: string, userId: number = 0): void {
    console.log(`Hello ${name} your id is: ${userId}`);
}

log('Arthur')

function crash(): never {
    throw new Error('some error')
}

function average(...args: number[]): number {
    const sum = args.reduce((sum, num) => sum + num);
    return sum / args.length;
}

average(5, 10, 23)
