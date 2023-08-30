import './App.css';
import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    query : "",
  };

  render(){
    return (
      <Container query={this.state.query}>
      <Input placeholder='테마를 입력하세요' onKeyPress={this.handleInputKeyPress}></Input>
      </Container>
    )  
  }
  
  handleInputKeyPress = e => {
    if(e.key === 'Enter'){
      this.setState({
        query : e.target.value,
      });
      e.target.value = "";
    }
  }
}

const Input = styled.input`
  position : absolute;
  top : 0;
  right : 0;
  width : 190px;
  height : 33px;
  font-size : 20px;
  background: transparent;
  outline: none;
  border: none;
  color: white;

`;

const Container = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height:100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 60%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/2800x1800?${props => props.query});
  background-size: cover;
`;

export default App;
