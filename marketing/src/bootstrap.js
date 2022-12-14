import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    console.log('Marketing mount called', el);
    if(!el){return;}
    ReactDOM.render(
        <App />,
        el
    );
}

if(process.env.NODE_ENV === 'development'){
    mount(document.getElementById('marketing_dev_root'));
}

export { mount };