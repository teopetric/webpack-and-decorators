import { print } from './myModule';

interface Cake {
    topping: string;
    bake(): void;
}

class Cake implements Cake {
    public topping = '';

    public bake() {
        console.log('simple cake');
    }
}

class Decorator implements Cake {
    public topping: string;
    public cake: Cake;

    constructor(cake: Cake) {
        this.cake = cake;
        this.topping = cake.topping;
    }

    public bake() {
        this.cake.bake();
    }
}

class ChocolateCakeDecorator extends Decorator {
    public topping = 'chocolate';

    public bake() {
        super.bake();
        console.log('chocolate topping');
    }
}

class StrawberryCakeDecorator extends Decorator {
    public topping = 'strawberry';

    public bake() {
        super.bake();
        console.log('strawberry topping');
    }
}
//---------------------------------------------
// Gang of Four Design patterns
// Singleton
// Decorator resources:
// https://www.youtube.com/watch?v=WPOLDEk1LF0
// https://refactoring.guru/design-patterns/decorator/typescript/example

const basicCake = new Cake();

const myChocolateCake = new ChocolateCakeDecorator(basicCake);

const myStrawberryCake = new StrawberryCakeDecorator(myChocolateCake);

console.log(myStrawberryCake);