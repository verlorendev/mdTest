export class Animal{
    constructor(name){
        this.name = name;
    };

    say(){
        let name = this.name
        console.log(`Animal ${this.name} say:`);
    };
};
