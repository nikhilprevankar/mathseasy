import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense, useMemo } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./App.css";

const HomePage = lazy(() => import("./pages/landing/HomePage"));

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
