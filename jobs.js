import  { State, Type, Service, Reader }  from './services/index.mjs';


function createJobs(types){
    let data =  types.map((type) => {
            let newType = new Type(type);
            newType.enterPrice(newType, parseInt(Math.random() * 500));
            let newService = new Service(newType, 'New York');
            let newState = new State(newService, false);
            return newState;
    });
    return data;
}

let jobs = ['Opening', 'Closing', 'Power-Vacuum', 'Liner Install', 'Pool Build', 'Filter Service'];

const allStates = createJobs(jobs);
allStates.forEach((state) => {
    console.log('state: ', state);
});


let data = {
name: 'chris',
lastName:'Jurgens',
age: 27,
occupation: 'Developer',
info: {
    color: 'white',
    height: 'tall',
    moreInfo: {
        sex: 'male',
        guy: 'male',
        ID: 1234,
        evenMore: {
            howMuch: 'a lot'
        }
      }
},
layers: {
    more: 'info',
    info: {
        more: 'pokemon',
        seven: {
            number: 7
        }
    }
}
}


let test = new Reader(data);
// console.log(test.hasKey("nothing"));
// console.log(test.hasKey("name"));
// console.log(test.hasKey("seven"));
// console.log(test.hasKey("number"));
// console.log(test.hasKey("sex"));
// console.log(test.hasKey("evenMore"));
// console.log('values');
// console.log(test.hasValue('name'));
// console.log(test.getKey('pokemon'));
// console.log(test.getKey(7));
// console.log(test.getKey('Developer'));
// console.log(test.getKey('male', ));
// console.log(test.getValue('more'));
let layers = test.provide('layers');







