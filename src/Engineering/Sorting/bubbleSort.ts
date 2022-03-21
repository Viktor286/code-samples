// Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
// Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort

function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) { // ->[...]
    let swapped = false;

    for (let j = arr.length - 1; j >= i; j--) { // -> [<-]
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}
