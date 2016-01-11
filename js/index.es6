import {Rabbit} from "./rabbit.es6";
import {Wolf} from "./wolf.es6";

let bunny = new Rabbit("Bunny");
let wolf = new Wolf("Sirko");

bunny.say();
wolf.say();

['a', 'b', 'c', 'd'].forEach( e => {
    console.log('boom', e);
})
