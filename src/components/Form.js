import React, { Component} from 'react';
import Input from './Input';
import Button from './Button';
import styles from '../styles/styles.scss';
import Functions from '../util/Functions';
import {messages} from '../util/Messages';


class Form extends Component{

    constructor(props){
        super(props);

        this.state= {

            firstNameInputConfig:{
                id: 'firstNameInput',
                maxLength: 50,
                minLength: 3,
                placeholder: 'Primer Nombre',
                isReadOnly: false,
                pattern: /^[A-Za-z\s]+$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            secondNameInputConfig:{
                id: 'secondNameInput',
                maxLength: 50,
                minLength: 3,
                placeholder: 'Segundo Nombre',
                isReadOnly: false,
                pattern: /^[A-Za-z\s]+$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            lastNameInputConfig:{
                id: 'lastNameInput',
                maxLength: 50,
                minLength: 3,
                placeholder: 'Apellido Paterno',
                isReadOnly: false,
                pattern: /^[A-Za-z\s]+$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            lastSecondNameInputConfig:{
                id: 'lastSecondNameInput',
                maxLength: 50,
                minLength: 3,
                placeholder: 'Apellido Materno',
                isReadOnly: false,
                pattern: /^[A-Za-z\s]+$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            emailInputConfig:{
                id: 'emailInput',
                maxLength: 50,
                minLength: 3,
                placeholder: 'Email',
                isReadOnly: false,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            homePhoneInputConfig:{
                id: 'homePhoneInput',
                maxLength: 10,
                minLength: 10,
                placeholder: 'Telefono de casa',
                isReadOnly: false,
                pattern: /^[0-9]+$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            cellPhoneInputConfig:{
                id: 'cellPhoneInput',
                maxLength: 10,
                minLength: 10,
                placeholder: 'Telefono movil',
                isReadOnly: false,
                pattern: /^[0-9]+$/,
                type: 'text',
                className: 'defaultTextField',
                value: '',
                isDisabled:false
            },
            buttonAcceptConfig:{
                id: 'buttonAccept',
                name: 'Aceptar',
                className: 'buttonAccept',
                isDisabled: false
            },
            mode:'input',
            folio:0,
            errors:{
                firstName:'',
                secondName:'',
                lastName:'',
                secondLastName:'',
                email:'',
                homePhone:'',
                cellPhone:'' 
            }

        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeLastSecondName = this.handleChangeLastSecondName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeHomePhone = this.handleChangeHomePhone.bind(this);
        this.handleChangeCellPhone = this.handleChangeCellPhone.bind(this);
        this.onClickButtonAccept = this.onClickButtonAccept.bind(this);

        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateSecondName = this.validateSecondName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateLastSecondName = this.validateLastSecondName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateHomePhone = this.validateHomePhone.bind(this);
        this.validateCellPhone = this.validateCellPhone.bind(this);
    }

    componentDidMount(){
        console.log('Errors: '+this.state.errors.firstName);
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

    handleChangeSecondName(event){

        let value = event.target.value;
        this.setState(prevState=>({
            secondNameInputConfig:{
                ...prevState.secondNameInputConfig,
                value: value
            }
        }));
    }

    handleChangeLastName(event){

        let value = event.target.value;
        this.setState(prevState=>({
            lastNameInputConfig:{
                ...prevState.lastNameInputConfig,
                value: value
            }
        }));
    }

    handleChangeLastSecondName(event){

        let value = event.target.value;
        this.setState(prevState=>({
            lastSecondNameInputConfig:{
                ...prevState.lastSecondNameInputConfig,
                value: value
            }
        }));
    }

    handleChangeEmail(event){

        let value = event.target.value;
        this.setState(prevState=>({
            emailInputConfig:{
                ...prevState.emailInputConfig,
                value: value
            }
        }));
    }

    handleChangeHomePhone(event){

        let value = event.target.value;
        this.setState(prevState=>({
            homePhoneInputConfig:{
                ...prevState.homePhoneInputConfig,
                value: value
            }
        }));
    }

    handleChangeCellPhone(event){

        let value = event.target.value;
        this.setState(prevState=>({
            cellPhoneInputConfig:{
                ...prevState.cellPhoneInputConfig,
                value: value
            }
        }));
    }

    validateFirstName(){
        
        let valueFirstName = document.getElementById(this.state.firstNameInputConfig.id).value;
        let pattern = this.state.firstNameInputConfig.pattern;
        let min = this.state.firstNameInputConfig.minLength;
        let max = this.state.firstNameInputConfig.maxLength;

        if(!Functions.validatePattern(valueFirstName,pattern)){
            return messages.validation.firstName.format;
        }

        switch(Functions.validateMaxAndMinLength(valueFirstName,min,max)){
            case 1:
                return messages.validation.firstName.minLength;
            case 2:
                return messages.validation.firstName.maxLength;
            default:
                return '';
        }
    }

    validateLastName(){
        
        let valueLastName = document.getElementById(this.state.lastNameInputConfig.id).value;
        let pattern = this.state.lastNameInputConfig.pattern;
        let min = this.state.lastNameInputConfig.minLength;
        let max = this.state.lastNameInputConfig.maxLength;

        if(!Functions.validatePattern(valueLastName,pattern)){
            return messages.validation.lastName.format;
        }

        switch(Functions.validateMaxAndMinLength(valueLastName,min,max)){
            case 1:
                return messages.validation.lastName.minLength;
            case 2:
                return messages.validation.lastName.maxLength;
            default:
                return '';
        }
    }



    onClickButtonAccept(){

        let resultFirstName=this.validateFirstName();
        let resultLastName = this.validateLastName();

        let valueLastSecondName = document.getElementById(this.state.lastSecondNameInputConfig.id).value;
        let valueEmail = document.getElementById(this.state.emailInputConfig.id).value;
        let valueHomePhone = document.getElementById(this.state.homePhoneInputConfig.id).value;
        let valueCellPhone = document.getElementById(this.state.cellPhoneInputConfig.id).value;

        this.setState(prevState=>({
            errors:{
                ...prevState.errors,
                firstName: resultFirstName,
                lastName: resultLastName
            }
        }));
        
    }

    render(){
        return(
            <div className='parent'>
                { this.state.mode==='input' && 
                    <div className='fieldSet'>

                            <div><label className={'fieldNamesLabel'}>Primer Nombre:</label></div>
                            <Input  
                                id={this.state.firstNameInputConfig.id}
                                placeholder={this.state.firstNameInputConfig.placeholder} 
                                isReadOnly={this.state.firstNameInputConfig.isReadOnly}
                                type={this.state.firstNameInputConfig.type} 
                                value={this.state.firstNameInputConfig.value} 
                                handleChange = {this.handleChangeFirstName}
                                className={this.state.firstNameInputConfig.className}
                                isDisabled={this.state.firstNameInputConfig.isDisabled}
                            />
                            <div className={this.state.errors.firstName===''?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.firstName}</span>
                            </div>

                            <div><label className="fieldNamesLabel">Segundo Nombre:</label></div>
                            <Input 
                                id={this.state.secondNameInputConfig.id}
                                placeholder={this.state.secondNameInputConfig.placeholder} 
                                isReadOnly={this.state.secondNameInputConfig.isReadOnly}
                                type={this.state.secondNameInputConfig.type} 
                                value={this.state.secondNameInputConfig.value} 
                                handleChange = {this.handleChangeSecondName}
                                className={this.state.secondNameInputConfig.className}
                                isDisabled={this.state.secondNameInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Apellido Paterno:</label></div>
                            <Input 
                                id={this.state.lastNameInputConfig.id}
                                placeholder={this.state.lastNameInputConfig.placeholder} 
                                isReadOnly={this.state.lastNameInputConfig.isReadOnly}
                                type={this.state.lastNameInputConfig.type} 
                                value={this.state.lastNameInputConfig.value} 
                                handleChange = {this.handleChangeLastName}
                                className={this.state.lastNameInputConfig.className}
                                isDisabled={this.state.lastNameInputConfig.isDisabled}
                            />
                            <div className={this.state.errors.lastName===''?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.lastName}</span>
                            </div>

                            <div><label className="fieldNamesLabel">Apellido Materno:</label></div>
                            <Input 
                                id={this.state.lastSecondNameInputConfig.id}
                                placeholder={this.state.lastSecondNameInputConfig.placeholder} 
                                isReadOnly={this.state.lastSecondNameInputConfig.isReadOnly}
                                type={this.state.lastSecondNameInputConfig.type} 
                                value={this.state.lastSecondNameInputConfig.value} 
                                handleChange = {this.handleChangeLastSecondName}
                                className={this.state.lastSecondNameInputConfig.className}
                                isDisabled={this.state.lastSecondNameInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Email:</label></div>
                            <Input 
                                id={this.state.emailInputConfig.id}
                                placeholder={this.state.emailInputConfig.placeholder} 
                                isReadOnly={this.state.emailInputConfig.isReadOnly}
                                type={this.state.emailInputConfig.type} 
                                value={this.state.emailInputConfig.value} 
                                handleChange = {this.handleChangeEmail}
                                className={this.state.emailInputConfig.className}
                                isDisabled={this.state.emailInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Telefono de Casa:</label></div>
                            <Input 
                                id={this.state.homePhoneInputConfig.id}
                                placeholder={this.state.homePhoneInputConfig.placeholder} 
                                isReadOnly={this.state.homePhoneInputConfig.isReadOnly}
                                type={this.state.homePhoneInputConfig.type} 
                                value={this.state.homePhoneInputConfig.value} 
                                handleChange = {this.handleChangeHomePhone}
                                className={this.state.homePhoneInputConfig.className}
                                isDisabled={this.state.homePhoneInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Telefono Movil:</label></div>
                            <Input 
                                id={this.state.cellPhoneInputConfig.id}
                                placeholder={this.state.cellPhoneInputConfig.placeholder} 
                                isReadOnly={this.state.cellPhoneInputConfig.isReadOnly}
                                type={this.state.cellPhoneInputConfig.type} 
                                value={this.state.cellPhoneInputConfig.value} 
                                handleChange = {this.handleChangeCellPhone}
                                className={this.state.cellPhoneInputConfig.className}
                                isDisabled={this.state.cellPhoneInputConfig.isDisabled}
                            />
                            <br />
                            <Button name={this.state.buttonAcceptConfig.name}
                                    className={this.state.buttonAcceptConfig.className}
                                    isDisabled={this.state.buttonAcceptConfig.isDisabled}
                                    onClick={this.onClickButtonAccept}/>

                    </div>
                }
                { this.state.mode==='confirm' && 
                    <div>
                        <div><label className="fieldNamesLabel">Primer Nombre:</label></div>
                            <Input  
                                id={this.state.firstNameInputConfig.id}
                                placeholder={this.state.firstNameInputConfig.placeholder} 
                                isReadOnly={this.state.firstNameInputConfig.isReadOnly}
                                type={this.state.firstNameInputConfig.type} 
                                value={this.state.firstNameInputConfig.value} 
                                handleChange = {this.handleChangeFirstName}
                                className={this.state.firstNameInputConfig.className}
                                isDisabled={this.state.firstNameInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Segundo Nombre:</label></div>
                            <Input 
                                id={this.state.secondNameInputConfig.id}
                                placeholder={this.state.secondNameInputConfig.placeholder} 
                                isReadOnly={this.state.secondNameInputConfig.isReadOnly}
                                type={this.state.secondNameInputConfig.type} 
                                value={this.state.secondNameInputConfig.value} 
                                handleChange = {this.handleChangeSecondName}
                                className={this.state.secondNameInputConfig.className}
                                isDisabled={this.state.secondNameInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Apellido Paterno:</label></div>
                            <Input 
                                id={this.state.lastNameInputConfig.id}
                                placeholder={this.state.lastNameInputConfig.placeholder} 
                                isReadOnly={this.state.lastNameInputConfig.isReadOnly}
                                type={this.state.lastNameInputConfig.type} 
                                value={this.state.lastNameInputConfig.value} 
                                handleChange = {this.handleChangeLastName}
                                className={this.state.lastNameInputConfig.className}
                                isDisabled={this.state.lastNameInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Apellido Materno:</label></div>
                            <Input 
                                id={this.state.lastSecondNameInputConfig.id}
                                placeholder={this.state.lastSecondNameInputConfig.placeholder} 
                                isReadOnly={this.state.lastSecondNameInputConfig.isReadOnly}
                                type={this.state.lastSecondNameInputConfig.type} 
                                value={this.state.lastSecondNameInputConfig.value} 
                                handleChange = {this.handleChangeLastSecondName}
                                className={this.state.lastSecondNameInputConfig.className}
                                isDisabled={this.state.lastSecondNameInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Email:</label></div>
                            <Input 
                                id={this.state.emailInputConfig.id}
                                placeholder={this.state.emailInputConfig.placeholder} 
                                isReadOnly={this.state.emailInputConfig.isReadOnly}
                                type={this.state.emailInputConfig.type} 
                                value={this.state.emailInputConfig.value} 
                                handleChange = {this.handleChangeEmail}
                                className={this.state.emailInputConfig.className}
                                isDisabled={this.state.emailInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Telefono de Casa:</label></div>
                            <Input 
                                id={this.state.homePhoneInputConfig.id}
                                placeholder={this.state.homePhoneInputConfig.placeholder} 
                                isReadOnly={this.state.homePhoneInputConfig.isReadOnly}
                                type={this.state.homePhoneInputConfig.type} 
                                value={this.state.homePhoneInputConfig.value} 
                                handleChange = {this.handleChangeHomePhone}
                                className={this.state.homePhoneInputConfig.className}
                                isDisabled={this.state.homePhoneInputConfig.isDisabled}
                            />

                            <div><label className="fieldNamesLabel">Telefono Movil:</label></div>
                            <Input 
                                id={this.state.cellPhoneInputConfig.id}
                                placeholder={this.state.cellPhoneInputConfig.placeholder} 
                                isReadOnly={this.state.cellPhoneInputConfig.isReadOnly}
                                type={this.state.cellPhoneInputConfig.type} 
                                value={this.state.cellPhoneInputConfig.value} 
                                handleChange = {this.handleChangeCellPhone}
                                className={this.state.cellPhoneInputConfig.className}
                                isDisabled={this.state.cellPhoneInputConfig.isDisabled}
                            />

                            <Button name={this.state.buttonAcceptConfig.name}
                                    className={this.state.buttonAcceptConfig.className}
                                    isDisabled={this.state.buttonAcceptConfig.isDisabled}
                                    onClick={this.onClickButtonAccept}/>
                    </div>
                }
            </div>
        );
    }

}


export default Form;