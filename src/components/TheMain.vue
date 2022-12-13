<template >
    <div class="container">
        <h4 class="pt-4" >Serie</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            <div class="col" v-for="serie in store.series">
                <TheCard  :serie="serie"></TheCard>
            </div>
        </div>

        <h4 class="pt-4">Film</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            <div class="col" v-for="film in store.movies">
                <TheCard  :film="film"></TheCard>
            </div>
        </div>
    </div>

</template>
<script>
import { store } from "../store"
import TheCard from "./TheCard.vue";
export default {
    data() {
        return {
            store
        };
    },
    components: { TheCard }
}
</script>
<style lang="scss">

</style>