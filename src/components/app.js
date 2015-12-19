import React from "react";
import MainHeader from "./MainHeader";
import Page from "./Page";
import Orders from "./Orders";


export class App extends React.Component {
    render() {
        return (
            <div className="app">
                <MainHeader />
                <Page>
                    <Orders />
                </Page>
            </div>
        );
    }
}

export default App;
