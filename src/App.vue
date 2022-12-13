<template>
  <TheHeader @search="searchdata()"></TheHeader>
  <TheMain></TheMain>
  
</template>



<script >
import {store} from './store'
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
    components: { TheHeader, TheMain },
    data(){
      return{
        store
      }
    },
    methods:{
      //funzione scatenata dal click su btn, aggiorna i dati nello store facendo una Api request tramite
      // l'omonimo oggetto gli passo la stringa che l'utente avrebbe dovuto inserire
      //per la richiesta
      searchdata(){
        //se l'utente non ha inserito nessun testo la richiesta Api non viene eseguita
        if(!(this.store.searchText==="")){
          store.RequestApi.searchTitle(this.store.searchText);
          store.RequestApi.getFlag("it");
          console.log(store.flagsList);
        }else{
          alert("inserisci un testo da cercare")
        }
      }
    }
}
</script>



<style lang="scss">
@use "./styles/general.scss";

</style>
