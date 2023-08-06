export class Service {
    constructor(type, location){
        this.type = type;
        this.location = location;
    }
 }

 Service.prototype.update = function(type, location){
    let newService = new Service(type, location);
    return newService;
 }