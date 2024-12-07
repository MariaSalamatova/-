function iterate(object, callback) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        callback(key, object[key], object);
      }
    }
  }
  
  const obj = {a: 1, b: 2, c: 3};
  iterate(obj, (key, value) => {
    console.log({key, value});
  });
  // Output:
  // {key: "a", value: 1}
  // {key: "b", value: 2}
  // {key: "c", value: 3}
  
  

  function store(value) {
    return function() {
      return value;
    };
  }
  

  const read = store(5);
  const value = read();
  console.log(value); // Output: 5
  
  

  function contract(fn, ...types) {
    return function(...args) {
    
      for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== types[i]) {
          throw new TypeError('Argument ${i + 1} is a wrong type, waiting for ${types[i]}, but getted ${typeof args[i]}');
        }
      }
  
    
      const result = fn(...args);
      const expectedResultType = types[types.length - 1];
      if (typeof result !== expectedResultType) {
        throw new TypeError('Result is a wrong type, waiting for ${expectedResultType}, but getted ${typeof result}');
      }
  
      return result;
    };
  }
  
 
  const add = (a, b) => a + b;
  const addNumbers = contract(add, 'number', 'number', 'number');
  const res = addNumbers(2, 3);
  console.log(res); // Output: 5
  
 
  try {
    const invalidAddNumbers = contract(add, 'number', 'string', 'number');
    invalidAddNumbers(2, '3');  // Mistake: Argument 2 is a wrong type, waiting for string, but getted number
  } catch (e) {
    console.error(e.message);  // Mistake: Argument 2 is a wrong type, waiting for string, but getted number
  }
