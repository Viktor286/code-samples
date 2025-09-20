# Basic class with constructor
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Person('{self.name}', {self.age})"

person = Person("Alice", 30)
person               # Output: Person('Alice', 30)

# Class with class variable and instance variable
class Counter:
    count = 0  # Class variable

    def __init__(self, initial=0):
        self.value = initial  # Instance variable
        Counter.count += 1

    @classmethod
    def get_count(cls):
        return cls.count

c1 = Counter(5)
c2 = Counter(10)
Counter.get_count()  # Output: 2

# Class with property decorator
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def area(self):
        return 3.14159 * self._radius ** 2

circle = Circle(5)
circle.area          # Output: 78.53975