import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import CategoriesPage from "./layouts/categoriesPage";
import AboutMePAge from "./layouts/aboutMePage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/aboutme" component={AboutMePAge} />
                <Route path="/categories" component={CategoriesPage} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    );
}

export default App;
