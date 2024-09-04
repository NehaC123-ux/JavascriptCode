function countDigits(number) {
  let sum = 0;
  for(let i=0; number>=i; i++){
     number = Math.floor(number/10);
     sum++;
  
  }
   return sum;
  }
  
  console.log(countDigits(456));
  console.log(countDigits(0));
  console.log(countDigits(987654321));