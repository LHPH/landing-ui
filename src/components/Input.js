import React, { Component} from 'react';
import '../styles/styles.scss';
import CheckImage from '../img/check.png'

class Input extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <div>
                <input id={this.props.id} placeholder={this.props.placeholder}
                readOnly={this.props.isReadOnly} type={this.props.type} value={this.props.value}
                onChange={this.props.handleChange} className={this.props.className}
                disabled={this.props.isDisabled}/>
                
                <img src={CheckImage} style={{width:'2%',verticalAlign: 'middle',display:''}}/>
            </div>
        );
    }

}

export default Input;