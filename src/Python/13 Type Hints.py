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

# Generic types - define flexible functions and classes that work with multiple types
from typing import TypeVar, Generic, Sequence

# TypeVar creates a type variable for generic functions
T = TypeVar('T')

def get_first(items: Sequence[T]) -> T:
    """Returns first item, preserving the type"""
    return items[0]

get_first([1, 2, 3])  # Output: 1 (type: int)
get_first(["a", "b"])  # Output: "a" (type: str)

# Generic classes with TypeVar
K = TypeVar('K')
V = TypeVar('V')

class Pair(Generic[K, V]):
    """Generic pair container that holds two values of any types"""
    def __init__(self, key: K, value: V):
        self.key = key
        self.value = value

    def get_key(self) -> K:
        return self.key

    def get_value(self) -> V:
        return self.value

# Usage with different type combinations
pair1 = Pair[str, int]("age", 25)
pair2 = Pair[int, List[str]](1, ["a", "b"])

# Bounded TypeVar - restrict to specific types
from typing import SupportsAbs

TNum = TypeVar('TNum', bound=SupportsAbs)

def absolute_value(x: TNum) -> TNum:
    """Works with any type that supports abs()"""
    return abs(x)

absolute_value(-5)    # Output: 5
absolute_value(-3.14) # Output: 3.14

# Multiple type constraints with TypeVar
TNumeric = TypeVar('TNumeric', int, float, complex)

def double(x: TNumeric) -> TNumeric:
    """Only accepts int, float, or complex"""
    return x * 2

double(5)      # Output: 10
double(2.5)    # Output: 5.0
double(1+2j)   # Output: (2+4j)
