import { useState } from "react";
import Landing from "./pages/Landing";
import Results from "./pages/Results";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={ <Landing /> }/>
          <Route path="/search/:query" exact element={ <Results/> }/>
          <Route path="*" element={ <Error /> }/>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
