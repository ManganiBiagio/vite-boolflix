<template>
  <div class="my-container">
    <TheHeader class="box-header"  @search="searchdata()"></TheHeader>
    <TheMain class="main"></TheMain>

  </div>
  
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
          store.RequestApi.searchSeries(this.store.searchText);
          store.RequestApi.searchMovie(this.store.searchText)
        }else{
          alert("inserisci un testo da cercare")
        }
      }
    }
}
</script>



<style lang="scss">
@use "./styles/general.scss";
.my-container{
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-image:url("../public/background.jpeg");
  object-fit: cover;
  color: var(--color-text-1);
}
.box-header{
  position: fixed;
  top: 10px;
  right: 0;
  left: 0;
  z-index: 3;
  background-color: lightpink;
  border-radius: 30px;
  
}
.main{
  margin-top: 80px;
}
</style>
