import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


/*function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);*/


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
