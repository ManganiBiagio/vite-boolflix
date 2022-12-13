<template>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
  
</template>



<script >
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
    components: { TheHeader, TheMain }
}
</script>



<style lang="scss">
@use "./styles/general.scss";

</style>
