import express from 'express';

import { HttpStatusCode, MessageResponse } from "../helpers/constants";
import { messageWrapper } from "../helpers/helpers";
import { proceedToCreateTodoList, proceedToGetAllTodoList, proceedToDeleteTodoList, proceedToDeleteAllTodoList } from "../service/todoListService";

export const saveTodoList = async (req: express.Request, res: express.Response) => {
    const errorResponse = [];
    const { items } = req?.body;
    if (!items) {
      errorResponse.push({
        errorMessage: MessageResponse.MISSING_REQUIRED_FIELD,
        attributeName: "items",
      });
    }

    if (errorResponse?.length) {
        res
          .status(HttpStatusCode.BAD_REQUEST)
          .send(
            messageWrapper.errorMessageResponse(HttpStatusCode.BAD_REQUEST, errorResponse)
          );
        return;
      }

    try {
      const response = await proceedToCreateTodoList(req?.body);
      res.status(response?.statusCode).send(response);
      return;
    } catch (error) {
      const response = messageWrapper.errorMessageResponse(HttpStatusCode.BAD_REQUEST, error);
      res.status(HttpStatusCode.BAD_REQUEST).send(response);
      return;
    }
};

export const getAllTodoList = async (req: express.Request, res: express.Response) => {
  try {
    const response = await proceedToGetAllTodoList();
    res.status(response?.statusCode).send(response);
    return;
  } catch (error) {
    const response = messageWrapper.errorMessageResponse(HttpStatusCode.BAD_REQUEST, error);
    res.status(HttpStatusCode.BAD_REQUEST).send(response);
    return;
  }
};


export const deleteTodoList = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const errorResponse = [];
    if (!id) {
      errorResponse.push({
        errorMessage: MessageResponse.MISSING_REQUIRED_FIELD,
        attributeName: "id",
      });
    }
    try {
      const response = await proceedToDeleteTodoList(id);
      res.status(response?.statusCode).send(response);
      return;
    } catch (error) {
      const response = messageWrapper.errorMessageResponse(HttpStatusCode.BAD_REQUEST, error);
      res.status(HttpStatusCode.BAD_REQUEST).send(response);
      return;
    }
};


export const deleteAllTodoList = async (req: express.Request, res: express.Response) => {
  try {
    const response = await proceedToDeleteAllTodoList();
    res.status(response?.statusCode).send(response);
    return;
  } catch (error) {
    const response = messageWrapper.errorMessageResponse(HttpStatusCode.BAD_REQUEST, error);
    res.status(HttpStatusCode.BAD_REQUEST).send(response);
    return;
  }
};