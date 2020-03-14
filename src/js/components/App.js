import React, { Component } from 'react';
import '../../css/styles.scss';
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
                <div className={'parent'} style={{margin:'1%'}}>
                    <h1>MKT Landing</h1>
                    <p>Ingrese su informacion para contactarlo</p>
                    <br />
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