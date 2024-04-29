// Merge sort

const quizMarks = [18, 5, 19, 9, 6, 7, 0, 38, 45, 29, 8, -11];

const mergeSort = (arr) =>
  swapAndMerge(arr.slice(0, Math.floor(arr.length / 2)), arr.slice(Math.floor(arr.length / 2)));

const swapAndMerge = (leftArr, rightArr) => {
  console.log('leftarr:', leftArr, '\nrightArr:', rightArr, '\n');

  if (leftArr.length > 1) {
    leftArr = swapAndMerge(leftArr.slice(0, Math.floor(leftArr.length / 2)),
      leftArr.slice(Math.floor(leftArr.length / 2)));
  }
  if (rightArr.length > 1) {
    rightArr = swapAndMerge(rightArr.slice(0, Math.floor(rightArr.length / 2)), 
      rightArr.slice(Math.floor(rightArr.length / 2)));
  }

  let i = 0;
  let j = 0;
  const sortedArray = [];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      sortedArray.push(leftArr[i]);
      i++;
    } else {
      sortedArray.push(rightArr[j]);
      j++;
    }
  }

  if (i < leftArr.length) sortedArray.push(...leftArr.slice(i));
  if (j < rightArr.length) sortedArray.push(...rightArr.slice(j));

  console.log('sorted array:', sortedArray);
  return sortedArray;
};


const sortedMarks = mergeSort(quizMarks);

console.log('sorted marks: ', sortedMarks);