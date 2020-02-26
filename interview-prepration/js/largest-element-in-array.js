var test = [10, 324, 45, 90, 9808];

function getLargestItem(arr){
    var itemValue = 0;
    for(var i = 0; i< arr.length; i++){
        if(itemValue < arr[i]){
            itemValue = arr[i];
        }
    }

    return itemValue;
}

getLargestItem(test);