import React from "react";
import styled from 'styled-components';
import Clock from './Clock';

const Contents= () => {
  return (
    <Container>
      <Clock></Clock>
    </Container>
  )
};

const Container = styled.div`
  position : absolute;
  right: 0;
  top : 30px;
  width : 480px;
  height : calc(100% - 33px);
  color : white;
`

export default Contents;