var n=6;
var s='';
for (let i=n/2; i<n; i+=2){
    for (let j=1; j<n-i; j+=2){
        s+=' ';
    }
    for (let j=1; j<i+1; j++){
        s+='*';
    }
    for (let j=1; j<n-i+1; j++){
        s+=' ';
    }
    for (let j=1; j<i+1; j++){    
        s+='*';
    }
    s+='\n';
}

                               // lower part, inverted pyramid 
for (let i=n; i>0; i--){              
    for (let j=0; j<n-i; j++){
        s+=' ';
    }
    for (let j=1; j<i*2; j++){
        s+='*';
    }
    s+='\n';
}
console.log(s)