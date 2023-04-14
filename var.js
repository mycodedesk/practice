var deepak="ok google";
/* variable outside of block is globaly */
{
   var deepak="hello siri";
    console.log(deepak);
    /* variable is inside block is colled local variable */
}
console.log(deepak);

var os="ok";
os="not ok";
console.log(os);

let or="nor";
or="not"+" or";
console.log(or);
  
const on="switch on";
om="switch off";
console.log(on + "\n" + om);

var apple="iphone";
console.log(apple+ "/n","watch");

strig="okk"
console.log(strig);