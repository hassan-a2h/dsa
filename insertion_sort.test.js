const insertionSort = require('./insertion_sort');

describe('Insertion Sort', () => {
  it('should sort given array', () => {
    const unsorted = [-1, 10, -19, 15, 1500, 11];
    const sorted = insertionSort(unsorted);
    expect(sorted).toEqual([-19, -1, 10, 11, 15, 1500]);
  });

  it('should sort given array', () => {
    expect(insertionSort([90, -15000, 11, 700, 1])).toEqual([-15000, 1, 11, 90, 700]);
  });
});