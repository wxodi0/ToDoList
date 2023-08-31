import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";

const TodoList = ({todoList, handleClickRemove}) => {
  return (
    <Container>
      {todoList.map((todo ,index)=> (
        <TodoRow 
        todo={todo} 
        key={index} 
        index={index}
        handleClickRemove = {handleClickRemove}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  left: 7.4%;
  width: 80%;
`;

export default TodoList;