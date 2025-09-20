# Basic type hints
def add(x: int, y: int) -> int:
 return x + y

add(3, 5) # Output: 8

# Complex type hints
from typing import List, Dict, Optional, Union, Tuple

def process_data(
 items: List[int],
 mapping: Dict[str, int],
 value: Optional[str] = None
) -> Tuple[int, str]:
 total = sum(items)
 status = "processed" if value else "pending"
 return total, status

process_data([1, 2, 3], {"a": 1}, "test") # Output: (6, 'processed')

# Type alias
Vector = List[float]
def scale(vector: Vector, scalar: float) -> Vector:
 return [x * scalar for x in vector]

scale([1.0, 2.0, 3.0], 2.0) # Output: [2.0, 4.0, 6.0]