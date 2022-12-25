type Status = 'ok' | 'loading' | 'error';

const staticX: Status = 'loading';

function printId(id: number | string): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id)
    }
}

function welcome(person: [string, string] | string): void {
    if(Array.isArray(person)){
        const [firstName, lastName] = person;
        console.log(`Hello ${firstName} ${lastName}`);
    } else {
        console.log(`Hello ${person}`);
    }
}

welcome(['Arthur', 'Darguzhis']);
welcome('Arthur');
