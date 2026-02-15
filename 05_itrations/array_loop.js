//higher array loop...


// let myarray=[1,2,3,4,5,6,7,8,9,10];
// for (const num of myarray) {
//     console.log(num);
    
// }

// let name="jatin";
// for (const num of name) {
// console.log(num);   
// }

//maps...
const map=new Map();
map.set("IN","India");
map.set("UN","United State");
map.set("FR","France");
map.set("IN","India");    // no Reapet in maps they are unique
for (const [key,value] of map) {   // destructuring of array
    
    console.log(key,"->",value);
}
