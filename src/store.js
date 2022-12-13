import { reactive } from "vue";
import {RequestApi} from "./requestApi"

export const store = reactive({
    searchText:"",
    movies:[],
    series:[],
    //Creo un nuovo Oggetto RequestApi che ha una chiave (key:"chiave per la chiamata Api")
    RequestApi:new RequestApi("1cc5bb9519ad6faec88ee69f3053dcb2"),
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




