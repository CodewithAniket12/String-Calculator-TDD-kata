export function add(numbers) {
  if (numbers === '') {
    return 0;
  }
  
  let delimiter = /[,\n]/;
  if (numbers.startsWith('//')) {
    delimiter = numbers[2];
    numbers = numbers.substring(numbers.indexOf('\n') + 1);
  }

  const numArray = numbers.split(delimiter);
   const negatives = numArray.filter(num => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives[0]}`);
  }
  
  
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
 