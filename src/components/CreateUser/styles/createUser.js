import styled from "styled-components/macro";

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.p`
color: grey;
`

export const Input = styled.input`
  padding: 7px;
  margin-top: 15px;
  border-radius: 10px;
  border:0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.07);

  &[type=text]:focus {
    border: 1px solid rgba(81, 203, 238, 1);
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border-radius: 10px;
    outline: none;
  }
`

export const Text = styled.h3`
  color: #666161;
  margin-bottom: 15px;
`

