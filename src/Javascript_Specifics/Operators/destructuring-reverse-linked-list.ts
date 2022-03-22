// Destructuring assignment
// https://javascript.info/destructuring-assignment#array-destructuring

interface ListNode {
  val: number,
  next: ListNode | null
}

function reverseList(head: ListNode) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let [prev, current] = [null, head];
  while(current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
}
