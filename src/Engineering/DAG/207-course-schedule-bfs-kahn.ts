// 207. Course Schedule
// https://leetcode.com/problems/course-schedule/
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// Return true if you can finish all courses. Otherwise, return false.

function canFinish(numCourses: number, prerequisites: number[][]) {
  let numCoursesLeft = numCourses;
  // build an adjacencyList graph
  // dep -> dents[] (parent -> children[])
  const adjacencyList: number[][] | undefined = new Array(numCourses).fill(undefined);
  // in-degree amount for each node
  const inDegreeList = new Array(numCourses).fill(0);

  prerequisites.forEach(([dentNum, depNum]) => {
    // [a, b] where b -> a
    // build an adj-list graph
    if (!adjacencyList[depNum]) adjacencyList[depNum] = [];
    adjacencyList[depNum].push(dentNum);

    inDegreeList[dentNum]++; // increment in-degrees (deps) for the node
  });

  // add all zero-in-degrees nodes into the queue
  const queue = [];
  for (let i = 0; i < inDegreeList.length; i++) {
    if (inDegreeList[i] === 0) queue.push(i);
  }

  // Traverse in BFS, started from 0-in-degree nodes
  while (queue.length > 0) {
    const currentNum = queue.shift();
    // since we "removed" the node from the "dependency network",
    // we can decrement the numCoursesLeft
    // because it means that removed course doesn't depend on
    // anything which hasn't been resolved. (principle of Kahn algorithm)
    numCoursesLeft--;

    // Traverse dependents (children)
    const dependents = adjacencyList[currentNum];

    if (!dependents) {
      continue;
    }

    dependents.forEach((nodeNum) => {
      // Decrement all affected node as per Kahn algorithm
      inDegreeList[nodeNum]--;
      // Add new zero-in-degree nodes into the queue
      if (inDegreeList[nodeNum] === 0) queue.push(nodeNum);
    });
  }

  return numCoursesLeft === 0;
}
