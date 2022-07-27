import React,{useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookStore from './BookStore';
import NavBar from "./NavBar";
import Reviews from "./Reviews";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
    <NavBar isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/bookstore">
          <BookStore />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
