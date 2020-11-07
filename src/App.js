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

  const addNewUser = (user) => {
    console.log(user);
  }

  return (
    <Container>
      <Grid>
        <GridItem>
          <CreateUser addNewUser={addNewUser}/>
        </GridItem>
        <GridItem>
          <UserTable data={userData}/>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
