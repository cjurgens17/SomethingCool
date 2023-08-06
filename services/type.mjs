export class Type {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

     name(){
        return this.name;
    }
 }

 Type.prototype.enterPrice = function(type,quote){
    type.price = quote;
    return type;
 }