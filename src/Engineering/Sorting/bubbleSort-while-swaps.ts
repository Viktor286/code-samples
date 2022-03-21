// Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
// Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort

function bubbleSortWhileSwaps(arr: number[]) {
  let swapped = true;
  let rightBound = arr.length - 1;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < rightBound; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    if (swapped) {
      rightBound--;
    }
  }

  return arr;
}
