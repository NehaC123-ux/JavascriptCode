function findFrequency(a, size) {
  let ans = "";
  for (let i = 0; i < size; i++) {
      let count = 1;
      if (a[i] !== -1) {
          for (let j = i + 1; j < size; j++) {
              if (a[i] === a[j]) {
                  count++;
                  a[j] = -1;
                   
              }
          }
          ans += `${a[i]}=${count},`;
      }
  }
  return ans; 
  
}
console.log(findFrequency([3, 4, 6, 3, 6], 5));    
console.log(findFrequency([2, 4, 2, 6, 3, 6], 6));

