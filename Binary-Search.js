// recursive
const arr = [1, 2, 5, 6, 10, 12, 13];
const recursiveBinarySearch = (arr, key, start, end) => {
    if (start > end) {
        return -1;
    }
    const middleIndex = ((start + end) / 2) | 0;
    if (arr[middleIndex] > key) {
        return recursiveBinarySearch(arr, key, start, middleIndex - 1);
    } else if (arr[middleIndex] < key) {
        return recursiveBinarySearch(arr, key, middleIndex + 1, end);
    }
    return middleIndex;
};
console.log(recursiveBinarySearch(arr, 12, 0, arr.length - 1));

// iterable
const iterableBinarySearch = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        const middleIndex = ((start + end) / 2) | 0;
        if (arr[middleIndex] > key) {
            end = middleIndex - 1;
        }
        if (arr[middleIndex] < key) {
            start = middleIndex + 1;
        }
        if (arr[middleIndex] === key) {
            return middleIndex;
        }
    }
};
console.log(iterableBinarySearch(arr, 12));
