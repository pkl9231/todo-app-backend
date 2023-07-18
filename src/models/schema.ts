import mongoose from "mongoose";

// TodoList Config
const TodoSchema = new mongoose.Schema({
  items: { type: String, required: true , unique: true },
});

export const TodoModel = mongoose.model("TodoList", TodoSchema);
