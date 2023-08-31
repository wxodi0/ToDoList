import React from "react";
import styled from 'styled-components';
import TodoList from './TodoList';

class todo extends React.Component {
  state = {
    todoList : []
  };
  render(){
    return (
      <Container>
        <Input placeholder="오늘 할 일" onKeyPress={this.handleInputKeyPress}/>
        <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}/>
      </Container>
    )
  }

  componentDidMount() {
    this.setState({
      todoList : JSON.parse(localStorage.getItem("todoList")) || []
    })
  }

  handleInputKeyPress = e => {
    const {
      target : {value}
    } = e;
    if(e.key === 'Enter'){
      this.setState(
        state => ({ todoList : [...state.todoList, value] }),
        () => 
          localStorage.setItem("todoList",JSON.stringify(this.state.todoList))
      );
      e.target.value = "";
    }
  }

  handleClickRemove = index => {
    if(window.confirm(`${this.state.todoList[index]}이(를) 목록에서 지우시겠습니까?`)){
      this.setState(
        (state) => ({
        todoList : [
          ...state.todoList.slice(0, index),
          ...state.todoList.slice(index + 1),
        ]
      }),
        () =>
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      )
    }
  }
}

const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default todo;