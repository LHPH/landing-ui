import React, { Component} from 'react';
import Input from './Input';
import Button from './Button';
import  '../../css/styles.scss';
import Functions from '../util/Functions';
import {messages} from '../util/Messages';
import { connect } from "react-redux";
import { sendLanding } from '../redux/actions';
import LandingServices from '../services/LandingServices';

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
                isDisabled:false,
                isOptional: false
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
                isDisabled:false,
                isOptional: true
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
                isDisabled:false,
                isOptional: false
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
                isDisabled:false,
                isOptional: true
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
                isDisabled:false,
                isOptional: false
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
                isDisabled:false,
                isOptional: true
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
                isDisabled:false,
                isOptional: false
            },
            buttonAcceptConfig:{
                id: 'buttonAccept',
                name: 'Aceptar',
                className: 'buttonAccept',
                isDisabled: false
            },
            buttonCancelConfig:{
                id: 'buttonCancel',
                name: 'Cancelar',
                className: 'buttonCancel',
                isDisabled: false
            },
            buttonConfirmConfig:{
                id: 'buttonConfirm',
                name: 'Confirmar',
                className: 'buttonConfirm',
                isDisabled: false
            },
            mode:'input',
            folio:0,
            errors:{
                firstName:null,
                secondName:null,
                lastName:null,
                secondLastName:null,
                email:null,
                homePhone:null,
                cellPhone:null 
            }

        }

        this.landing = {
            firstName: null,
            secondName: null,
            lastName: null,
            lastSecondName: null,
            email: null,
            homePhone: null,
            cellPhone: null
        }

        if(this.props.landing!==undefined && this.props.landing.firstName!=undefined){

            this.landing.firstName = this.props.landing.firstName;
            this.landing.secondName = this.props.landing.secondName;
            this.landing.lastName = this.props.landing.lastName;
            this.landing.lastSecondName = this.props.landing.lastSecondName;
            this.landing.email = this.props.landing.email;
            this.landing.homePhone = this.props.landing.homePhone;
            this.landing.cellPhone = this.props.landing.cellPhone;
        }        

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeLastSecondName = this.handleChangeLastSecondName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeHomePhone = this.handleChangeHomePhone.bind(this);
        this.handleChangeCellPhone = this.handleChangeCellPhone.bind(this);

        this.onClickButtonAccept = this.onClickButtonAccept.bind(this);
        this.onClickButtonCancel = this.onClickButtonCancel.bind(this);
        this.onClickButtonConfirm = this.onClickButtonConfirm.bind(this);

        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateSecondName = this.validateSecondName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateLastSecondName = this.validateLastSecondName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateHomePhone = this.validateHomePhone.bind(this);
        this.validateCellPhone = this.validateCellPhone.bind(this);

        this.enableOrDisabledFields = this.enableOrDisabledFields.bind(this);
        Form.setStyleMsgErrorField = Form.setStyleMsgErrorField.bind(this);
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
                return messages.validation.firstName.minLength+min;
            case 2:
                return messages.validation.firstName.maxLength+max;
            default:
                return '';
        }
    }

    validateSecondName(){
        
        let valueSecondName = document.getElementById(this.state.secondNameInputConfig.id).value;
        let pattern = this.state.secondNameInputConfig.pattern;
        let min = this.state.secondNameInputConfig.minLength;
        let max = this.state.secondNameInputConfig.maxLength;

        if(valueSecondName==='' && this.state.secondNameInputConfig.isOptional){

            return '';
        }
        else{

            if(!Functions.validatePattern(valueSecondName,pattern)){
                return messages.validation.secondName.format;
            }
    
            switch(Functions.validateMaxAndMinLength(valueSecondName,min,max)){
                case 1:
                    return messages.validation.secondName.minLength+min;
                case 2:
                    return messages.validation.secondName.maxLength+max;
                default:
                    return '';
            }
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
                return messages.validation.lastName.minLength+min;
            case 2:
                return messages.validation.lastName.maxLength+max;
            default:
                return '';
        }
    }

    validateLastSecondName(){
        
        let valueLastSecondName = document.getElementById(this.state.lastSecondNameInputConfig.id).value;
        let pattern = this.state.lastSecondNameInputConfig.pattern;
        let min = this.state.lastSecondNameInputConfig.minLength;
        let max = this.state.lastSecondNameInputConfig.maxLength;

        if(valueLastSecondName==='' && this.state.lastSecondNameInputConfig.isOptional){

            return '';
        }
        else{

            if(!Functions.validatePattern(valueLastSecondName,pattern)){
                return messages.validation.lastSecondName.format;
            }
    
            switch(Functions.validateMaxAndMinLength(valueLastSecondName,min,max)){
                case 1:
                    return messages.validation.lastSecondName.minLength+min;
                case 2:
                    return messages.validation.lastSecondName.maxLength+max;
                default:
                    return '';
            }
        }
    }

    validateEmail(){
        
        let valueEmail = document.getElementById(this.state.emailInputConfig.id).value;
        let pattern = this.state.emailInputConfig.pattern;
        let min = this.state.emailInputConfig.minLength;
        let max = this.state.emailInputConfig.maxLength;

        if(!Functions.validatePattern(valueEmail,pattern)){
            return messages.validation.email.format;
        }

        switch(Functions.validateMaxAndMinLength(valueEmail,min,max)){
            case 1:
                return messages.validation.email.minLength+min;
            case 2:
                return messages.validation.email.maxLength+max;
            default:
                return '';
        }
    }

    validateHomePhone(){
        
        let valueHomePhone = document.getElementById(this.state.homePhoneInputConfig.id).value;
        let pattern = this.state.homePhoneInputConfig.pattern;
        let min = this.state.homePhoneInputConfig.minLength;
        let max = this.state.homePhoneInputConfig.maxLength;

        if(valueHomePhone==='' && this.state.homePhoneInputConfig.isOptional){

            return '';
        }
        else{

            if(!Functions.validatePattern(valueHomePhone,pattern)){
                return messages.validation.homePhone.format;
            }
    
            switch(Functions.validateMaxAndMinLength(valueHomePhone,min,max)){
                case 1:
                    return messages.validation.homePhone.minLength+min;
                case 2:
                    return messages.validation.homePhone.maxLength+max;
                default:
                    return '';
            }
        }
    }

    validateCellPhone(){
        
        let valueCellPhone = document.getElementById(this.state.cellPhoneInputConfig.id).value;
        let pattern = this.state.cellPhoneInputConfig.pattern;
        let min = this.state.cellPhoneInputConfig.minLength;
        let max = this.state.cellPhoneInputConfig.maxLength;

        if(!Functions.validatePattern(valueCellPhone,pattern)){
            return messages.validation.cellPhone.format;
        }

        switch(Functions.validateMaxAndMinLength(valueCellPhone,min,max)){
            case 1:
                return messages.validation.cellPhone.minLength+min;
            case 2:
                return messages.validation.cellPhone.maxLength+max;
            default:
                return '';
        }
    }

    enableOrDisabledFields(disabled=false,mode='input'){

        this.setState(prevState=>({
            firstNameInputConfig:{
                ...prevState.firstNameInputConfig,
                isDisabled: disabled
            },
            secondNameInputConfig:{
                ...prevState.secondNameInputConfig,
                isDisabled: disabled
            },
            lastNameInputConfig:{
                ...prevState.lastNameInputConfig,
                isDisabled: disabled
            },
            lastSecondNameInputConfig:{
                ...prevState.lastSecondNameInputConfig,
                isDisabled: disabled
            }, 
            emailInputConfig:{
                ...prevState.emailInputConfig,
                isDisabled: disabled
            },
            homePhoneInputConfig:{
                ...prevState.homePhoneInputConfig,
                isDisabled: disabled
            },
            cellPhoneInputConfig:{
                ...prevState.cellPhoneInputConfig,
                isDisabled: disabled
            },
            mode: mode
        }));
    }

    onClickButtonAccept(){

        let resultFirstName=this.validateFirstName();
        let resultSecondName = this.validateSecondName();
        let resultLastName = this.validateLastName();
        let resultLastSecondName = this.validateLastSecondName();
        let resultEmail = this.validateEmail();
        let resultHomePhone = this.validateHomePhone();
        let resultCellPhone = this.validateCellPhone();

        var array = [resultFirstName,resultSecondName,resultLastName,resultLastSecondName,
        resultEmail,resultHomePhone,resultCellPhone];

        var ind=array.find((element)=>element!=='');

        if(ind==undefined){
            
            this.landing.firstName = this.state.firstNameInputConfig.value;
            this.landing.secondName = this.state.secondNameInputConfig.value;
            this.landing.lastName = this.state.lastNameInputConfig.value;
            this.landing.lastSecondName = this.state.lastSecondNameInputConfig.value;
            this.landing.email = this.state.emailInputConfig.value;
            this.landing.homePhone = this.state.homePhoneInputConfig.value;
            this.landing.cellPhone = this.state.cellPhoneInputConfig.value;

            this.props.saveData(this.landing);
            this.enableOrDisabledFields(true,'confirm');
        }
        else{
            this.setState(prevState=>({
                errors:{
                    ...prevState.errors,
                    firstName: resultFirstName,
                    secondName: resultSecondName,
                    lastName: resultLastName,
                    lastSecondName: resultLastSecondName,
                    email: resultEmail,
                    homePhone: resultHomePhone,
                    cellPhone: resultCellPhone
                }
            }));
        } 
    }

    onClickButtonCancel(){
        this.enableOrDisabledFields(false,'input');
    }

    onClickButtonConfirm(){
        LandingServices.saveLanding(this.props.landing,this.props.handleView);
        //this.props.handleView('ACCEPTANCE_SAVE_LANDING');
    }

    static setStyleMsgErrorField(value){
        return (value==='' || value==null);
    }

    render(){
        return(
            <div className='parent'>
                    <div className='fieldSet'>
                            <div><label className={'fieldNamesLabel'}>*Primer Nombre:</label></div>
                            <Input  
                                id={this.state.firstNameInputConfig.id}
                                placeholder={this.state.firstNameInputConfig.placeholder} 
                                isReadOnly={this.state.firstNameInputConfig.isReadOnly}
                                type={this.state.firstNameInputConfig.type} 
                                value={this.state.firstNameInputConfig.value} 
                                handleChange = {this.handleChangeFirstName}
                                className={this.state.firstNameInputConfig.className}
                                isDisabled={this.state.firstNameInputConfig.isDisabled}
                                error={this.state.errors.firstName}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.firstName)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
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
                                error={this.state.errors.secondName}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.secondName)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.secondName}</span>
                            </div>

                            <div><label className="fieldNamesLabel">*Apellido Paterno:</label></div>
                            <Input 
                                id={this.state.lastNameInputConfig.id}
                                placeholder={this.state.lastNameInputConfig.placeholder} 
                                isReadOnly={this.state.lastNameInputConfig.isReadOnly}
                                type={this.state.lastNameInputConfig.type} 
                                value={this.state.lastNameInputConfig.value} 
                                handleChange = {this.handleChangeLastName}
                                className={this.state.lastNameInputConfig.className}
                                isDisabled={this.state.lastNameInputConfig.isDisabled}
                                error={this.state.errors.lastName}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.lastName)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
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
                                error={this.state.errors.secondLastName}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.lastSecondName)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.lastSecondName}</span>
                            </div>

                            <div><label className="fieldNamesLabel">*Email:</label></div>
                            <Input 
                                id={this.state.emailInputConfig.id}
                                placeholder={this.state.emailInputConfig.placeholder} 
                                isReadOnly={this.state.emailInputConfig.isReadOnly}
                                type={this.state.emailInputConfig.type} 
                                value={this.state.emailInputConfig.value} 
                                handleChange = {this.handleChangeEmail}
                                className={this.state.emailInputConfig.className}
                                isDisabled={this.state.emailInputConfig.isDisabled}
                                error={this.state.errors.email}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.email)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.email}</span>
                            </div>

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
                                error={this.state.errors.homePhone}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.homePhone)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.homePhone}</span>
                            </div>

                            <div><label className="fieldNamesLabel">*Telefono Movil:</label></div>
                            <Input 
                                id={this.state.cellPhoneInputConfig.id}
                                placeholder={this.state.cellPhoneInputConfig.placeholder} 
                                isReadOnly={this.state.cellPhoneInputConfig.isReadOnly}
                                type={this.state.cellPhoneInputConfig.type} 
                                value={this.state.cellPhoneInputConfig.value} 
                                handleChange = {this.handleChangeCellPhone}
                                className={this.state.cellPhoneInputConfig.className}
                                isDisabled={this.state.cellPhoneInputConfig.isDisabled}
                                error={this.state.errors.cellPhone}
                            />
                            <div className={Form.setStyleMsgErrorField(this.state.errors.cellPhone)?'msgErrorFieldHidden':'msgErrorFieldShow'}>
                                <span>{this.state.errors.cellPhone}</span>
                            </div>
                            <br />
                            { this.state.mode==='input' && 
                                <Button name={this.state.buttonAcceptConfig.name}
                                        className={this.state.buttonAcceptConfig.className}
                                        isDisabled={this.state.buttonAcceptConfig.isDisabled}
                                        onClick={this.onClickButtonAccept}/>
                            }
                            { this.state.mode==='confirm' &&
                                <div className={'containerButtonCancelAndConfirm'}>
                                    <Button name={this.state.buttonCancelConfig.name}
                                        className={this.state.buttonCancelConfig.className}
                                        isDisabled={this.state.buttonCancelConfig.isDisabled}
                                        onClick={this.onClickButtonCancel}/>
                                    <Button name={this.state.buttonConfirmConfig.name}
                                        className={this.state.buttonConfirmConfig.className}
                                        isDisabled={this.state.buttonConfirmConfig.isDisabled}
                                        onClick={this.onClickButtonConfirm} />
                                </div>
                            }

                    </div>
            </div>
        );
    }

}


function mapDispatchToProps(dispatch){
    return {
        saveData: landing => dispatch(sendLanding(landing))
    }
}

const mapStateToProps = state =>{
    return {landing: state.landing};
}

const FormRedux = connect(mapStateToProps,mapDispatchToProps)(Form);

export default FormRedux;