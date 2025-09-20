# Multiple inheritance
class A:
    def method(self):
        return "A"

class B:
    def method(self):
        return "B"

class C(A, B):
    pass

C().method()         # Output: "A"
C.__mro__           # Output: (<class 'C'>, <class 'A'>, <class 'B'>, <class 'object'>)