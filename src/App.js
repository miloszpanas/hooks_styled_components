import { useState } from "react";
import styled from "styled-components/macro";
import { CreateUser } from "./components/CreateUser";
import { UserTable } from "./components/UserTable";
import { EditUser } from "./components/EditUser";

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
`;

const GridItem = styled.div`
  width: 50%;
`;

const userData = [
  {
    id: 1,
    name: "Anna",
    surname: "Taylor",
  },
  {
    id: 2,
    name: "Michael",
    surname: "Knight",
  },
  {
    id: 3,
    name: "Oliver",
    surname: "Stone",
  },
];

const initialState = {
  id: null,
  name: "",
  surname: "",
};

function App() {
  const [users, setUsers] = useState(userData);
  const [isEdited, setIsEdited] = useState(false);
  const [clickedUser, setClickedUser] = useState(initialState);

  const addNewUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const setCurrentUser = (user) => {
    setIsEdited(true);
    setClickedUser({ id: user.id, name: user.name, surname: user.surname });
  };

  const updateEditedUser = (idx, updatedUser) => {
    setIsEdited(false);
    setUsers(users.map((user) => (user.id === idx ? updatedUser : user)));
  };

  return (
    <Container>
      <Grid>
        <GridItem>
          {isEdited ? (
            <EditUser
              clickedUser={clickedUser}
              updateEditedUser={updateEditedUser}
            />
          ) : (
            <CreateUser addNewUser={addNewUser} />
          )}
        </GridItem>
        <GridItem>
          <UserTable
            setCurrentUser={setCurrentUser}
            data={users}
            deleteUser={deleteUser}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
