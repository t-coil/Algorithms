var binarySearch = function(arr, val, num) {
    num = num || 0;

    if (arr[0] === val) {
        return 0;
    }

    middle = Math.floor(arr.length / 2);

    if (arr[middle] === val) {
        return middle + num;
    } else if (arr.length === 1) {
        return -1;
    } else if (arr[middle] > val) {
        binarySearch(arr.slice(0, middle), val, num);
    } else {
        num += arr.slice(0, middle).length;
        binarySearch(arr.slice(middle, arr.length), val, num);
    }
}

// Examples:

// var exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// binarySearch(exampleArray, 4) => 3
// binarySearch(exampleArray, 9) => 8
// binarySearch(exampleArray, 11) => -1
