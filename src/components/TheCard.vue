<template >
    
        <div class="card" >
                    <img class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{film.name}}</h5>
                        <ul>
                            <li class="card-text">Titolo originale:{{film.original_name}}</li>
                            <li class="card-text">Lingua:{{film.original_language}}</li>
                            <li class="card-text">Voto:{{film.vote_average}}</li>
                        </ul>
                        
                    </div>
                </div>


</template>
<script>
export default {
    props:{
        film:Object
    }
    
}
</script>
<style lang="scss">
    
</style>