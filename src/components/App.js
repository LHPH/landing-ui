import React, { Component } from 'react';
import '../styles/styles.scss';
import FormRedux from './Form';
import AcceptanceView from './AcceptanceView'


class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            view: 'FORM'
        }

        this.handleViews = this.handleViews.bind(this);

    }

    handleViews(initial='FORM'){

        this.setState(prevState=> ({
            ...prevState,
            view: initial
        }));
    }

    render(){
        return(
            <div>
                <div>
                    <h1>My React App</h1>
                </div>
                <div>
                    {this.state.view==='FORM' && <FormRedux handleView={this.handleViews}/>}
                    {this.state.view==='ACCEPTANCE_SAVE_LANDING' && <AcceptanceView handleView={this.handleView} />}
                </div>
            </div>
        );
    }

}

export default App;