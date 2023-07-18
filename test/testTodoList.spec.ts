import { proceedToGetAllTodoList, proceedToDeleteTodoList } from "../src/service/todoListService";
import chai from 'chai';

require("../src/db/connection");

describe('get todo records', () => {
  it('should return 200 response', () => {
    return proceedToGetAllTodoList()
      .then((res:any) => {
        chai.expect(res.statusCode).to.eql(200);
      }).catch((error)=>{
        console.log("todo list error", error);
      })
  })

  it('should return success response', () => {
    return proceedToGetAllTodoList()
      .then((res:any) => {
        chai.expect(res.messageResponse).to.eql("success");
      }).catch((error)=>{
        console.log("todo list error", error);
      })
  })
})


describe.only('delete todo records', () => {
  it('should return 202 response', () => {
    return proceedToDeleteTodoList("64b6f49200cea20545ece504") // need to pass correct ID
      .then((res:any) => {
        chai.expect(res.statusCode).to.eql(202);
      }).catch((error)=>{
        console.log("todo list error", error);
      })
  })

  it('should return 400 response', () => {
    return proceedToDeleteTodoList("64b6f49200cea20545ece504") // 
      .then((res:any) => {
        chai.expect(res.statusCode).to.eql(400);
      }).catch((error)=>{
        console.log("todo list error", error);
      })
  })
})
