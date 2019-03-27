import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component{
    render(){
        return <div>Hello {this.props.name}</div>;
    };
}


ReactDOM.render(<Hello name="Pranav"/>,document.getElementById('root'));
