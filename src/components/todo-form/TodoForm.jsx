import React from "react";
import styled from "styled-components";

const TodoForm = ({ state, dispatch }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      title: state.inputValue,
      id: Date.now(),
      completed: false,
    };

    dispatch({ type: "ADD", payload: newTodo });
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        type="text"
        value={state.inputValue}
        onChange={(e) => dispatch({ type: "value", payload: e.target.value })}
      />
      <Button>Add todo</Button>
    </form>
  );
};

export default TodoForm;

const Input = styled.input`
  width: 70%;
  border-radius: 10px;
  padding: 12px 15px;
  margin: 8px 0;
  box-sizing: border-box;
  color: #000;
  text-align: center;
`;

const Button = styled.button`
  background-color: #a13d19;
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #8f5742;
  }
`;
