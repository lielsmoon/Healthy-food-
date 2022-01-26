import React from "react";
import Footer from "../components/common/footer";
import Header from "../components/header";
import Introduce from "../components/introduce";
import UsefulHints from "../components/usefulHints";

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
