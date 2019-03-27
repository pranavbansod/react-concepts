import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const format = function (user) {
    return user.firstName + " " + user.lastName;
}


const user = {
    firstName: 'Levi',
    lastName: 'Ackerman'
};

class Hello extends Component{
    render(){
        const name = this.props.user;
        if(name){
            return <div>Hello {format(name)}</div>;
        }
        return <div>Hello Patel</div>
    };
}


ReactDOM.render(<Hello/>,document.getElementById('root'));
