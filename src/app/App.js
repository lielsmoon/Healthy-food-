import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import MainPage from "./layouts/mainPage";
import CategoriesPage from "./layouts/categoriesPage";
import AboutMePAge from "./layouts/aboutMePage";
import Login from "./layouts/login";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/aboutme" component={AboutMePAge} />
                <Route path="/categories" component={CategoriesPage} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    );
}

export default App;
