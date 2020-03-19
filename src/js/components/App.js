import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../../css/styles.scss';
import LandingRecord from './LandingRecord';
import LandingRegistered from './LandingRegistered';
import Form from './Form';
import Button from './Button';




class App extends Component{

    constructor(props){
        super(props);

        this.state={
            showMenu:true
        };

        this.buttonHomeConfig={
            recordButton:{
                id:'recordButton',
                name: 'Registro',
                className: 'buttonHomeRecord',
                isDisabled: false
            },
            consultButton:{
                id:'consultButton',
                name: 'Consultar',
                className: 'buttonHomeConsult',
                isDisabled: false
            }
        }

        this.showMenu = this.showMenu.bind(this);
        this.hiddenMenu = this.hiddenMenu.bind(this);

    }

    showMenu(){
        this.setState(prevState=> ({
            ...prevState,
            showMenu: true
        }));
    }

    hiddenMenu(){
        this.setState(prevState=> ({
            ...prevState,
            showMenu: false
        }));
    }

    render(){
        return(
            <Router>
                 <div className={'parent'} style={{margin:'1%'}}>
                    <h1>MKT Landing</h1>
                </div>
                {this.state.showMenu && 
                    <div className={''}>
                        <ul className={'ulMenu'}>
                            <li className={'listMenu'}>
                            <Link to="/record">
                                <Button id={this.buttonHomeConfig.recordButton.id}
                                        name={this.buttonHomeConfig.recordButton.name}
                                        isDisabled={this.buttonHomeConfig.recordButton.isDisabled}
                                        className={this.buttonHomeConfig.recordButton.className}
                                />
                            </Link>
                            </li>
                            <li className={'listMenu'}>
                            <Link to="/applications">
                                <Button id={'other'}
                                            name={this.buttonHomeConfig.consultButton.name}
                                            isDisabled={this.buttonHomeConfig.consultButton.isDisabled}
                                            className={this.buttonHomeConfig.consultButton.className}
                                    />
                            </Link>
                            </li>
                            <li className={'listMenu'}>
                            <Link to="/other">
                                <Button id={'other2'}
                                        name={this.buttonHomeConfig.recordButton.name}
                                        isDisabled={this.buttonHomeConfig.recordButton.isDisabled}
                                        className={this.buttonHomeConfig.recordButton.className}
                                />
                            </Link>
                            </li>
                        </ul>  
                    </div>
                }
                <Switch>
                    <Route path="/record">
                        <LandingRecord showMenu={this.showMenu} hiddenMenu={this.hiddenMenu} />
                    </Route>
                    <Route exact path="/applications">
                        <LandingRegistered showMenu={this.showMenu} hiddenMenu={this.hiddenMenu}/>
                    </Route>
                    <Route path="/applications/:folio" 
                    render={(props)=> <Form showMenu={this.showMenu} hiddenMenu={this.hiddenMenu} match={props.match}/>} />
                
                        
                </Switch>
            </Router>
        );
    }

}

export default App;