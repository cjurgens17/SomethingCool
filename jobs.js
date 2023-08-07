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

let oneLayer = {
    name: 'chris'
}

let test = new Reader(data);
test.print();
let layers = test.layers();
let max = test.deepestLayer();
let test2 = new Reader(oneLayer);
console.log(layers);
console.log(max);

console.log(test2.deepestLayer());
console.log(test2.layers());





