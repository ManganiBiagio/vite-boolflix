import { reactive } from "vue";
import {RequestApi} from "./requestApi"

export const store = reactive({
    load:false,
    isSerie:true,
    searchText:"",
    movies:[],
    series:[],
    //Creo un nuovo Oggetto RequestApi che ha una chiave (key:"chiave per la chiamata Api")
    RequestApi:new RequestApi("1cc5bb9519ad6faec88ee69f3053dcb2"),
    //Mappa che trasfomra le chiavi dell'Api laguage in chiavi da utilizzare nella chiamata
    //per ritornare le bandiere al sito https://flagcdn.com(utilizza codice ISO 3166)
    flagLanguageList:
        {
            "it":"IT",
            "en":"GB",
            "ja":"JP",
            "fr":"FR",
            "ko":"KR",
            "hi":"IN",
            "es":"ES",
            "pt":"PT",
            "de":"DE",
            "hu":"HU",
            "tr":"TR"
        
        },
     
        

    
  
});




