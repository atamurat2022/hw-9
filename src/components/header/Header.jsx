import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Todo List Atamurat</h1>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  width: 80%;
  margin: 24px auto;
  padding: 30px;
  text-align: center;
  background: #800000;
  color: white;
  border-radius: 15px;
`;
