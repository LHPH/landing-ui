const URL_LANDING_SERVICES=process.env.REACT_APP_URL_SAVE_LANDINGS;

const axios = require('axios');

export default class LandingServices{

    static saveLanding(data,callback){

        let request = {
            personalData:{
                firstName: data.firstName,
                secondName: data.secondName,
                lastName: data.lastName,
                secondLastName: data.lastSecondName,
                email: data.email,
                cellPhone: data.cellPhone,
                homePhone: data.homePhone
            }
        }
        console.log(request);
        axios.post(URL_LANDING_SERVICES,request).then(response => {
            if(response.status===200){
                callback('ACCEPTANCE_SAVE_LANDING');
            }
        })
        
    }

    static retrieveLandings(callback){

        axios.get(URL_LANDING_SERVICES).then(response => {
            if(response.status===200){
                callback(response.data);
            }
            else{
                callback([]);
            }
        });
    }

    static retrieveLandingByFolio(folio, callback){
        axios.get(`${URL_LANDING_SERVICES}/${folio}`).then(response => {
            if(response.status===200){
                callback(response.data);
            }
        });
    }

}