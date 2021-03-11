const arr = [1,2,3,4,5,6,7,8,9];
const newArr =[];
function up (arr)
    { 
    for (let i=0; i < arr.length  ; i++) 
        {
        newArr.push(arr[i]+3);
        }
    }
up(arr);
console.log(arr);   
console.log(newArr);   