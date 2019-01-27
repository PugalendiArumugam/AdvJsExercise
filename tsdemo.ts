interface User{
    name:string;
}

class NotUser {
    constructor(public name:string) { }
}

let u:User = {name : 'Pugal'}

u = new NotUser("Mala");

console.log(u.name);