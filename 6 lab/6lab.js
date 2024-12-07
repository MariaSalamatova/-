function pipe(...fns) {
    
    fns.forEach(fn => {
      if (typeof fn !== 'function') {
        throw new Error('All arguments must be funcions');
      }
    });
  

    return (x) => fns.reduce((value, fn) => fn(value), x);
  }
  
  
  function fpipe(...fns) {
    let errorHandlers = [];
  

    fpipe.on = function(event, handler) {
      if (event === 'error') {
        errorHandlers.push(handler);
      }
    };
  

    fns.forEach(fn => {
      if (typeof fn !== 'function') {
        throw new Error('All arguments must be functions');
      }
    });
  

    return (x) => {
      let result = x;
      for (let i = fns.length - 1; i >= 0; i--) {
        try {
          result = fns[i](result);
        } catch (e) {
          errorHandlers.forEach(handler => handler(e));
          return undefined;
        }
      }
      return result;
    };
  }
  

  const inc = x => ++x;
  const twice = x => x * 2;
  const cube = x => x ** 3;

  const fPipe = pipe(inc, twice, cube);
  console.log(fPipe(5)); // (5 + 1) * 2 = 12, 12^3 = 1728, => 1728
  
  
  const fRightPipe = fpipe(cube, twice, inc);
  console.log(fRightPipe(5)); // cube(twice(inc(5))) => cube(twice(6)) => cube(12) = 1728, => 1728
  
  const fWithError = fpipe(
    x => { throw new Error("Mistake in first function!"); },
    inc
  );
  
 
  fWithError.on('error', e => {
    console.error("Mistake: " + e.message);
  });
  
  const errorResult = fWithError(5);
  console.log(errorResult);

  try {
    const fInvalid = pipe(inc, 7, cube);
  } catch (e) {
    console.error(e.message);
  }
