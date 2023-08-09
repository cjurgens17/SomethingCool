const { expect, toBe, toEqual } = require('@jest/globals');
const reader = require('./reader.js');

test('prints an object to the console', () => {
    // Capture console output
    const originalConsoleLog = console.log;
    const consoleOutput = [];
    console.log = jest.fn((...args) => {
        originalConsoleLog(...args);
        consoleOutput.push(args);
    });

    // Call the method that logs to the console
    reader.print();

    // Restore the original console.log
    console.log = originalConsoleLog;

    // Compare console output to the expected value
    const expectedOutput = [ {name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
    hobbies: ["reading", "coding"],
    family: {
      spouse: {
        name: "Jane",
        age: 28,
      },
      children: [
        { name: "Alice", age: 5 },
        { sister: "Jane", age: 3 },
      ],
    }
}];

    expect(consoleOutput).toEqual([expectedOutput]);
});


test('returns all the layers of an object', () => {
    const originalLayers = reader.layers();
    const expectedLayers = 4;

    expect(originalLayers).toBe(expectedLayers);
    expect(originalLayers).not.toBe(7);

});


test('Find the deepest layer', () => {
    const originalDeep = reader.deepestLayer();
    const expectedDeep = 3;

    expect(originalDeep).toBe(expectedDeep);
});

test('Looking for key within Object', () => {
    const trueHasKey = reader.hasKey('spouse');
    const falseHasKey = reader.hasKey('notPossible');
    const expectedHasKey = true;
    const expectedNotHasKey = false;

    expect(trueHasKey).toBe(expectedHasKey);
    expect(falseHasKey).toBe(expectedNotHasKey);
    
});


test('Looking for Value within Object', () => {
    const trueHasValue = reader.hasValue('Alice');
    const falseHasValue = reader.hasValue('Shrek');
    const expectTrue = true;
    const expectFalse = false;

    expect(trueHasValue).toBe(expectTrue);
    expect(falseHasValue).toBe(expectFalse);
});

test('Return a key or keys given a value and optional arg of amount', () => {
    const keys = reader.getKey('reading');
    const expectKey = ['hobbies'];

    const janeTwo = reader.getKey('Jane',2);
    const janeOne = reader.getKey('Jane');
    const expectSpouseTwo = ['name','sister'];
    const expectSpouseOne = ['name'];
    const name = reader.getKey('Alice');
    const expectName = ['name'];

    expect(keys).toStrictEqual(expectKey);
    expect(janeTwo).toStrictEqual(expectSpouseTwo);
    expect(janeTwo).not.toStrictEqual(expectSpouseOne);
    expect(janeOne).toStrictEqual(expectSpouseOne);
    expect(name).toStrictEqual(expectName);
});

test('Return a value or values given a key and optional arg of amount', () => {
    const values = reader.getValue('age');
    const expectValue = [30];

    const allAges = reader.getValue('age', 5);
    const expectAges = [30,28,5,3];

    const hobbies = reader.getValue('hobbies');
    const expectHobbies = [["reading", "coding"]];

    expect(values).toStrictEqual(expectValue);
    expect(allAges).toStrictEqual(expectAges);
    expect(hobbies).toStrictEqual(expectHobbies);
});

test('Return all nested values associated with a input key', () => {
    const firstProvide = reader.provide('name');
    const expectFirstProvide = {key: ['name' ,'John']};

    expect(firstProvide).toStrictEqual(expectFirstProvide);
});


