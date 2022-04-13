function mergeSort(A: number[], l: number, r: number) {
  if (l === r) return;
  const mid = (l + r) >> 1; // ((r - l) >> 1) + l
  mergeSort(A, l, mid);
  mergeSort(A, mid + 1, r);
  merge(A, l, mid, r);
}

function merge(A: number[], l: number, mid: number, r: number) {
  const n1 = mid - l + 1;
  const n2 = r - mid;

  const L = A.slice(l, mid + 1);
  const R = A.slice(mid + 1, r + 1);

  // const L = new Array(n1);
  // const R = new Array(n2);
  // for (let i = 0; i < n1; i++)
  //   L[i] = A[l + i];
  // for (let j = 0; j < n2; j++)
  //   R[j] = A[mid + 1 + j];

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    A[k] = L[i];
    k++;
    i++;
  }

  while (j < n2) {
    A[k] = R[j];
    k++;
    j++;
  }
}

// const a1 = [5,1,3,7,6,8,2,4,4,4,4];
// mergeSort(a1, 0, a1.length-1);
// console.log(a1)
