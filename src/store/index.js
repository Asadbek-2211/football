import axios from "axios";
import { defineStore } from "pinia";

export const myStore = defineStore("index", {
    state: () => {
        return {
            apiKey: "9bf177dc108255f879a181c09a4e8076232e54d7ad8d1687cdbbf3e84d56d93d"
        }
    },
    actions: {
        getStandings(){
            axios.get("https://apiv3.apifootball.com/?action=get_standings&league_id=152", {
                params: {
                    APIkey: this.apiKey
                }
            })
        }
    }
})