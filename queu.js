class Queue{
    constructor(val){
        this.val =[val];
        this.length = this.val.length;
    }
    add(val){
        this.val.push(val);
        this.length = this.val.length;
    }
    remove(){
        if(this.val.length <= 0){
            console.log('Nothing is found to remove');
            return;
        }
        this.val.shift();
        this.length = this.val.length;
    }
}

const arr = new Queue(10);
arr.add(20)
arr.add(13);
arr.add(12)
arr.remove();
arr.remove();
arr.remove();
arr.remove();
arr.remove();
console.log(arr)