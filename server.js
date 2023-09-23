const express = require("express");  //import express 
const mongodb = require("./data/database"); //define mongodb with folder location
const app = express(); //making it an object (instantiate)

const port = process.env.PORT || 3000; //set port

app.use("/", require("./routes"));  

mongodb.initDb((err) => {     //initializes MongoDB database connection and starts Node.js -
    if (err) {                //Express only if database initialization is successful (ensures apps 
        console.log(err);     //dependencies like database are properly set up before accepting incoming requests)
    } else {
        app.listen(port, () => {   //starts client
            console.log(`Database is listening, and node is running on port ${port}`);
        });
    }
});




