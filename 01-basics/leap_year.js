function isleapyear(year){
    // let year =2004;
    if(year%4==0){
        return 1
    }else{
        return 0
    }
}
var result = isleapyear(2001)
console.log(result)