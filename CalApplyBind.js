let name1={
    firstname:"riyu",
    lastname:"rohini",
}
let fullname=function(home,mobile){
    console.log(this.firstname+" "+this.lastname+" "+home+" "+mobile);
}

// Call function - Calling function means function borrowing
fullname.call(name1,"nashik","9890968682");
let name2={
    firstname:"DTPro",
    lastname:"Data analyst",
}
fullname.call(name2,"USA","9730486006");  //calling same function for name2

/* Apply function
The differance between call and apply is the way of passing arguments
In call method we pass arguments individually but in apply method
we pass argument in the form of list */

// Bind method
let myname=fullname.bind(name2,["USA","9730486006"]);
console.log(myname);
// this will return a function which can invok later
myname(); // now we invoke the function and see the result

