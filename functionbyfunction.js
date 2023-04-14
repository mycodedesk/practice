const a=function(dj){
    return dj*1.5;
}
const b=function(rj){
    return rj+10;
}
const c=function(dj,rj){
    const ad=a(dj);
    const da=b(rj);
    return {dj:a,rj:b};
}
console.log(c(80,85));