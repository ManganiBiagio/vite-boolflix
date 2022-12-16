import axios from "axios";
import {store} from "./store"
//Creo un oggetto che rappresenta le mie richieste che dovrò fare alla API.
//le chiamate axios verranno effettuate qua e inoltre la risposta sarà salvata direttamente 
//nello store in maniera dinamica
export  class RequestApi{
    key="";
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
            store.load=false;
        }).catch(function (error){
            //nel caso in cui l'Api dia un errore lo dichiaro all'utente e ne mostro ErrorNumber
            alert("errore nel caricamento dei dati: "+error);
            store.load=false;
        })
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
        store.load=false;
    }).catch(function (error){
        //nel caso in cui l'Api dia un errore lo dichiaro all'utente e ne mostro ErrorNumber
        alert("errore nel caricamento dei dati: "+error)
        store.load=false;
    })

    }

    searchCast(movieId,movie){
        //controllo se è gia stato scaricato in questa sessione
        if(movie.cast){
            return
        }
        //controllo se ricerco il cast per una serie o per un film
        let txtToFind;
        if(movie.name){
            txtToFind="tv"
        }else{
            txtToFind="movie"
        }
        axios.get(`https://api.themoviedb.org/3/${txtToFind}/${movieId}/credits?api_key=${this.key}&language=it_IT`)
        .then((resp)=>{
           
            
          
            
            movie.cast=resp.data.cast;
        }).catch(function (error){
            //nel caso in cui l'Api dia un errore lo dichiaro all'utente e ne mostro ErrorNumber
            alert("errore nel caricamento dei dati: "+error)
        })
    

    };
    searchPopular(){
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${this.key}&language=it_IT`,{
            
        }).then((resp)=>{
            
            
            store.populars=resp.data.results;
            store.load=false;
        }).catch(function (error){
            //nel caso in cui l'Api dia un errore lo dichiaro all'utente e ne mostro ErrorNumber
            alert("errore nel caricamento dei dati: "+error);
            store.load=false;
        })

    }

    
    
} 




    
