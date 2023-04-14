//PSUEDOCODE FOR AVERAGE OF NUMBERS
/* FUNCTION computAverage(array)
SET sum is zero
DIFINE sum as len
FOR array lenght is zero
RETURN avarage
END FUNTION

CALL result as computAverage
DISPLAY result
*/            
function computAvergae(array){
    let sum=0;
    let len=array.length;
    for(let i=0;i<len;i++){
        sum=sum+array[i];
    }
    let avg=sum/len;
    return avg;
}

let result=computAvergae([23,43,56,12,3]);
console.log(result);