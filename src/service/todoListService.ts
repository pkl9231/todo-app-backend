import {
  createTodoList,
  getTodoList,
  deleteTodoListById,
  deleteAllTodoList,
} from "../models/todoList";
import { HttpStatusCode, MessageResponse } from "../helpers/constants";
import { messageWrapper } from "../helpers/helpers";
import { TodoRequest } from "../data/todoList";

export const proceedToCreateTodoList = async (todoData: TodoRequest) => {
    try {
        const result = await createTodoList(todoData);
        return messageWrapper.successMessageResponse(HttpStatusCode.CREATED, MessageResponse.SUCCESS, result);
    } catch (error) {
      return messageWrapper.errorMessageResponse( HttpStatusCode.BAD_REQUEST, error );
    }
  };

export const proceedToGetAllTodoList = async () => {
  try {
    const result = await getTodoList();
    return messageWrapper.successMessageResponse( HttpStatusCode.OK, MessageResponse.SUCCESS, result, result?.length );
  } catch (error) {
    return messageWrapper.errorMessageResponse( HttpStatusCode.BAD_REQUEST, error );
  }
};

export const proceedToDeleteTodoList = async (id: string) => {
  try {
    const result = await deleteTodoListById(id);
    const httpCode = result ? HttpStatusCode.ACCEPTED : HttpStatusCode.BAD_REQUEST;
    const messageResponse = result ? MessageResponse.SUCCESS : MessageResponse.NO_RECORDS;
    return messageWrapper.successMessageResponse( httpCode, messageResponse, result );
  } catch (error) {
    return messageWrapper.errorMessageResponse( HttpStatusCode.BAD_REQUEST, error );
  }
};

export const proceedToDeleteAllTodoList = async () => {
    try {
      const result = await deleteAllTodoList();
      return messageWrapper.successMessageResponse( HttpStatusCode.ACCEPTED, MessageResponse.SUCCESS, result );
    } catch (error) {
      return messageWrapper.errorMessageResponse( HttpStatusCode.BAD_REQUEST, error );
    }
  };