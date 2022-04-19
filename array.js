class MyArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }
    getData(index){
        index = index.toString();

        if(!this.data[index]){
            console.log(undefined);
            return undefined;
        }
        console.log(this.data[index]);
        return this.data[index];
    }
    addData(val){
        this.data[this.length] = val;
        this.length++;
    }
}

let arr = new MyArray();
arr.addData(10);
arr.addData(13)
arr.addData(6);
arr.addData(60);
arr.getData(2);
console.log(arr)