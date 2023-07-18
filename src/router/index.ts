import express from "express";

import todoRouter from "./todoRouter";

const router = express.Router();
export default (): express.Router => {
  todoRouter(router);

  return router;
};
