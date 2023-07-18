import { TodoModel } from "./schema";
import { TodoRequest } from "../data/todoList";

export const createTodoList = async (todoData: TodoRequest) => {
  const todoRecords = new TodoModel(todoData);
  return await todoRecords.save();
};

export const getTodoList = async () => {
  return await TodoModel.find();
};

export const deleteTodoListById = async (id: string) => {
  return await TodoModel.findOneAndDelete({ _id: id });
};
