def merge(a,b):
  i = 0
  j = 0
  sol = []
  while i < len(a) and j < len(b):
    if (a[i] < b[j]):
      sol.append(a[i])
      i += 1
    else:
      sol.append(b[j])
      j += 1
  return sol+a[i:]+b[j:]

c = [3,1,4,5,1,8,3,9,5,8,7,9,10,2]

def mergeSort(c):
  if len(c) == 1:
    return c
  else:
    mid = len(c)//2
    a = mergeSort(c[:mid])
    b = mergeSort(c[mid:])
    return merge(a,b)

print(mergeSort(c))