function hasPairWithSum(arr, target){

    console.log("Input array:", arr);
    console.log("Target sum:", target);

    let left = 0;
    let right = arr.length -1
    while ( left < right ){
        const sum = arr[left] + arr[right];
        console.log(`Checking: arr[${left}] + arr[${right}] = ${arr[left]} + ${arr[right]} = ${sum}`);
        if ( sum === target ){
            console.log("Match found!");
            return true
        } else if ( sum < target ){
            console.log("Sum too small, moving left pointer");
            left++
        } else if ( sum > target ) {
            console.log("Sum too large, moving right pointer");
            right--
        }
    }
    console.log("No pair found.");
    return false
}

hasPairWithSum([1, 3, 4, 6, 8, 10], 9)     // true (1+8 or 3+6)
hasPairWithSum([1, 2, 3, 9], 8)            // false
hasPairWithSum([], 4)                     // false
hasPairWithSum([4], 4)                    // false