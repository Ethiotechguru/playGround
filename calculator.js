class Calc{
    static sum(a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
    static multiply(a,b){
        return a*b;
    }
    static divided(a,b){
        return a/b;
    }
}
function injectElements() {
    let div = document.querySelector(".container");
    let ul = document.createElement('ul');
    ul.className = 'list'
    for(let i=0;i<arr.length; i++){
        let li = document.createElement('li');
        li.textContent=arr[i];
        li.className='listItem'
        ul.append(li);
    }
    div.append(ul);
}
let arr = [1,2,3,'/',4,5,6,'*',7,8,9,"-",0,'.','=','+'];
injectElements(arr);
let val = "";
let sum=0;
let operator;
let init = false;
let list = document.querySelector(".list");
list.addEventListener('click',(e)=>{
    if (
		(typeof +e.target.textContent === "number" &&
			!isNaN(+e.target.textContent)) ||
		e.target.textContent === '.'
	) {
		val= val + e.target.textContent;
        console.log(+val)
	}
    else{
        if(e.target.textContent==='+'){
            operator = "+";
            sum = Calc.sum(sum, +val);
            console.log(sum)
            val='';
        }
        if(e.target.textContent==='-'){
            operator = "-";
            if(init){
                sum = Calc.subtract(sum, +val);
				val = "";
				console.log(sum);
            }else{
                sum = +val;
                init = true;
                val=''
            }
            
        }
        if(e.target.textContent==='*'){
            operator = "*";
            if (init) {
				sum = Calc.multiply(sum, +val);
				val = "";
				console.log(sum);
			} else {
				sum = +val;
				init = true;
				val = "";
			}
        }
        if(e.target.textContent==='/'){
            operator='/'
            if (init) {
				sum = Calc.divided(sum, +val);
				val = "";
				console.log(sum);
			} else {
				sum = +val;
				init = true;
				val = "";
			}
        }
        if (e.target.textContent === "=") {
            if(operator === '/'){
                sum = Calc.divided(sum,+val)
            }if(operator === '*'){
                sum=Calc.multiply(sum, +val)
            }if(operator === '-'){
                sum = Calc.subtract(sum,+val);
            }if(operator==='+'){
                sum =Calc.sum(sum,+val)
            }
            console.log(sum);
		}
    }
})