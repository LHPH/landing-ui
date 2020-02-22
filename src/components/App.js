import React, { Component } from 'react';
import '../styles/styles.scss';
import Form from './Form';


class App extends Component{

    render(){
        return(
            <div>
                <div>
                    <h1>My React App</h1>
                </div>
                <div>
                    <Form />
                </div>
            </div>
        );
    }

}

export default App;