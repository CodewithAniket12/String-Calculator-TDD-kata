export function add(numbers) {
    if (numbers === '') {
        return 0;
    }
  
  
    const numArray = numbers.split(/[,\n]/);
  return numArray.reduce((sum,num)=>sum+parseInt(num),0)
    
}