var NotUser = /** @class */ (function () {
    function NotUser(name) {
        this.name = name;
    }
    return NotUser;
}());
var u = { name: 'Pugal' };
u = new NotUser("Mala");
console.log(u.name);
