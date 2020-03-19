const URL_LANDING_SERVICES=process.env.REACT_APP_URL_SAVE_LANDINGS;


export default class LandingServices{

    static saveLanding(data,callback){

        callback('ACCEPTANCE_SAVE_LANDING');
    }

    static retrieveLandings(callback){

        let landing = [
            {
                folio:1212,
                personalData:{
                    firstName: 'Luis',
                    secondName: 'Humberto',
                    lastName: 'Ponce',
                    lastSecondName: 'Hermosillo',
                    cellPhone: '7223980598',
                    homePhone: '5534324325',
                },
                dateCreated: '10/01/2022'
            },
            {
                folio:1213,
                personalData:{
                    firstName: 'Luis',
                    secondName: 'Humberto',
                    lastName: 'Ponce',
                    lastSecondName: 'Hermosillo',
                    cellPhone: '7223980598',
                    homePhone: '5534324325',
                },
                dateCreated: '10/01/2022'
            },
            {
                folio:1214,
                personalData:{
                    firstName: 'Luis',
                    secondName: 'Humberto',
                    lastName: 'Ponce',
                    lastSecondName: 'Hermosillo',
                    cellPhone: '7223980598',
                    homePhone: '5534324325',
                },
                dateCreated: '10/01/2022'
            }

        ];
        //landing = [];
        callback(landing);
    }

    static retrieveLandingByFolio(folio, callback){
        let landing = {
            folio:1212,
                personalData:{
                    firstName: 'Luis',
                    secondName: 'Humberto',
                    lastName: 'Ponce',
                    lastSecondName: 'Hermosillo',
                    cellPhone: '7223980598',
                    homePhone: '5534324325',
                },
                dateCreated: '10/01/2022'
        };
        callback(landing);
    }

}