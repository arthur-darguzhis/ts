type User = {
    name: string,
    displayName: string | null,
}

type Userr = {
    name: string,
    displayName: string | null,
}

const u: Userr = {name: 'Arthur', displayName: 'pingvin'}

function assertDisplayName(user: User): asserts user is User & { displayName: string } {
    if (!user.displayName) {
        throw new Error('User has no displayName');
    }
}

function logUserByDisplayName(user: User) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}

logUserByDisplayName(u);


