export class Reader {
  constructor(object) {
    if (
      typeof object === "object" &&
      object !== null &&
      !Array.isArray(object)
    ) {
      this.object = object;
    } else {
      throw new Error("Is Not of type Object or Null");
    }
  }

  //prints an object to the console
  print(name = "Object") {
    if (typeof name !== "string") {
      throw new Error("Name must be of type string");
    } else {
      console.log("From Reader: " + name.toUpperCase());
      console.log(this.object);
    }
  }

  //counts the total number of nested objects within an object
  layers() {
    if (arguments.length > 0) throw new Error("Arguments not allowed");
    let entries = Object.entries(this.object);
    if (entries.length < 1) return 0;
    //for nested layers
    //sub-procedure
    const goIntoLayer = (object, counter) => {
      let entries = Object.entries(object);
      for (let entry of entries) {
        if (typeof entry[1] === "object") {
          counter = goIntoLayer(entry[1], ++counter);
        }
      }
      return counter;
    };

    //free variables
    let counter = 1;
    //for main/1st layer
    for (let entry of entries) {
      if (typeof entry[1] === "object") {
        counter = goIntoLayer(entry[1], ++counter);
      }
    }
    return counter;
  }

  //returns the deepest layer of an object
  deepestLayer() {
    if (arguments.length > 0) throw new Error("Arguments not allowed");
    let entries = Object.entries(this.object);
    if (entries.length < 1) return 0;
    //for nested layers
    //sub-procedure
    const goIntoLayer = (object, counter, layers) => {
      let entries = Object.entries(object);
      for (let entry of entries) {
        if (typeof entry[1] === "object") {
          counter = goIntoLayer(entry[1], ++counter, ++layers);
        }
      }
      maxDepth = Math.max(maxDepth, layers);
      return counter;
    };

    //free variables
    let counter = 1;
    let maxDepth = 1;
    //for main/1st layer
    for (let entry of entries) {
      if (typeof entry[1] === "object") {
        counter = goIntoLayer(entry[1], ++counter, 1);
      }
    }
    //plus one for parent layer
    return maxDepth > 1 ? maxDepth + 1 : maxDepth;
  }

  //checks object for a key
  hasKey(key) {
    if (arguments.length > 1) throw new Error("Exceeded argument limit");
    let entries = Object.entries(this.object);
    if (entries.length < 1) return false;
    //for nested layers
    //sub-procedure
    const goIntoLayer = (object) => {
      let entries = Object.entries(object);
      for (let entry of entries) {
        if (entry[0] === key) {
          return true;
        }

        if (typeof entry[1] === "object") {
          if (goIntoLayer(entry[1])) {
            return true;
          }
        }
      }

      return false;
    };
    //for main/1st layer
    for (let entry of entries) {
      if (entry[0] === key) {
        return true;
      }

      if (typeof entry[1] === "object") {
        if (goIntoLayer(entry[1])) {
          return true;
        }
      }
    }
    return false;
  }

  //checks object for a specific value
  hasValue(value) {
    if (arguments.length > 1) throw new Error("Exceeded argument limit");
    let entries = Object.entries(this.object);
    if (entries.length < 1) return false;
    //for nested layers
    //sub-procedure
    const goIntoLayer = (object) => {
      let entries = Object.entries(object);
      for (let entry of entries) {
        if (entry[1] === value) {
          return true;
        }

        if (typeof entry[1] === "object") {
          if (goIntoLayer(entry[1])) {
            return true;
          }
        }
      }

      return false;
    };
    //for main/1st layer
    for (let entry of entries) {
      if (entry[1] === value) {
        return true;
      }

      if (typeof entry[1] === "object") {
        if (goIntoLayer(entry[1])) {
          return true;
        }
      }
    }
    return false;
  }
  //returns a key or group of keys from a inputting a specific value within an object. amount is the number of keys looking for
  getKey(value, amount = 1){
    if (arguments.length > 1) throw new Error("Exceeded argument limit");
    let entries = Object.entries(this.object);
    if (entries.length < 1) return 'Associated Value has no key';
    //for nested layers
    //sub-procedure
    const goIntoLayer = (object) => {
      let entries = Object.entries(object);
      for (let entry of entries) {
        if (entry[1] === value) {
          resultingKey = entry[0];
          return;
        }

        if (typeof entry[1] === "object") {
          goIntoLayer(entry[1])
        }
      }
      return;
    };
    let resultingKey;
    //for main/1st layer
    for (let entry of entries) {
      if (entry[1] === value) {
        resultingKey = entry[0];
        return resultingKey;
      }

      if (typeof entry[1] === "object") {
        goIntoLayer(entry[1]);
      }
    }
    return resultingKey === undefined ? 'Associated Value has no key' : resultingKey;
  }
}
