let mongose = require("mongoose");
let dbURI =   "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongose.connect(dbURI,{
    //useNewURLParser :true
});

mongose.connection.on ("connected",()=>{
    console.log("Connected to mongoDB");
});

mongose.connection.on("error",(error)=>{
    console.log("Connection Error:"+ error);
});

mongose.connection.on("disconnected",()=>{
    console.log("Disconnected From MongoDB");
})