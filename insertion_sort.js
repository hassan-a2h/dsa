const insertionSort = (arr) => {
  let sortedArr = [...arr];
  let swapped;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let minIndex = i;
    swapped = false;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minIndex]) {
        minIndex = j;
        swapped = true;
      }
    }

    if (swapped) {
      swap(sortedArr, minIndex, i);
    }
  }

  return sortedArr;
}

const printArray = (arr) => {
  if (arr.length === 0) return;

  for (let i of arr) {
    console.log(i, ' ');
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}



const unsortedArray = [90, -15000, 11, 700, 1];
printArray(unsortedArray);

const sortedArr = insertionSort(unsortedArray);

console.log('\n');
printArray(sortedArr);

module.exports = insertionSort;