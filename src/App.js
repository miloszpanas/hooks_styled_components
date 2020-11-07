import { useState } from "react";
import styled from "styled-components/macro";
import { CreateUser } from "./components/CreateUser";
import { UserTable } from "./components/UserTable";

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
`

const GridItem = styled.div`
  width: 50%;
`

const userData = [
  {
    id: 1,
    name: "Anna",
    surname: "Taylor"
  },
  {
    id: 2,
    name: "Michael",
    surname: "Knight"
  },
  {
    id: 3,
    name: "Oliver",
    surname: "Stone"
  }
]

function App() {

  const [users, setUsers] = useState(userData);
  const [isEdited, setIsEdited] = useState(false);

  const addNewUser = (user) => {
    setUsers([ ...users, user ]);
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <Container>
      <Grid>
        <GridItem>
          <CreateUser addNewUser={addNewUser}/>
        </GridItem>
        <GridItem>
          <UserTable data={users} deleteUser={deleteUser}/>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
