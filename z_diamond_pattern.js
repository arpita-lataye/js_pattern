let n=5;
let s="";
for (let i=1; i<=n; i++){
    for (let j=n; j>i; j--){
        s+=' ';
    }
    for (let k=0; k<i*2-1; k++){
        s+='*';
    }
    s+='\n';
}
for (let i=1; i<=n-1; i++){
    for (let j=0; j<i; j++){
        s+=' ';
    }
    for (let k=(n-i)*2-1; k>0; k--){
        s+='*';
    }
    s+='\n';
}
console.log(s);
