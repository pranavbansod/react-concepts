import React, {Component} from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.setName = this.setName.bind(this);
        this.submitName = this.submitName.bind(this);
    }

    setName(event) {
        let name = event.target.value;
        this.setState({name: name})
    }

    render() {
        return <div>
            <form onSubmit={this.submitName}>
                <label>Name</label>
                <input onChange={this.setName}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    }

    submitName(event) {
        alert(`Name = ${this.state.name}`)
    }
}

export default Form;