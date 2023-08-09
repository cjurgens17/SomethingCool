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
console.log(layers);







