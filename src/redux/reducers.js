import {SEND_LANDING} from "./actions";

const initialState = {
    landing:{
        firstName: null,
        secondName: null,
        lastName: null,
        lastSecondName: null,
        email: null,
        homePhone: null,
        cellPhone: null
    }
}

function rootReducer(state = initialState,action){

    if(action.type===SEND_LANDING){
        return {...state,landing: action.payload};
    }
    return state;
}

export default rootReducer;