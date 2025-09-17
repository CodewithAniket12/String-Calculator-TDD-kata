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
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}