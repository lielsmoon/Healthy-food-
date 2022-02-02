import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import MainPage from "./layouts/mainPage";
import CategoriesPage from "./layouts/categoriesPage";
import AboutMe from "./layouts/aboutMe";
import Login from "./layouts/login";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/categories" component={CategoriesPage} />
                <Route path="/" component={MainPage} />
            </Switch>
        </div>
    );
}

export default App;
