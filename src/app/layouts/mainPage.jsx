import React from "react";
import Footer from "../components/common/footer/footer";
import Header from "../components/mainPage/header/header";
import Introduce from "../components/mainPage/introduce/introduce";
import UsefulHints from "../components/mainPage/usefulHints/usefulHints";

const MainPage = () => {
    return (
        <>
            <Header />
            <Introduce />
            <UsefulHints />
            <Footer />
        </>
    );
};

export default MainPage;
