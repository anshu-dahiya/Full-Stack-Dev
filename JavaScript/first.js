const student = {
     Name : "Anshu Dahiya",
     age : 22,
     cgpa : 8.4,
     isPass : true

};

//Q-1. Create a const object called "product" to store information shown in the picture.(picture is of pen in amazon)

const product = {
  title : "Ball Pen",
  rating : 4,
  offer : 5,
  price : 270
};

console.log(product);


//Q-2. Create a const object called "profile" to store information shown in the picture.(picture Instagram profile of Shradha Khapra )
   
const profile = {
  profileName : "Shradha Khapra",
  posts : 195,
  followers : 569 + "k",
  following : 4,
  isFollow : true,
  
};
    
  console.log(typeof profile["isFollow"]);



  let a = 7;
  let b = 3;

  console.log("a % b = ",a % b); //modulous use to get a remainder
  console.log("a ** b = ",a ** b); //exponant use to square or cube 

  a++;   //increment operator
  b--;   //decrement operator

  console.log("a++ = ",a++);
  console.log(a);


  a +=4;
  console.log(a);
  console.log(a==b);
  console.log(a!=b);

  //conditional statements
  //Type-1
  let age = 35;

  if (age >= 18 )
  {
    console.log("You can vote");
  }
  else{
    console.log("You can not")
  }


  //Type-2
  let mode = "light";
  let color;

  if (mode === "dark"){
    color = "Black";
  }

  if (mode === "light"){
    color = "White"
  }

  console.log(color);

  //odd or even
  let num = 9;

  if(num % 2 === 0){
    console.log(num, "is even");
  }
  else{
    console.log(num, "is odd");
  }


  //Type-3
  
  if (mode === "dark"){
    color = "Black";
  }

  else if (mode === "blue"){
    color = "blue"
  }

  else if (mode === "pink"){
    color = "pink"
  }

  else{
    color = "White";
  }

  console.log(color);


  //Ternary Operators

  result = age >= 18 ? "adult" : "not adult";

  console.log(result);


  //Q3. Get user to input a number using prompt("Enter a nummber:").Check if the number is a multiple of 5 or not.

  //  let number = prompt("Enter a number : ");

  //  if (number % 5 === 0){
  //       console.log("Yes",number ,"is multiple by 5")
  //  }

  //  else{
  //   console.log("No",number ,"is not multiple by 5")
  //  }



   //Q4. Write a code which can give grades to students according to their scores:
      /* 80-100,A
         70-79,B
         60-69,C
         50-59,D
         0-49,F */
 
    // let score = prompt("Enter your score from 100 :");

    
    // if ( score >= 80 && score <= 100 ){
    //       console.log(score,"Grade A");
    // }
    
    // else if ( score >= 70 && score <= 79 ){
    //   console.log(score,"Grade B");
    // }
    
    // else if ( score >= 60 && score <= 69 ){
    //   console.log(score,"Grade C");
    // }
    
    // else if ( score >= 50 && score <= 59 ){
    //   console.log(score,"Grade D");
    // }
    
    // else if ( score >= 0 && score <= 49 ){
    //   console.log(score,"Grade F");
    // }

    // else{
    //   console.log(score,"Marks are not valid")
    // }



    //string functions

    let str = "  Anshu Dahiya ";
    let str2 = "is a student"

    let ustr = str.toUpperCase();
    let lstr = str.toLowerCase();

    console.log(str);
    console.log(ustr);
    console.log(lstr);
    console.log(str.trim());   // removes extra space
    console.log(str.slice(4,9)); //return value in range of entered indexes
    console.log(str.length);

    let concat = str + str2;
    console.log(concat);

    let str3 = 'Hello how are you';
    console.log(str3.replace("o", "u"));   // replace the value only from one place which found first in string 
    console.log(str3.replaceAll("o","d"));  // replace the value from every place

    console.log(str3.charAt(8));  //get a character stored on entered index


    //Q7. Prompt the user to enter their full name. Generate a username for them based on the input Start user name with @, 
    //       followed by their full name and ending with the fullname length.

    // let fullName = prompt("Enter your full name : ");

    // let normalMethod = "@"+ fullName.toLocaleLowerCase().trim() + fullName.length     //method-1 to do this
    // console.log(normalMethod);

    // let templateLiterals = `@${fullName.toLocaleLowerCase().trim()}${fullName.length}`;   //method-2 to do this 
    // console.log(templateLiterals);

    // let Marks = [97, 82, 75, 64, 36];
    // console.log(Marks);

    // Marks[4] = 25;

    // //for loop 
    // for(let i=0; i < Marks.length; i++){
    //       console.log(Marks[i]);
    // }

    // let cities = ["Delhi", "Pune", "Mumbai", "Hyderabad"];
    // //for of
    // for(let City of cities){
    //   console.log(City.toUpperCase())
    // }
    
    //Q8. For a given array with marks of students [85, 97, 44, 37, 76, 60]. Find average marks of the entire class.

    let marks = [85, 97, 44, 37, 76, 60];

    let sum = 0;

    for(let val of marks){
      sum = sum + val;
    }
    console.log(sum);

    let avg = sum / marks.length;
    console.log(`avg marks of the class = ${avg}`);

    
    //Q9. For a given array with prices of 5 items [250,645,300,900,50]
    //    All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

    let items = [250, 645, 300, 900, 50];
    
    //By for of loop
    let idx = 0;
    for (let val of items){
      let offer = val / 10;
      items[idx] = items[idx] - offer;
      console.log(`prices after offer = ${items[idx]}`);
      idx++;
    }

    //By for loop
    for(let i=0; i < items.length; i++){
      let offer = items[i] / 10;
      items[i] = items[i] - offer;      
    }
    console.log(items);  



    //Array methods 
    let foodItems = ["potato", "apple", "litchi", "tomato"];
    
    //push
    foodItems.push("Chips", "burger", "paneer");
    console.log(foodItems);

    //pop
    let deletedItem = foodItems.pop();
    console.log(foodItems);
    console.log("deleted",deletedItem);

    //toString
    console.log(foodItems.toString());

    //concat
    // let marvelHeroes = ["thor", "spiderman", "ironman"];
    // let dcHeroes = ["superman", "batman"];
    // let indianHeroes = ["krish", "shaktiman"]

    // let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
    // console.log(heroes);

    // //unshift
    // marvelHeroes.unshift("antman");
    // console.log(marvelHeroes);

    // //shift
    // let val = marvelHeroes.shift();
    // console.log("deleted",val);


    // //slice
    // let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];

    // console.log(marvelHeroes);
    
    // console.log(marvelHeroes.slice(1,4));

    // //splice
    // let arr = [1, 2, 3, 4, 5, 6, 7];
    
    // arr.splice(2, 2, 101, 102);
    // console.log(arr);

    // arr.splice(2, 0, 103); //add element  
    // console.log(arr);


    //Q10. Create an array to store companies ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
    //  a. Remove the first company from the array
    //  b. Remove Uber & Add Ola in its place
    //  c. Add Amazon at the end

    let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
    console.log(companies);

    //  a. Remove the first company from the array
    let value = companies.shift();
    console.log(companies);
    console.log("deleted",value);

    //  b. Remove Uber & Add Ola in its place
    companies.splice(1,1,"Ola");
    console.log(companies);

    //  c. Add Amazon at the end
    companies.push("Amazon");
    console.log(companies);

    
 
    
    //Funtions
    function myFunction(){
          console.log("Welcome to my kingdom");
          console.log("We are learning JS");
    }
    myFunction();

    //parameter input in function
     function myFunction2(msg){
      console.log(msg);
   }   
    myFunction2("I Love JS");//argument


    //Funtion to caltulate 2 num. sum
    function mySum(n,m){
      console.log(n+m);
   }
    mySum(452,125)


    //Funtion to return a value instead of printing it
    function mySum2(n,m){
      s = n + m;
      return s;
   }
    let val = mySum2(5555,4845);
    console.log(val);


    //Arrow Function
    const arrowSum = (a,b) => {
      console.log(a+b);
    }

    const arrowMul = (a,b) => {
      return a*b;
    } 


    //Q11. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in string

    function countVowels(str){
      
      let count = 0;

      for(let char of str ){
          ch = char.toLowerCase();    //converting string in lowercase
          if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ){
            count++;
          }

      }
      return count;
    }

   total_Vowels = countVowels("Anshu");
   console.log(`No. of vowels are : ${total_Vowels}`);


   //forEach Loop in Arrays
   let arr = ["pune","delhi","mumbai"];

   arr.forEach((val, idx, arr) => {
            console.log(val.toUpperCase(), idx, arr );
   });


   //Q12.For a given array of numbers,print the square of each value using the forEach loop

   let arg = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

   arg.forEach((num) => {
            console.log(num*num);  //num**2 can also be use
   });


   //map method
   let nums = [23, 54, 65];

   let newArr = nums.map((val) => {
        return val*2;  //multiple of 2                  
   }); 
   console.log(nums);
   console.log(newArr);


  //filter method 
  let dig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  let evenDig = dig.filter((val) => {
         return val%2 === 0;
  });
  console.log(evenDig);
 

  //reduce method
  let r = [5, 6, 1, 3, 7, 4, 6];

  const output = r.reduce((prev, curn) => {
    return prev + curn;
  })
  console.log(output);


  const output2 = r.reduce((prev, curn) => {
        return prev > curn ? prev : curn;
  })
  console.log(output2);






  //Q13.We are given array off marks of students.Filter out of the marks of students that scored 90+.

  let markss = [74, 92, 83, 99, 95, 65, 41, 85, 93, 95, 76]

  let toppers = markss.filter((val) => {
         return val > 90;
  });
  console.log(toppers);


  //Q14.Take a number from user. Create an array of numbers from 1 to n.
  //Use reduce method to calculate sum of all numbers in the array.
  //Use reduce method to calculate product of all numbers in the array.
   
//   let n = prompt("Enter the number : ");

//   let arr2 = [];

//   //Create an array of numbers from 1 to n
//   for(let i=1; i<=n; i++){
//       arr2[i-1] = i;
//   }
//   console.log(arr2);

//   //Use reduce method to calculate sum of all numbers in the array.
//   const sumAll = arr2.reduce((prev, curn) => {
//             return prev + curn;
//   });
//   console.log(sumAll);

//   //Use reduce method to calculate product of all numbers in the array.
//   const factorial = arr2.reduce((prev, curn) => {
//     return prev * curn;
// });
// console.log(factorial);










