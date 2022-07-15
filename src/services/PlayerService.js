import axios from "axios";

export class ContactService {
    static serverURL = `http://localhost:9000`;

    static getAllPlayers(){
        let dataURL = `${this.serverURL}/players`;
        return axios.get(dataURL);
    }

    static getPlayer(playerId){
        let dataURL = `${this.serverURL}/players/${playerId}`;
        return axios.get(dataURL);
    }

    static createPlayer(player){
        let dataURL = `${this.serverURL}/players/`;
        return axios.post(dataURL, player);
    }

    static updatePlayer(player, playerId){
        let dataURL = `${this.serverURL}/players/${playerId}`;
        return axios.put(dataURL, player);
    }

    static deletePlayer(playerId){
        let dataURL = `${this.serverURL}/players/${playerId}`;
        return axios.delete(dataURL);
    }
}