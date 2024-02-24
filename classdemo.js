class Product {
    constructor(name,price,discount,code){
        this.name=name;
        this.price=price;
        this.discount=discount;
        this.code=code;
    }
}

let pencil= new Product('Apsara',20,10,'AP10');

const Product1= class Product{
    constructor(name,price,discount,code){
        this.name=name;
        this.price=price;
        this.discount=discount;
        this.code=code;
    }
    get getdiscountval(){
        return this.discount;
    }
    set setdiscountVal(value){
        this.discount=value;
    }
    discountVal(){
        return this.discount * this.price / 100;
    }
}

let chair= new Product1('Chair',500,10,'Ch10');
