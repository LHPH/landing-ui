import React, { Component} from 'react';
import '../styles/styles.scss';

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
            </div>
        );
    }

}

export default Input;