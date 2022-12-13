import { reactive } from "vue";
import {RequestApi} from "./requestApi"

export const store = reactive({
    searchText:"",
    movies:[],
    series:[],
    RequestApi:new RequestApi("1cc5bb9519ad6faec88ee69f3053dcb2"),
    
  
});


