# Using context manager
class MyContext:
    def __enter__(self):
        print("Entering context")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")
        return False

with MyContext() as ctx:
    print("Inside context")
# Output:
# Entering context
# Inside context
# Exiting context

# Context manager with contextlib
from contextlib import contextmanager

@contextmanager
def my_context():
    print("Setup")
    yield "resource"
    print("Cleanup")

with my_context() as resource:
    print(f"Using {resource}")
# Output:
# Setup
# Using resource
# Cleanup