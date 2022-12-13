<template >
    
        <div class="card" >
                    <img class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{film.name}}</h5>
                        <ul>
                            <li class="card-text">Titolo originale:{{film.original_name}}</li>
                            <li class="card-text">Lingua:{{film.original_language}} <span v-if="film.origin_country.length>0">{{store.RequestApi.getFlag((film.origin_country[0]).toLowerCase())}}</span> </li>
                            <li class="card-text">Voto:{{film.vote_average}}</li>
                        </ul>
                        
                    </div>
                </div>


</template>
<script>
import {store} from "../store"
export default {
    props:{
        film:Object
    },
    data() {
        return {
            store
        };
    },
    
    
}

</script>
<style lang="scss">
    
</style>