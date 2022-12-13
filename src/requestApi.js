import axios from "axios";
import {store} from "./store"
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
            console.log(resp.data.results);
            store.movies=resp.data.results;
        })
    }
} 
    
