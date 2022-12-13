<template >
    <div class="container">
        <form class="row g-3" @submit.prevent="onSearch()">
          <div class="col-md-6">
             <label for="inputEmail4" class="form-label">Ricerca</label>
             <input type="text" class="form-control" id="inputEmail4" v-model="searchText">
          </div>
          <div class="col-12">
             <button type="submit" class="btn btn-primary">Ricerca</button>
           </div>
        </form>

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
            store.searchText=this.searchText;
            this.$emit("search");

        }
    }
    
}
</script>
<style lang="scss">
    
</style>