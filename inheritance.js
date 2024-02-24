class Product {
    constructor(name,price,discount,code){
        this.name=name;
        
    }

    getitemName(){
        return this.name + " is a Product";
    }
}

class Furniture extends Product{
    constructor(name){
        super(name);
    }

    getitemName(){
        return this.name+" is a Furnitutre";
    }
}

let pencil= new Product('Apsara');
let chair= new Furniture('Chair');