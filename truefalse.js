//False => 0, '', undefined, null, NaN, false
//True => "0", ' ',[],{}
// const name = "0";
let name = 12;
console.log(name);
if( name || name == 0 ){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}