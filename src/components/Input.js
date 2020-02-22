import React, { Component} from 'react';
import '../styles/styles.scss';

class Input extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <div>
                <input id={this.props.id} maxLength={this.props.maxLength} minLength={this.props.minLength}
                placeholder={this.props.placeholder} readOnly={this.props.isReadOnly}
                pattern={this.props.pattern} type={this.props.type} value={this.props.value}
                onChange={this.props.handleChange} className={this.props.className}/>
            </div>
        );
    }

}

export default Input;