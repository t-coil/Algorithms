// When this function is called, num must always be set to one for the correct result.

var binarySearch = function(arr, val, num) {
    middle = Math.floor(arr.length / 2);

    if (arr[middle] === val) {
        return middle+num;
    } else if (arr.length === 1) {
        return "Value not found"
    } else if (arr[middle] > val) {
        binarySearch(arr.slice(0, middle), val, num);
    } else {
        num += arr.slice(0, middle).length;
        binarySearch(arr.slice(middle, arr.length), val, num);
    }
}