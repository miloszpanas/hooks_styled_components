import styled from "styled-components/macro";

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
        <GridItem>hello asdasdas</GridItem>
        <GridItem>hello asdasdas</GridItem>
      </Grid>
    </Container>
  );
}

export default App;
