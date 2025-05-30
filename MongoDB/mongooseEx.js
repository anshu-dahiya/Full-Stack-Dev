const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    name:String,
    age:Number
});

const UserModal = new mongoose.model('users',UserSchema);


const main = async() => {
    await mongoose.connect('mongodb://localhost:27017/myDB');
    console.log("Connected to MongoDB");

    const newData = new UserModal({
        name:'Tom',
        age: 25
    });

    await newData.save();
    console.log("Data added successfully");
}

main();