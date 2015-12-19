import React from "react";
import MainNav from "./MainNav";

class MainHeader extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="logo">Koofmich 3000&#8482; – Verwaltung</div>
                <MainNav>

                </MainNav>
            </header>
        );
    }
}

export default MainHeader;
