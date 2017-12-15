// https://www.hackerrank.com/challenges/mini-max-sum/problem

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/**
* Sum the numbers of an array from minIndex to maxIndex
* @param {array} nums - Array of numbers
* @param {number} minIndex - minimum index for numbers to sum
* @param {number} maxIndex - maximum index for numbers to sum
*/
function sumArr(nums, minIndex, maxIndex) {
    return nums.slice(minIndex, maxIndex + 1)
                .reduce((sum, num) => sum + num, 0)
}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);

    arr.sort()
    const maxSum = sumArr(arr, 1, arr.length - 1)
    const minSum = sumArr(arr, 0, arr.length - 2)

    console.log(`${minSum} ${maxSum}`)
}
