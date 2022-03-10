class Animal{
    constructor(name){
        this.name=name;
    }
    get_message(){
        return "hello";
    }
}

Animal.prototype.age=10;

const dave=new Animal("jaehyun");
console.log(dave.hasOwnProperty("age"));