<template >
<template v-if="serie">
    <div class="card">
        <img :src="store.RequestApi.getCardImage(serie.backdrop_path)" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ serie.name }}</h5>
            <ul>
                <li class="card-text">Titolo originale:{{ serie.original_name }}</li>
                <li class="card-text">
                    Lingua: {{ serie.original_language }}
                    <span  v-if="store.flagLanguageList[serie.original_language]">
                        <img :src="store.RequestApi.getFlag(store.flagLanguageList[serie.original_language])" width="16" height="12">
                    </span>
                    
                </li>
                <li class="card-text">
                    Paese di Origine:
                    <span  v-if="serie.origin_country.length>0">
                        {{serie.origin_country[0]}}
                        <img :src="store.RequestApi.getFlag(serie.origin_country[0])" width="16" height="12">
                    </span>
                    <span v-else>Non indicata</span>
                
                </li>
                
                <li class="card-text">Voto:{{ serie.vote_average }}</li>
            </ul>

        </div>
    </div>

</template>


<template v-if="film">
    <div class="card">
        <img :src="store.RequestApi.getCardImage(film.backdrop_path)" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ film.title }}</h5>
            <ul>
                <li class="card-text">Titolo originale:{{ film.original_title }}</li>
                <li class="card-text">
                    Lingua: {{ film.original_language }}
                    <span  v-if="store.flagLanguageList[film.original_language]">
                        <img :src="store.RequestApi.getFlag(store.flagLanguageList[film.original_language])" width="16" height="12">
                    </span>
                    
                </li>
                
                
                <li class="card-text">Voto:{{ film.vote_average }}</li>
            </ul>

        </div>
    </div>

</template>


</template>
<script>
import { store } from "../store"
export default {
    props: {
        serie: Object,
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