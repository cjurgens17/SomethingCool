export class Reader {
    constructor(object){
        if(typeof object === 'object' && object !== null && !Array.isArray(object)){
            this.object = object;
        }else{
            throw new Error('Is Not of type Object or Null');
        }
    }

    //prints an object to the console
    print(name = 'Object'){
        if(typeof name !== 'string'){
            throw new Error('Name must be of type string');
        }else{
            console.log('From Reader: '+ name.toUpperCase());
            console.log(this.object);
        }
    }

    //counts the total number of nested objects within an object
    layers(){
        if(arguments.length > 0) throw new Error('Arguments not allowed');
        let entries = Object.entries(this.object);
        if(entries.length <1) return 0;
        //for nested layers
        //sub-procedure
        const goIntoLayer = (object, counter) => {
            let entries = Object.entries(object);
            for(let entry of entries){
                if(typeof entry[1] === 'object'){
                    counter = goIntoLayer(entry[1], ++counter);
                }
            }
            return counter;
        }
        
        //free variables
        let counter = 1;
        //for main/1st layer
        for(let entry of entries){
            if(typeof entry[1] === 'object'){
                counter = goIntoLayer(entry[1], ++counter); 
            }
        }
        return counter;
    }

    //returns the deepest layer of an object
    deepestLayer(){
        if(arguments.length > 0) throw new Error('Arguments not allowed');
        let entries = Object.entries(this.object);
        if(entries.length <1) return 0;
        //for nested layers
        //sub-procedure
        const goIntoLayer = (object, counter, layers) => {
            let entries = Object.entries(object);
            for(let entry of entries){
                if(typeof entry[1] === 'object'){
                    counter = goIntoLayer(entry[1], ++counter, ++layers);
                }
            }
            maxDepth = Math.max(maxDepth,layers);
            return counter;
        }
        
        //free variables
        let counter = 1;
        let maxDepth = 1;
        //for main/1st layer
        for(let entry of entries){
            if(typeof entry[1] === 'object'){
                counter = goIntoLayer(entry[1], ++counter,1); 
            }
        }
        //plus one for parent layer
        return maxDepth > 1 ? maxDepth + 1 : maxDepth;
    }


}