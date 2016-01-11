import {Animal} from './animal.es6';

export class Rabbit extends Animal{
    constructor(name){
        super(name);
    };

    say(){
        super.say();
        console.log(`hrum-hrum`);
    };
};
