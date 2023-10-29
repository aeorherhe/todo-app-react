import styled from "styled-components";
import { Header, ControlBar, Search, TodoItems } from "./components/ui";

function App() {
  return (
    <StyledApp>
      <div className="main">
        <Header />
        <Search />
        <div className="list">
          <TodoItems />
          <ControlBar />
        </div>
      </div>
    </StyledApp>
  );
}

export default App;

/************************ styled component ********************************/
/************************ styled component ********************************/
const StyledApp = styled.main`
  width: 95vw;
  max-width: 45rem;
  margin: 0 auto;

  .list {
    padding: 1rem;
    background-color: var(--background);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-2);
  }
`;
