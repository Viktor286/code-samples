# List slicing
# numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[2:7] # Output: [2, 3, 4, 5, 6]
numbers[:5] # Output: [0, 1, 2, 3, 4]
numbers[5:] # Output: [5, 6, 7, 8, 9]
numbers[-3:] # Output: [7, 8, 9]
numbers[::2] # Output: [0, 2, 4, 6, 8]
numbers[1::2] # Output: [1, 3, 5, 7, 9]
numbers[::-1] # Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
numbers[2:8:2] # Output: [2, 4, 6]

# String slicing
# text = "Hello, Python!"
text[7:13] # Output: "Python"
text[:5] # Output: "Hello"
text[::2] # Output: "Hlo yhn"
text[::-1] # Output: "!nohtyP ,olleH"