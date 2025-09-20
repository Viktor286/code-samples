# String methods commonly used
text = " Hello, World! "
text.strip() # Output: "Hello, World!"
text.lstrip() # Output: "Hello, World! "
text.rstrip() # Output: " Hello, World!"

"hello world".title() # Output: "Hello World"
"hello world".capitalize() # Output: "Hello world"
"Hello World".swapcase() # Output: "hELLO wORLD"

# Join and split
"-".join(['a', 'b', 'c']) # Output: "a-b-c"
"a,b,c".split(',') # Output: ['a', 'b', 'c']
"a b c".split() # Output: ['a', 'b', 'c']

# String formatting
"{} {}".format("Hello", "World") # Output: "Hello World"
"{1} {0}".format("World", "Hello") # Output: "Hello World"
"{name} is {age}".format(name="Alice", age=30) # Output: "Alice is 30"