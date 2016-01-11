import {Animal} from './animal.es6';

export class Wolf extends Animal{
    constructor(name){
        super(name);
    };

    say(){
        super.say();
        console.log(`auuuuu`);
    };
};;
