type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2;

type Union5 = {a: string, b: string, c: number} & {a: string, t: boolean, z: null}

const sample: Union5 = {

}


type User = {
    readonly email: string,
    readonly login: string,
    password: string,
}

type Person = {
    readonly firstName: string,
    readonly lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

type Employee = {
    experienceInYears: number,
    say(word?: string): void,
    code?: (arg: string) => void,
} & User & Person

const employee: Employee = {

}

export default User;
