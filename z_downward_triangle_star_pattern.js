let n=5;
let s="";
for (let i=0; i<n; i++){
    for (let k=0; k<n-i; k++){
        s+='*';
    }
    s+='\n';
}
console.log(s)