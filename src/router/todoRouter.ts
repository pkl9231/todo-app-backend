import express from "express";

import {
  saveTodoList,
  getAllTodoList,
  deleteTodoList,
} from "../controller/todoListController";

export default (router: express.Router) => {
  router.post("/todo-list", saveTodoList);
  router.get("/todo-list", getAllTodoList);
  router.delete("/todo-list/:id", deleteTodoList);
};
