exports.sayHello = function(){ //refrence of module 
    console.log("Hello");
}

function sayThanks(){
    console.log("Thanks");
}

module.exports = sayThanks;   //when module.exports run refrence will removed

console.log(module)