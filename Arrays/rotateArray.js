let arr = [12, 14, 11, 40, 16, 35, 32, 36, 36, 35];

// Brute Force Approach, Time Complexity => O(n^k) => O(n^2).
function rotateArray(arr, k){
    let size = arr.length
    if(k > size){
        k %= size;
    }
    while(k){ // O(k)
        arr.unshift(arr[size-1]); // O(n)
        arr.pop() // O(1)
        k--;
    }
    return arr;
}

// Optimized Approach, Time Complexity => O(n)
function rotateArrayOptimized(arr, k){
    let size = arr.length;
    if(k > size){
        k %= size;
    }

    reverse(arr, 0, size-1); // O(n)
    reverse(arr, 0, k-1); // O(n)
    reverse(arr, k, size-1); // O(n)

    return arr;
}

function reverse(arr, left, right){
    while(left < right){
        const temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp;

        left++;
        right--;
    }
}

console.log(rotateArray(arr, 3));
console.log(rotateArrayOptimized(arr, 3));
