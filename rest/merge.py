total = 0
def merge(a,b):
  global total
  i = 0
  j = 0
  sol = []
  while i < len(a) and j < len(b):
    if (a[i] <= b[j]):
      sol.append(a[i])
      i += 1
    else:
      sol.append(b[j])
      total += j+1
      j += 1
  return sol+a[i:]+b[j:]

c = [4, 5, 10, 2, 1, 3, 6, 8]

def mergeSort(c):
  if len(c) == 1:
    return c
  else:
    mid = len(c)//2
    a = mergeSort(c[:mid])
    b = mergeSort(c[mid:])
    return merge(a,b)

print(mergeSort(c), total)