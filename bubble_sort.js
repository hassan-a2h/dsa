// Implement Bubble Sort algorithm.
// To improve the efficiency, the swapped bool checks if any swapping 
// occured during a single for loop iteration. If no swap occured it 
// means that the array is sorted so it breaks the outer loop.

const bubbleSort = (arr) => {
  let swapped;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      swapped = false;

      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
};

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

const uSortedArray = [-18, 25, 9, 12, 0, 10, 100, 45];
printArray(uSortedArray);

bubbleSort(uSortedArray);

console.log('\n');
printArray(uSortedArray);