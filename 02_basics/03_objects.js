// single objects

// const tinderuser={};
// tinderuser.id="123abc";
// tinderuser.name="John Doe";
// tinderuser.isloggedin=false;
// console.log(tinderuser);


const regularuser={
    email: "abc@gmail.com",
    fullname:{
        firstname:"Jatin",
        lastname: "Verma"
    }
}
// console.log(regularuser.fullname.firstname);
 const obj1={1:"a",2:"b"};
 const obj2={3:"c",4:"d"};
 const obj3={...obj1,...obj2}; // this methood is used to merge recommended way to merge two objects.
 console.log(obj3);
 