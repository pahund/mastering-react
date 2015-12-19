import React from "react";
import ReactDOM from "react-dom";

class Heading extends React.Component {
    render() {
        return <h1 style={{color: "hotpink" }}>{this.props.children}</h1>
    }
}

class Greeter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Fremder"
        };
    }
    render() {
        return (
            <div>
                <Heading>Hallo {this.state.name}!</Heading>
                <input ref="name" />
                <button onClick={this.handleGreet.bind(this)}>Greet!!</button>
            </div>
        )
    }

    handleGreet() {
        this.setState({
            name: this.refs.name.value
        });
    }

    componentWillMount() {
        console.log("[PH_LOG] component will mount"); // PH_TODO: REMOVE
    }

    componentDidMount() {
        console.log("[PH_LOG] component did mount"); // PH_TODO: REMOVE
    }

    componentWillReceiveProps() {
        console.log("[PH_LOG] component will receive props"); // PH_TODO: REMOVE
    }

    shouldComponentUpdate(nextProps, nextState) {
        const shouldUpdate = nextState.name !== this.state.name;
        console.log("[PH_LOG] should component update?", shouldUpdate); // PH_TODO: REMOVE
        return shouldUpdate;
    }

    componentWillUpdate() {
        console.log("[PH_LOG] component will update"); // PH_TODO: REMOVE
    }

    componentDidUpdate() {
        console.log("[PH_LOG] component did update"); // PH_TODO: REMOVE
    }

    componentWillUnount() {
        console.log("[PH_LOG] component will unmount"); // PH_TODO: REMOVE
    }



}

const GreeterFactory = React.createFactory(Greeter);
class App extends React.Component {
    render() {
        return <Greeter name="WORRRRLD" />
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
