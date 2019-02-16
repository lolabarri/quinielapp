import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    withCredentials: true,
});

export class BetAPI {

    static errorHandler(e) {
        console.error("BET API ERROR");
        console.error(e);
        throw e;
    }

    static bet(apuestas){
        return instance.post('/bet/new',{apuestas})
        .then((res) => res.data.bet)
        .catch(BetAPI.errorHandler)
    }
};