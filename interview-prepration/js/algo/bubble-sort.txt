var arr = [5,2,6,4,9];

function bubbleSort(arr){
    var arr = arr;
    for(var i = 0; i< arr.length - 1;i++){
        for (var j = i;j<arr.length - 1; j++){
            var left = arr[j];
            var right = arr[j+1];
            if(right < left){
                arr[j] = right;
                arr[j+1] = left;  
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));