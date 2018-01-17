import sys
numbers =[int(sys.stdin.readline()), int(sys.stdin.readline()), int(sys.stdin.readline())]

n = int(sys.stdin.readline())

for n in range(3, n):
    y = numbers[n - 1] + numbers[n - 2] + numbers[n - 3]
numbers.append(y)

print(numbers.pop())