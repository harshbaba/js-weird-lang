//===========(Frequency of Elements Using Binary Search)===============//
var arr2 = [1,2,4,8,8,8,8,8,8,10];
//totalNo = 10

Array.prototype.firstOccuranceOfElement = function(arr,value){
    var arr = arr;
    var value = value;
    var last = arr.length - 1;
    var start = 0;
    var mid = 0;
    var indexOfVal = -1;
    while(start <= last){
        mid = Math.floor((start + last) / 2);
        //console.log(`mid:${mid} start: ${start} arrayMid ${arr[mid]} value: ${value} indexOfVal ${indexOfVal}` );
        if(arr[mid] == value){
            indexOfVal = mid;
            last = mid-1;
        }else{
            if(arr[mid] > value){
                last = mid -1;
            }else{
                start = mid + 1;
            }
        }
    }
    return indexOfVal;
}

Array.prototype.lastOccuranceOfElement = function(arr,value){
    var arr = arr;
    var value = value;
    var last = arr.length - 1;
    var start = 0;
    var mid = 0;
    var indexOfVal = -1;
    while(start <= last){
        mid = Math.floor((start + last) / 2);
        if(arr[mid] == value){
            indexOfVal = mid;
            start = mid+1;
        }else{
            if(arr[mid] > value){
                last = mid -1;
            }else{
                start = mid + 1;
            }
        }
    }
    return indexOfVal;
}

Array.prototype.frequencyOfElement = function(arr,value){
    var frequency = new Array();
    var i = frequency.firstOccuranceOfElement(arr,value);
    if(i == -1) return {"exist": false}
    
    var j = frequency.lastOccuranceOfElement(arr,value);
    return {"exist": true, "noOfTimes": j-i+1}
}   

var freqOfElem = new Array();
console.log(freqOfElem.frequencyOfElement(arr2,8));