import React from "react";

import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Container from "components/Container/Container";

import ErrorBoundaries from "utils/ErrorBoundaries";

function App() {
  return (
    <Container>
      <ErrorBoundaries>
        <Header />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Main />
      </ErrorBoundaries>
    </Container>
  );
}

export default App;
