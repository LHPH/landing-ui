import React, { Component } from 'react';

import '../../css/styles.scss';

import FormRedux from './Form';
import AcceptanceView from './AcceptanceView'


class LandingRecord extends Component{
    constructor(props){
        super(props);

        this.state = {
            view: 'FORM'
        }

        this.handleViews = this.handleViews.bind(this);

        this.props.hiddenMenu();

    }

    handleViews(initial='FORM'){

        this.setState(prevState=> ({
            ...prevState,
            view: initial
        }));
    }

    render(){
        return(
                <div className={'test'}>
                    {this.state.view==='FORM' && 
                        <div>
                            <div className={'parent'}>
                                <p>Ingrese su informacion para contactarlo</p>
                            </div>
                            <FormRedux handleView={this.handleViews}/>
                        </div>
                    }
                    {this.state.view==='ACCEPTANCE_SAVE_LANDING' && <AcceptanceView handleView={this.handleView} />}
                </div>
        )
    };
}

export default LandingRecord;