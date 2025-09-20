# Basic decorator
def uppercase(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@uppercase
def greet(name):
    return f"hello, {name}"

greet("world")       # Output: "HELLO, WORLD"

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            result = []
            for _ in range(times):
                result.append(func(*args, **kwargs))
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    return "hi"

say_hi()            # Output: ['hi', 'hi', 'hi']

# Property decorator
class Temperature:
    def __init__(self):
        self._celsius = 0

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

    @fahrenheit.setter
    def fahrenheit(self, value):
        self._celsius = (value - 32) * 5/9

temp = Temperature()
temp.fahrenheit = 86
temp._celsius       # Output: 30.0