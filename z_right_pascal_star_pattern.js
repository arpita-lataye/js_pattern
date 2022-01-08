let n=5;
let s="";
for (let i=1; i<=n; i++){
    for (let j=0; j<i; j++){
        s+='*';
    }
    s+='\n';
}
for (let i=1; i<=n-1; i++){
    for (let j=0; j<n-i; j++){
        s+='*';
    }
    s+='\n';
}
console.log(s);