<template >
    <div class="container">
        <div class="d-flex py-3 align-items-center">
            <h1 class="">BoolFlix</h1>
            <form class="row g-3 ms-auto" @submit.prevent="onSearch()">
              <div class="col-auto">
                
                      <input type="text" class="form-control" id="inputEmail4" v-model="searchText" placeholder="Ricerca serie o film">
                
                      
              </div>
              <div class="col-auto">
               

                    <button type="submit" class="btn btn-primary">Ricerca</button>
                
               </div>
            </form>

        </div>

    </div>
    
    
</template>
<script>
import {store} from '../store'
export default {
    data(){
        return{
            searchText:"",
            store
        }
    },
    methods:{
        onSearch(){
            //salvo nello store il testo inserito dall'utente
            store.searchText=this.searchText;
            
            //lancio un evento search che sara asoltato da App.vue per aggiornare i dati
            this.$emit("search");

        }
    }
    
}
</script>
<style lang="scss" scoped>

    
</style>