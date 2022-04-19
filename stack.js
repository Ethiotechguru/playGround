class Stack{
    constructor(val){
        if(!val){
            this.val = [];
            this.length = 0;
            return;
        }
        this.val = [val];
        this.length = this.val.length;
    }
    add(val){
        this.val.push(val);
        this.length++;
    }
    remove(){
        this.val.pop();
        this.length--;
    }
}

const arr = new Stack(10);
console.log(arr);