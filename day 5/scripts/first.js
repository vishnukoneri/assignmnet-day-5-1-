n = prompt("enter a positive number",4);
arr = [];
for(i = 0
    ;i<=n;i++){
    arr[i]=i;
}
console.log(arr);
let odd = arr.filter(ele=>ele%2!=0);
console.log(odd);
let cubes = arr.filter(ele=>ele%2!=0).map(ele=>ele**3);
console.log(cubes);