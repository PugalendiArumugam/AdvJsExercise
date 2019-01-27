class Toppings {
    constructor(toppings) {
        this.toppings = Array.isArray(toppings) ? toppings : [];
    }
    outputList(){
        this.toppings
        .forEach(
            (topping,i) => console.log(topping, i + '/' + this.toppings.length)
        );
    }
}
var ctrl = new Toppings(['cheese','lettuce','tofu','pickles']);
console.log(ctrl.outputList());