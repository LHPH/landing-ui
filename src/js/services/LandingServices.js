const URL_LANDING_SERVICES=process.env.REACT_APP_URL_SAVE_LANDINGS;


export default class LandingServices{

    static saveLanding(data,callback){
        console.log("Guardando Landing en "+URL_LANDING_SERVICES);
        console.log(data);
        callback('ACCEPTANCE_SAVE_LANDING');
    }

}