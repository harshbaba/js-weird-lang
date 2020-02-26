//get a sorted array (for binary search array should be sorted)
var arr1 = [1,4,7,50,125,226,745,1140,1141,1142,1350,2302,2307,2600,2700];
//total 15 elements

Array.prototype.binarySearch = function(arr,value){
    var arr = arr;
    var value = value;
    var last = arr.length -1;
    var start = 0;
    var mid = 0;

    while(start <= last){
        mid = Math.floor((last  + start) / 2);
        //console.log(`start:${start} Last: ${last} Mid: ${mid}`);
        if(arr[mid] == value) return {"exist": true, "index": mid};
        if(arr[mid] > value){
            last = mid-1;
        }else{
            start = mid+1;
        }
    }
    return {"exist": false};
}

var search = new Array(); 
console.log(search.binarySearch(arr1,50));




