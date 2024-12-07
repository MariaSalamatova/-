function seq(...args) {
    let result = undefined;
  
    function chain(value) {
      result = value !== undefined ? value : result;
  
      for (let fn of args) {
        result = fn(result);
      }
  
      return chain;
    }
  

    if (args.length > 0 && typeof args[0] === 'number') {
      return chain(args[0])();
    }
  
    return chain;
  }
  

  const seqResult1 = seq(
    x => x + 2,
    x => x * 3
  )(5); // (5 + 2) * 3 = 21
  console.log(seqResult1); // 21
  
  const seqResult2 = seq(
    x => x + 2,
    x => x * 3
  )(10); // (10 + 2) * 3 = 36
  console.log(seqResult2); // 36


  function aggaru() {
    let arr = [];
  

    return {
      push: function(value) {
        arr.push(value);
        return this;
      },
      pop: function() {
        return arr.pop();
      },
      get: function(i) {
        return arr[i];
      },
      size: function() {
        return arr.length;
      }
    };
  }
  
  const a = aggaru();
  a.push(10).push(20).push(30);
  console.log(a.get(1));  // 20
  console.log(a.size());  // 3
  console.log(a.pop());   // 30
  console.log(a.size());  // 2
