arr1,arr2 = list(map(int,input().strip().split()))
a = list(map(int,input().strip().split()))
b = list(map(int,input().strip().split()))

res = [0]*len(b)
i = 0
j = 0
while(i<arr1 and j < arr2):
    if(a[i]<b[j]):
        res[j] = i+1
        i += 1
        continue
    if(a[i] >= b[j]):
        res[j] = i
        j += 1

while(arr1 <arr2 and j <arr2):
    res[j] = arr1
    j += 1

result = ""
for x in res:
    result += str(x) + " "
print(result)