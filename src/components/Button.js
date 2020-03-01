import React, { Component} from 'react';
import '../styles/styles.scss';

class Button extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input type="button" id={this.props.id} value={this.props.name} className={this.props.className}
                 onClick={this.props.onClick} disabled={this.props.isDisabled}/>
            </div>
        );
    }

}

export default Button;