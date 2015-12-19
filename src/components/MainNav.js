import React from "react";

class MainNav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <a>Armaturenbrett</a>
                <a className="current">Bestellungen</a>
                <a>Katalog</a>
            </nav>
        );
    }
}

export default MainNav;
