export function add(numbers) {
    if (numbers === '') {
        return 0;
    }
  
    const numArray = numbers.split(',');
    if (numArray.length === 1){
        return parseInt(numbers);
    }
return parseInt(numArray[0])+parseInt(numArray[1]);
}