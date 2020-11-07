import React from "react";
import { Container, Text, Table, Th, BodyTableRow, TableData } from "./styles/userTable";

export const UserTable = ({ data }) => {
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
                <TableData><button></button></TableData>
              </BodyTableRow>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
