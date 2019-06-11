import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onClick.bind(this)}>Count Up!!</button>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);