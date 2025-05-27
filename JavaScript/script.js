// //Q15. Create a H2 heading element with text - "Hello JavaScript!". Append(means add on last) "from Apna College students" 
 //to this text using JS. 

// let head = document.querySelector("h2");
// console.dir(head.innerText);

// head.innerText = head.innerText + " From Apna College Students";
// console.dir(head.innerText);


// //Q16. Create 3 divs with common class name - "box". Access them & add some uniquw text to each them.

// let cart = document.querySelectorAll(".box");

// let idx = 1;
// for(div of cart){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }


// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

// let val = document.querySelector("#div1");
// val.append(newBtn);
// val.prepend(newBtn);
// val.before(newBtn);
// val.after(newBtn);

// let head = document.createElement("h1");
// head.innerHTML = "<i>This is heading</i>";
// console.log(head);

// val.before(head);


// let val2 = document.querySelector("#div2");
// val2.remove();

// head.remove(); 

// let app = document.body.innerHTML;
// console.dir(app);

// let newApp = document.body.appendChild(document.createElement("p"));
// newApp.innerText = "This is new para added by appendchild";
// console.dir(newApp);



//Q17 Create a new buttun element. Give it a text "click me",background color of red & text color of white.
//Insert the button as the first element inside the body tag.
 
let newButton = document.createElement("button");
newButton.innerText = "Click me!";

newButton.style.backgroundColor = "red";
newButton.style.color = "white";

let val = document.querySelector("body");
val.prepend(newButton);
console.log(val);


//Q18 Create a <p> tag in html,give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
//Did you notice,how you overwrite the class name when you add a new one?
//Solve the problem using classList.

let para = document.querySelector("p");
console.log(para);

para.classList.add("newClass");
let classList = para.classList;
console.log(classList);



//Event Handling 

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}


let div = document.querySelector("#div1");

div.onmouseover = () => {
    console.log('this is div no. 1');

}



//event listner

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    console.log("button has clicked - handler1");
})

const handler2 = () => {
    console.log("button has clicked - handler2");
}

btn3.addEventListener("click", handler2);

btn3.addEventListener("click", () => {
    console.log("button has clicked - handler3");
})

btn3.addEventListener("click", () => {
    console.log("button has clicked - handler4");
})

btn3.removeEventListener("click", handler2);
 



//Q19 Create a toggle button that changes the screen to dark-mode when clicked & light-mode when click again.

let modeBtn = document.querySelector("#btn4");
let currMode = "light";

modeBtn.addEventListener('click', () => { 
    
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "green";
        // document.querySelector("body").classList.add("dark");
        // document.querySelector("body").classList.remove("light");
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        // document.querySelector("body").classList.add("light");
        // document.querySelector("body").classList.remove("dark");
    }

    console.log(currMode);
});



//Prototypes in JavaScript

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    salary : 50000,
};

const karanArjun2 = {
    salary : 120000,
    calcTax() {
        console.log("tax rate is 20%");
    }
};

const karanArjun3 = {
    salary : 50000,
};

karanArjun.__proto__= employee;
karanArjun2.__proto__= employee;
karanArjun3.__proto__= employee;



// Classes in JavaScript

// class ToyotaCar{
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("Toyota");

// let yaris = new ToyotaCar();
// yaris.setBrand("Toyota");



//Parameterize constructer
class ToyotaCar{
    constructor(brand, mileage) {
        console.log("creating new object")
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

}

let innova = new ToyotaCar("Toyota", 15);

let etios = new ToyotaCar("Toyota",20);


//Inheritence

class Person{
    constructor(name) {
        this.species = "Homo sapiens",
        this.name = name
    }

    sleep() {
        console.log("sleep");
    }

    
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(name) {
        
        super(name);       //to invoke parent class constructor
    
        
    }
    
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("Anshu");


//Q20 you are creating a website for your college. Create a class User with 2 properties, name & email. 
//  It also has a method called viewData() that allows user to view website data.
//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data

let Data = "Secret infromation";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData () {
        console.log(" data = ",Data)
    } 
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData() {
        Data = "some new value";       
    }
}

let student1 = new User("Anshu", "anshu@gmail.com");
let student2 = new User("Vijay", "vijay@gmail.com");

let teacher1 = new User("Dean", "vips-edu@college.com");

let admin1 = new Admin("admin", "admin@college.com");





// //Error Handling
// let a = 5;
// let b = 10;

// console.log("a+b = ",a + b);
// console.log("a+b = ",a + b);
// console.log("a+b = ",a + b);
// try {
//     console.log("a+c = ",a + c); //error
// }
// catch (err){
//     console.log(err);
// }

// console.log("a+b = ",a + b);
// console.log("a+b = ",a + b);
// console.log("a+b = ",a + b);







// Asyncronous 

// console.log("one")
// console.log("two")


// function hello() {
//     console.log("hello")
// }

// setTimeout(hello, 4000) //timeout 


// setTimeout (() => {
//     console.log("Hey");
// },5000)      // timeout with arrow function


// console.log("three")
// console.log("four")




// //nesting in callback .........Callback Hell

// function getData(dataId, getNextData) {

//     setTimeout (() => {
//         console.log("data", dataId);

//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1 , () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         });
//     });
// });





// promises

// let promise = new Promise( (resolve, reject) => {
//     console.log("I am a promise");
//     reject("can't able to get Successful")
// });


// function getData(dataId  ) {

//         return new Promise((resolve, reject) => {
//             setTimeout (() => {
//                 console.log("data", dataId);
//                 resolve("Successful");
//             },8000);
//         });
//     }
    


// const getPromise = () => {
//     return new Promise( (resolve, reject) => {
//         console.log("I am a promise");
//         //resolve("Successful");
//         reject("network  error");
//         });
// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fullfiled", res);
// });


// promise.catch((err) => {
//     console.log("promise rejected", err);
// });






// promise chain 

//Example-1
// function asynFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("success")
//         }, 3000);
//     });
// }

// function asynFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("success")
//         }, 2000);
//     });
// }


// console.log("fetching data1......")
// asynFunc().then((res) => {
    
//     console.log("fetching data2......")
//     asynFunc2().then((res) => {});
// });


//Example-2

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             console.log("data", dataId);
//             resolve("success");
//         },2000);
//     });
// }


// console.log("getting data1......")
// getData(1)
// .then((res) => {
//     console.log("getting data2......")
//     return getData(2);    
// })
// .then((res) => {
//     console.log("getting data3......")
//     return getData(3);    
// })
// .then((res) => {
//     console.log("getting data4......")
//     return getData(4);    
// })
// .then((res) => {
//     console.log(res)
// })



//Async-await

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("data", dataId);
            resolve("success");
        },2000);
    });
}


async function getAllData() {
    console.log("getting data1......");
    await getData(1);
    console.log("getting data2......");
    await getData(2);
    console.log("getting data3......");
    await getData(3);
    console.log("getting data4......");
    await getData(4);
}


// //  IIFE
// (async function () {
//     console.log("getting data1......");
//     await getData(1);
//     console.log("getting data2......");
//     await getData(2);
//     console.log("getting data3......");
//     await getData(3);
//     console.log("getting data4......");
//     await getData(4);
// })();



//fetch API

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
const btn5 = document.querySelector("#btn5");

//fetching API by async-await
const getFacts = async () => {
    console.log("getting data.....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[1].text;
};


//fetching API by promise chain
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();  
//         })
//         .then((data) => {
//             console.log(data);
//             factPara.innerText = data[2].text;
//         })
// }


btn5.addEventListener("click", getFacts);