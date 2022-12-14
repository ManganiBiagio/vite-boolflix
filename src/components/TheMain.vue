<template >
    <div class="container">
        <h4 class="pt-4" v-if="store.series.length>0 && store.isSerie">Serie</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            <div v-if="store.isSerie" class="col" v-for="serie in store.series">
                <TheCard  :serie="serie" @mouseenter="onHoverCard(serie)"></TheCard>
            </div>
        </div>

        <h4 class="pt-4" v-if="store.movies.length>0 && !store.isSerie">Film</h4>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            
            <div class="col" v-if="!store.isSerie" v-for="film in store.movies">
                <TheCard  :film="film" @mouseenter="onHoverCard(film)"></TheCard>
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
    components: { TheCard },
    methods:{
        onHoverCard(movie){
            store.RequestApi.searchCast(movie.id,movie)
            
        }
    }
}
</script>
<style lang="scss">

</style>