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

    static bet(bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet8, bet9, bet10, bet11, bet12, bet13, bet14, bet15){
        return instance.post('/bet/new',{bet1, bet2, bet3, bet4, bet5, bet6, bet7, bet8, bet9, bet10, bet11, bet12, bet13, bet14, bet15})
        .then((res) => res.data.bet)
        .catch(BetAPI.errorHandler)
    }
};