class LinkedList{
    constructor(){
        this.head =null;
        this.length = 0;
    }
    addToEnd(val){
        if(!val){
            return this;
        }
        let newNode = {
            val:val,
            next:null,
        }
        if(!this.head){
            this.head = newNode;
            this.length++;
                // console.log(this);
            return;
        }
        let head = this.head;
        while (head.next) {
            head = head.next
        }
        head.next = newNode;
        this.length++;
    }
    addToStart(val){
        if(!val){
            return this;
        }
        const newNode = {
            val:val,
        }
        if(!this.head){
            newNode.next = null;
            this.head = newNode
            return this;
        }
        let head = this.head;
        newNode.next = head;
        this.head = newNode
        this.length++;
    }
    addAtIndex(i, val){
        if(i<0){
            return;
        }
        if(i === 0){
            this.addToStart(val);
            return;
        }
        if(i >= this.length){
            this.addToEnd(val);
            return;
        }
        let head;
        let temp =this.head;
        let count = 0;
        while (count !== i && count < this.length) {
			head = temp;
			temp = temp.next;
			count++;
		}
        let newNode = {
            val:val,
        }
        newNode.next = temp;
        head.next = newNode;
        this.length++;
    }
    removeFromStart(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            this.length--;
            return;
        }
        const head = this.head;
        const temp = head.next;
        this.head = temp;
        this.length--;
    }
    removeFromEnd(){
        if(!this.head){
            return this;
        }
        if(!this.head.next){
            this.head = null;
            this.length--;
            return;
        }
        let head;
        let temp=this.head;//{val:3,next:{val:5,next:{val:8}}}
        while(temp.next){
            head = temp;
            temp = temp.next;
        }
        head.next = null;
        this.length--;
    }
    removeAtIndex(i){
        if(i === 0){
            this.removeFromStart();
            return;
        }
        if(i === this.length-1){
            this.removeFromEnd();
            return;
        }
        let head;
        let temp = this.head;
        let count = 0;
        while(count !== i && count< this.length){
            head = temp;
            temp = temp.next;
            count++;
        }
        head.next = temp.next;
        this.length--;
    }
}

const head = new LinkedList();
head.addToEnd(10);
head.addToEnd(11);
head.addToEnd(12);
head.addToEnd(13);
head.addToStart(5);
head.addAtIndex(2,54)
head.removeAtIndex(2)
const node = {val:4,next:{val:5,next:{val:1, next:{val:9, next:null}}}}
let next = node.next.next;
node.val = node.next.val;
node.next = next;
//['a','c','t','q'], ['p','t','m','r','h','o','p']

//loop through one of the array and map it to be key value pair;

// let arr1 = ["a",2, "c", "t", "q"];
// let arr2 = ["p","m", "r", "h", "o", "a"];

const mapToObj = (a)=>{
    let obj = {};
	for (let i = 0; i < a.length; i++) 
        obj[a[i]] = a[i];
    return obj;
}

const func= (a,obj)=>{
	for (let j = 0; j < a.length; j++)
		if (obj[a[j]]) return true;
    return false;
}

// console.log(func(arr2, mapToObj(arr1)));

let arr = [1,2,3,9];
let arr2 = [2,7,5,4,6]

function pairSum(arr, sum) {
    //? Unordered
    // let set = new Set();

    // for(let i = 0; i<arr.length; i++){
    //     if(set.has(arr[i])){
    //         return true;
    //     }
    //     let n = sum-arr[i] 
	// 	set.add(n);
    // }
    // return false;
    //? Ordered 
    // let j= arr.length-1;//[] -1
    // let i = 0;
    // while(j !== i && j>0){
    //     if(arr[i] + arr[j] === num){
    //         return true;
    //     }else if(arr[i] + arr[j] > num){
    //         j--;
    //     }else{
    //         i++;
    //     }
    // }
    // return false;

    //?Hash map

    let obj ={};
    for(let i = 0; i<arr.length; i++){
        let val = helper(obj,arr[i], sum);
        if(val) {
            return true;
        };
    }
    return false;
}

function helper(obj, val ,sum) {
    if (obj[val]) {
        return true;
    };
	let n = sum - val;
	obj[n] = n;
}
console.log(pairSum(arr2, 8));