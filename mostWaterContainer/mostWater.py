# Double Pointer method
height = []


def max_area(height):
    left = 0
    right = len(height) - 1
    max_area = 0

    while left < right :
        # calculate the first area
        h = min(height[left], height[right])
        w = right - left # we are sure that the left is always smaller 
        max_area = max(max_area, h * w) 

        if (height[left] < height[right]):
            left += 1
        else:
            right -= 1
    print(max_area) # comment on the test
    return max_area

max_area(height=[1,8,6,2,5,4,8,3,7]) # remove arguments on the test