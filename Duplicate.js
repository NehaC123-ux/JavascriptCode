function findDuplicates(size, arr) {
  // Only change code below this line
  const duplicate=[];
  for(let i=0; i <size; i++){
    let count =1;
    if(arr[i]!==-1){
      for(let j=i+1; j < size; j++){
        if(arr[i]===arr[j]){
          count+=1;
          arr[j]=-1
        }
      }
    }
    if(count>1){
      duplicate.push(arr[i]);
    }
    
      }
  return duplicate.join(' ');
  // Only change code above this line
}
console.log((findDuplicates(5, [2, 4, 2, 6, 3]))); 
console.log((findDuplicates(6, [2, 4, 6, 3, 3, 2]))); 