const bubbleSort = require('./bubble_sort');

describe('Bubble Sort', () => {
  it('should sort an array of numbers', () => {
    const unsortedArr = [12, 19, 0 , 88, 44, 50];
    const sortedArr = bubbleSort(unsortedArr);
    expect(sortedArr).toEqual([0, 12, 19, 44, 50, 88])
  });

  it('should sort an array of numbers', () => {
    const unsortedArr = [-18, 25, 9, 12, 0, 10, 100, 45];
    const sortedArr = bubbleSort(unsortedArr);
    expect(sortedArr).toEqual([-18, 0, 9, 10, 12, 25, 45, 100]);
  });

  it('should sort an array of numbers', () => {
    const unsortedArr = [-18, -25, 0, -19, 90,];
    const sortedArr = bubbleSort(unsortedArr);
    expect(sortedArr).toEqual([-25, -19, -18, 0, 90]);
  });
});