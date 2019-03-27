import React, {Component} from "react";

const format = function (user) {
    return user.firstName + " " + user.lastName;
};

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const name = this.props.user;
        if (name) {
            return <div>
                <div>Hello {format(name)}</div>
                <p>{this.state.time.toLocaleTimeString()}</p></div>;
        }
        return <div><h1>Hello Patel</h1><p>{this.state.time.toLocaleTimeString()}</p></div>
    };
}

export default Timer