function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  
 
  function removeElements(array, ...items) {
    items.forEach(item => {
      let index;
      while ((index = array.indexOf(item)) !== -1) {
        array.splice(index, 1);
      }
    });
  }
  

  function unique(array) {
    return [...new Set(array)];
  }
  

  function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
  }
  
 
  const array1 = [1, 2, 3, 4, 3, 5, 7];
  removeElement(array1, 5);
  console.log(array1); // [1, 2, 3, 4, 3, 7]
  

  const array2 = [1, 2, 3, 4, 5, 6, 7];
  removeElements(array2, 5, 1, 6);
  console.log(array2); // [2, 3, 4, 7]
  
 
  const result1 = unique([2, 1, 1, 3, 2]);
  console.log(result1); // [2, 1, 3]
  
  const result2 = unique(['top', 'bottom', 'top', 'left']);
  console.log(result2); // ['top', 'bottom', 'left']
  
  
  const array3 = [7, -2, 10, 5, 0];
  const array4 = [0, 10];
  const result3 = difference(array3, array4);
  console.log(result3); // [7, -2, 5]