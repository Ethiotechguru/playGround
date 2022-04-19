let arr = [15,4,2,7,9,1,3,1,6,9,11,5,22,17];
// [3,6,11,15];
// [1,4,8,18]
function merge(a,b) {
    let val = [];
    let i =0;
    let j=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            val.push(...a.splice(i,1));
        }else{
            val.push(...b.splice(i,1));
        }
    }
    while(i<a.length) {
        val.push(...a.splice(i))
    }
    while (j<b.length) {
        val.push(...b.splice(i));
    }
    console.log(val)
    return val;
}

// sort([3, 6, 11, 15,20,31,35,60,89,90], [1, 4, 8, 18,120,123]);
function sort(arr) {
    if(arr.length<2){
        return arr;
    }
    let firstHalf = Math.floor(arr.length/2)
    let left = arr.splice(0, firstHalf);

    merge(sort(left), sort(arr));
}
sort([3,4,5,6,1,2,4])