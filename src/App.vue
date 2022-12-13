<template>
  <TheHeader></TheHeader>
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
    }
}
</script>



<style lang="scss">
@use "./styles/general.scss";

</style>
