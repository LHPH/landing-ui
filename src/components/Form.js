import React, { Component} from 'react';
import Input from './Input';
import '../styles/styles.scss';


class Form extends Component{

    constructor(props){
        super(props);

        this.state= {

            firstNameInputConfig:{
                id: 'firstNameInput',
                maxLength: 40,
                minLength: 3,
                placeholder: 'Primer Nombre',
                isReadOnly: false,
                pattern: '[A-Za-z\s]+',
                type: 'text',
                className: 'defaultTextField',
                value: ''
            }

        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);

    }

    handleChangeFirstName(event){

        let value = event.target.value;
        this.setState(prevState=>({
            firstNameInputConfig:{
                ...prevState.firstNameInputConfig,
                value: value
            }
        }));
    }

    render(){
        return(
            <div>
                <div className="fieldSet">

                        <div><label className="fieldNamesLabel">Primer Nombre:</label></div>
                        <Input 
                               maxLength={this.state.firstNameInputConfig.maxLength}
                               minLength={this.state.firstNameInputConfig.minLength} 
                               placeholder={this.state.firstNameInputConfig.placeholder} 
                               isReadOnly={this.state.firstNameInputConfig.isReadOnly}
                               pattern={this.state.firstNameInputConfig.pattern} 
                               type={this.state.firstNameInputConfig.type} 
                               value={this.state.firstNameInputConfig.value} 
                               handleChange = {this.handleChangeFirstName}
                               className={this.state.firstNameInputConfig.className}
                        />
                </div>
            </div>
        );
    }

}


export default Form;