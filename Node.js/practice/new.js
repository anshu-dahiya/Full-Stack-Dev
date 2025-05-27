const figlet = require('figlet')

const anshu = figlet("Anshu-Dahiya", function (err, data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

module.exports = anshu;