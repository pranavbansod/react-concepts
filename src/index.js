import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

const user = {
    firstName: 'Levi',
    lastName: 'Ackerman'
};

ReactDOM.render(<App user={user}/>, document.getElementById('root'));
