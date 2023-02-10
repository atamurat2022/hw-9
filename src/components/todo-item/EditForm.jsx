import React from "react";
import styled from "styled-components";

const EditForm = ({ dispatch, state, setIsVisible, todo }) => {
  const editTodoHandler = (id) => {
    dispatch({ type: "EDIT", payload: id });
    setIsVisible(false);
  };
  return (
    <div>
      <Input
        type="text"
        value={state.editInputValue}
        onChange={(e) =>
          dispatch({ type: "EditValue", payload: e.target.value })
        }
      />
      <Button onClick={() => editTodoHandler(todo.id)}>ok</Button>
      <Button onClick={() => setIsVisible(false)}>cancel</Button>
    </div>
  );
};

export default EditForm;

const Input = styled.input`
  width: 68%;
  border-radius: 10px;
  padding: 8px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #fff;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  background-color: #984017;
  border: none;
  color: black;
  padding: 14px 20px;
  margin-left: 5px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
