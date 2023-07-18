import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/todoList")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error: any) => {
    console.log(error);
  });

module.exports = mongoose;
