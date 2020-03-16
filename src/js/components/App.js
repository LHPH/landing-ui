import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import '../../css/styles.scss';
import LandingRecord from './LandingRecord';
import Button from './Button';

import FormRedux from './Form';
import AcceptanceView from './AcceptanceView'



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
                                            name={this.buttonHomeConfig.recordButton.name}
                                            isDisabled={this.buttonHomeConfig.recordButton.isDisabled}
                                            className={this.buttonHomeConfig.recordButton.className}
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
                    <Route path="/applications">
                        <LandingRecord showMenu={this.showMenu} hiddenMenu={this.hiddenMenu} />
                    </Route>
                    <Route path="/applications">
                        <LandingRecord showMenu={this.showMenu} hiddenMenu={this.hiddenMenu} />
                    </Route>
                </Switch>
            </Router>
        );
    }

}

export default App;