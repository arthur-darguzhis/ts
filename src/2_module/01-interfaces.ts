interface User {
    readonly email: string,
    readonly login: string,
    password: string,
}

interface Person {
    readonly firstName: string,
    readonly lastName: string,
    phone?: string,
    yearOfBirth?: number,
}


interface Employee extends User, Person {
    experienceInYears: number,
    say(word?: string): void,
    code?: (arg: string) => void,
}

const firstEmployee: Employee = {

}

export default firstEmployee;
