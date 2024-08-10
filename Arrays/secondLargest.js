let arr = [12, 14, 11, 40, 16, 35, 32, 36, 36, 35];

function secondLargest(arr){ // Time Complexity => O(n);
    if(arr.length < 2){
        return "Second Largest doesn't exist."
    }

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}



function anotherWay(arr){
    if(arr.length < 2){
        return "Second Largest doesn't exist."
    }
    
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i] !== largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr));
console.log(anotherWay(arr));