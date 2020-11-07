import styled from "styled-components/macro";
import { CreateUser } from "./components/CreateUser";

const Container = styled.div`
  width: 600px;
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

function App() {
  return (
    <Container>
      <Grid>
        <GridItem>
          <CreateUser />
        </GridItem>
        <GridItem>
          {/* <UserTable /> */}
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
