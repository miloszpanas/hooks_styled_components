import styled from "styled-components/macro";

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-right: 8px;
`

export const Label = styled.p`
color: grey;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border:0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.07);
  outline: none;

  &:last-of-type {
    margin-top: 15px;
  }

  &[type=text]:focus {
    border: 1px solid rgba(81, 203, 238, 1);
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border-radius: 10px;
    outline: none;
  }
`

export const Text = styled.h3`
  color: #666161;
  margin-bottom: 25px;
`

export const Button = styled.button`
  padding: 7px;
  margin-top: 15px;
  border: none;
  background-color: #33bdef;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #33bdefd1;
  }

  &:active {
    transform: translateY(2px);
  }

`

