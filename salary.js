const bonus=300;
const employedetail={
    name:"praveen",
    age:22,
    currentSalary:50000,
    total:function(){
        this.totalsalaray= this.currentSalary+bonus;

    }
}
employedetail.total()
console.log(employedetail.totalsalaray);