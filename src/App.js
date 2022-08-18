import React, {Suspense} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import { ThemeProvider } from "styled-components";



import Header from "./components/Header";
import Pages from "./pages/Pages";
import {Container} from "./components/styled/Container.styled";

const App = () => {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
      backGround:
        "linear-gradient(to bottom, rgba(255, 0, 0, 0.34),rgba(0, 0, 0, 0.34),rgba(255, 255, 255, 0.34))",
      backGroundCard:
        "linear-gradient(35deg, rgba(255, 0, 0, 0.84),rgba(255, 255, 255, 0.84),rgba(0, 0, 0, 0.54)25%)",
      BoxShaodow: "0 0 10px rgba(0, 0, 0, 0.5)",
      TextShadow: "10px 10px 10px rgba(255, 230, 230, 0.303)",
    },
    mobile: "820px",
  };

  return (
    <Suspense fallback={null}>
    <div className="app-container">
    <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Container className="container">
      <Pages />
      </Container>
    </Router>
    </ThemeProvider>
    </div>
    </Suspense>
  );
};

export default App;
