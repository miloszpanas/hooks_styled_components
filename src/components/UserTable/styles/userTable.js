import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h3`
  color: #666161;
  margin-bottom: 25px;
`;

export const Table = styled.table`
  border-radius: 10px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.07);
`;

export const Th = styled.th`
 text-align: left;
 padding: 5px;
`

export const BodyTableRow = styled.tr`
 &:nth-child(odd) {
  background-color: whitesmoke;
 }
`

export const TableData = styled.td`
  padding: 5px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 7px;
  margin-top: 2px;
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
    transform: translateY(1px);
  }

`
