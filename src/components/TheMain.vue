<template >
    <div class="container">
        <ul>
            <li   v-for="film in store.movies">
                {{film.name}}
            </li>
        </ul>
    </div>
    
</template>
<script>
import {store} from "../store"
export default {
    data(){
        return{
            store
        }
    }
}
</script>
<style lang="scss">
    
</style>