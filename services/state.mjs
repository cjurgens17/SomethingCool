export class State {
    constructor(service, resolved){
        this.service = service;
        this.resolved = resolved;
    }

    updateResolved(status){
        this.resolved = status;
    }

    chargeAccount(){
        if(this.status === true){
            console.log('Account charged.')
        }else{
            console.log('Jobn status is still in work.');
        }
    }
 }

