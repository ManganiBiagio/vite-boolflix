import axios from "axios";
import {store} from "./store"
//Creo un oggetto che rappresenta le mie richieste che dovrò fare alla API.
//le chiamate axios verranno effettuate qua e inoltre la risposta sarà salvata direttamente 
//nello store in maniera dinamica
export  class RequestApi{
    constructor(key){
        this.key=key

    }
    searchSeries(searchedText){
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.key}&language=it_IT`,{
            params:{
                query:searchedText
            }
        }).then((resp)=>{
            //log di verifica dati 
            console.log(resp.data.results);
            //salvo nello store la risposta della chiamata API 
            store.series=resp.data.results;
        }).catch(function (error){
            //nel caso in cui l'Api dia un errore lo dichiaro all'utente e ne mostro ErrorNumber
            alert("errore nel caricamento dei dati: "+error)
        })
    }
    //funzione che ritorna un url della bandiera corrispondente al codice del paese (Codice ISO 3166)
    getFlag(codicePaese){
        codicePaese=codicePaese.toLowerCase();
        return `https://flagcdn.com/16x12/${codicePaese}.png`
    }

    searchMovie(searchedText){axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=it_IT`,{
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
    //funzione che restituisce URL dell'immagine corrispondente
    //se non esiste ci inserisco un placeholder
    getCardImage(endUrl){
        if(endUrl!=null){
            return `https://image.tmdb.org/t/p/w780/${endUrl}`
        }
        else{
            return "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }

    }
} 




    
