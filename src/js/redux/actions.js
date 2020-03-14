
export const SEND_LANDING = "SEND_LANDING";

export function sendLanding(payload){
    return{
        type: SEND_LANDING,
        payload
    }
}