import React, { Component} from 'react';
import '../styles/styles.scss';
import {messages} from '../util/Messages';
import CheckImage from '../img/check.png'

//import { connect } from "react-redux";

class AcceptanceView extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={'parent'}>
                <p className={'acceptanceViewMessage'}>{messages.viewUser.acceptanceView}</p>
                <img src={CheckImage} style={{width: '10%'}}/>
            </div>
        );
    }
}

export default AcceptanceView;