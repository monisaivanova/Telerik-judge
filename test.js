let arr = ['1', '*', '2', 'b', '0'];
arr = arr.filter((x) => x !== 'b').join('');
console.log(arr);
