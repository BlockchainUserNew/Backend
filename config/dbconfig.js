const mongoose = require("mongoose");



exports.connect = () => {
  
  mongoose
    .connect("mongodb://127.0.0.1:27017/BigChainDB")
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
    });
};
