console.log('hi');

const product = {
    itemName :'Flower',
    price : 50,
    discount : 20,
    itemCode : 'F20'

}

function createProduct(name,price,discount,code){
    return {
        name : name,
        price : price,
        discount : discount,
        code : code
    }
}

const football= createProduct('football', 500, 30, 'F20');

function Product(name,price,discount,code){
    this.name =name;
    this.price=price;
    this.discount=discount;
    this.code= code;
    this.calc = function(){
        return price * discount / 100;
    }
}

const phone= new Product('oneplus',25000,10,'OP20');

