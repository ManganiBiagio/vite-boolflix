import axios from "axios";
import {store} from "./store"
//Creo un oggetto che rappresenta le mie richieste che dovrò fare alla API.
//le chiamate axios verranno effettuate qua e inoltre la risposta sarà salvata direttamente 
//nello store in maniera dinamica
export  class RequestApi{
    constructor(key){
        this.key=key

    }
    searchTitle(searchedText){
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.key}&language=it_IT`,{
            params:{
                query:searchedText
            }
        }).then((resp)=>{
            //log di verifica dati 
            console.log(resp.data.results);
            //salvo nello store la risposta della chiamata API 
            store.movies=resp.data.results;
        }).catch(function (error){
            //nel caso in cui l'Api dia un errore lo dichiaro all'utente e ne mostro ErrorNumber
            alert("errore nel caricamento dei dati: "+error)
        })
    }
    //funzione che ritorna un url della bandiera corrispondente al codice del paese
    getFlag(codicePaese){
        codicePaese=codicePaese.toLowerCase();
        return `https://flagcdn.com/16x12/${codicePaese}.png`
    }
} 




    
