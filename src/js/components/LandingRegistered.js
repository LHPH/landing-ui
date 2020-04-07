import React, { Component } from 'react';
import '../../css/styles.scss';
import Table from 'react-bootstrap/Table'
import Button from './Button';
import LandingServices from '../services/LandingServices';
import Alert from 'react-bootstrap/Alert'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class LandingRegistered extends Component{

    constructor(props){
        super(props);

        this.state = {
            landings: [],
            numRecords: -1
        };

        this.props.hiddenMenu();

        this.processResults = this.processResults.bind(this);
    }

    componentDidMount(){
        LandingServices.retrieveLandings(this.processResults);
    }

    processResults(landings){

        this.setState(prevState =>({
            ...prevState,
            landings: landings,
            numRecords: landings.length
        }));
    }

    static createFullName(personalData){
        
        var fullName = '';
        
        var firstName = personalData.firstName;
        var secondName = personalData.secondName;
        var lastName = personalData.lastName;
        var lastSecondName = personalData.secondLastName;

        if(secondName!==null && secondName!==''){
            fullName = `${firstName} ${secondName}`;
        }

        if(lastSecondName!==null && lastSecondName!==''){
            fullName = `${fullName} ${lastName} ${lastSecondName}`;
        }

        return fullName;
    }

    static createRows(landings){

        return  landings.map((landing) => {
                return  <tr key={landing.folio}>
                            <td>{landing.folio}</td>
                            <td>{LandingRegistered.createFullName(landing)}</td>
                            <td>{landing.cellPhone}</td>
                            <td>{landing.dateCreated}</td>
                            <td>
                                <Link to={`/applications/${landing.folio}`}>
                                    <Button id={'buttonView'} name={'Ver'} 
                                            IsDisabled={false} className={'buttonViewFolio'}/>
                                </Link>
                            </td>
                        </tr>
                })
    }

    render(){

        const createRows = LandingRegistered.createRows(this.state.landings);
        return(
            <div className={'parent'}>
                <br />
                    {this.state.numRecords>0 && 
                         <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Folio</th>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Fecha</th>
                                    <th>Detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {createRows}
                            </tbody>
                            </Table>
                    }
                    {this.state.numRecords===0 && 
                      <Alert variant={'info'}>
                        No hay landings registradas en el sistema  
                      </Alert>
                    }
                    {this.state.numRecords===-1 && 
                      <Alert variant={'info'}>
                        Buscando Landings...  
                      </Alert>
                    }
            </div>
        );
    }
}

export default LandingRegistered;