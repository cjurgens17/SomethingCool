# Reader - npm install object-helper-reader
### Official Repo for object-helper-reaper

### Methods
- print() <br>
  -prints an object to the console
  <br>
- provide(key)<br>
   -takes a key and returns the including key along with any nesting inside that key <br>
- hasKey(key)<br>
  -returns a boolean if a key exist on any layer of an object<br>
- hasValue(value)<br>
  -returns a Boolean if a value exist in any layer of an object and its keys<br>
- getKey(value,amount)<br>
   -takes a value, and an optional argument which is defaulted to one, and returns the key associated with the value in the form of an array<br>
- getValue(key,amount)<br>
   -takes a key, and an optional argument which is defaulted to one, and returns the value associated with the key in the form of an array.<br>

  ### `example.js` provides a look at all the functions being implmented for the Reader class.

  ### Test Case Coverage is 100%. See test's at `./test/reader.test.js`

