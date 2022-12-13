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
      searchdata(){
        store.RequestApi.searchTitle(this.store.searchText)
        
      }
    }
}
</script>



<style lang="scss">
@use "./styles/general.scss";

</style>
