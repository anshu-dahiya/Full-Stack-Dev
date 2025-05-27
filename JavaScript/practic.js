const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
};
console.log(product);


const profile = {
    profileName : "Anshu Dahiya",
    posts : 14,
    followers : 542+'k',
    following : 40,
    isFollow : true, 
};
console.log(profile);



// let num = prompt("Enter the number : ");

// if (num % 5 == 0)
// {
//     console.log(`Yes ${num} is multiple of 5`);
// }

// else
// {
//     console.log(`No ${num} is not multiple of 5`);
// }



let  str = "JavaScript";
let size = 0;

for(let val of str){
    console.log(`value = ${val}`);
    size++;
}
console.log(`string size = ${size}`);

let arr = [2,4,8,10,12,14,16,18,20];
size = 0; 

for (let val of arr){
    console.log(`value = ${val}`);
    size++;
}
console.log(`size of array is ${size}`);



let student = {
    name : "Anshu Dahiya",
    age : 22,
    cgpa : 8.4,
    isPass : true,
};

for(let key in student){
    console.log(`key = ${key} and Value = ${student[key]}`);
}




for(let i=0; i<=100; i++){
    if(i%2 != 0){
        console.log(i);
    }
}



// let gameNum = 25;
// let userNum = prompt("Guess the game number");

// while(userNum != gameNum){
//     userNum = prompt("You enter wrong number...Guess again");
// }
// console.log(`Conratulations, ${userNum} is right number`);




let marks = [97,82,75,64,36];

for(let i=0; i < marks.length; i++){
    console.log(marks[i]);
}



let cities = ["goa","pune","delhi","jaipur","rohtak"];

for(let city of cities){
    console.log(city.toUpperCase());
}




let sum = 0;

for(let val of marks){
    sum = sum + val;
}
console.log(sum);

let avg = sum/marks.length;
console.log(`avg marks of class = ${avg}`);




let items = [97,82,75,64,36];

for(let i=0; i < items.length; i++){
    
   let offer = items[i]/10;
    items[i] = items[i] - offer;
}
console.log(items);




