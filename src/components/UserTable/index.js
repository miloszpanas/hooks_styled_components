import React from "react";
import { Container, Text, Table, Th, BodyTableRow, TableData, ButtonContainer, Button } from "./styles/userTable";

export const UserTable = ({ data, deleteUser }) => {
  return (
    <Container>
      <Text>User data</Text>
      <Table>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Surname</Th>
            <Th>Actions</Th>
          </tr>
        </thead>

        <tbody>
          {data.map((entry, idx) => {
            return (
              <BodyTableRow>
                <TableData>{idx + 1}</TableData>
                <TableData>{entry.name}</TableData>
                <TableData>{entry.surname}</TableData>
                <TableData>
                  <ButtonContainer>
                    <Button onClick={() => deleteUser(entry.id)}>Remove</Button>
                    <Button>Edit</Button>
                  </ButtonContainer>
                </TableData>
              </BodyTableRow>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
