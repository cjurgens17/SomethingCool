import  { State, Type, Service }  from './services/index.mjs';


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

