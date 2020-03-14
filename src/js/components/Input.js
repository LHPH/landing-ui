import React, { Component} from 'react';
import '../../css/styles.scss';
import CheckImage from '../../img/check.png'
import CrossImage from '../../img/cross.png';

class Input extends Component{

    constructor(props){
        super(props);

    }


    static setDisplayIcon(error){
        if(error==null){
            return 'none';
        }
        else{
            return '';
        }
    }

    render(){
        return(
           
            <div>
                <input id={this.props.id} placeholder={this.props.placeholder}
                readOnly={this.props.isReadOnly} type={this.props.type} value={this.props.value}
                onChange={this.props.handleChange} className={this.props.className}
                disabled={this.props.isDisabled}/>
                

                {this.props.isDisabled==false && this.props.error!==null && this.props.error==='' &&
                    <img src={CheckImage} style={{width:'2%',verticalAlign: 'middle',display:Input.setDisplayIcon(this.props.error)}}/>
                }

                {this.props.isDisabled==false && this.props.error!==null && this.props.error!=='' &&
                    <img src={CrossImage} style={{width:'2%',verticalAlign: 'middle',display:Input.setDisplayIcon(this.props.error)}}/>
                }
                
                
            </div>
        );
    }

}

export default Input;