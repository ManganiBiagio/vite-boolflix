
<template >
    
<div class="flip">
    <div class="front" :style="('background-image:'+`url(${getCardImage(getCorrectElement)})`)">
       <h1 class="text-shadow">{{getTitle}}</h1>
    </div>
    <div class="back">
       <h2>{{getOriginaleTitle}}</h2>
       <p> <ul class="">
                <li class="">Titolo originale:{{ getCorrectElement.original_name }}</li>
                <li class="">
                    Lingua: {{ getCorrectElement.original_language }}
                    <span  v-if="store.flagLanguageList[getCorrectElement.original_language]">
                        <img :src="getFlag(store.flagLanguageList[getCorrectElement.original_language])" width="16" height="12">
                    </span>
                    
                </li>
                <li v-if="getCorrectElement==serie && serie.origin_country[0]">
                    Paese di Origine:
                    <span  >
                        {{getCorrectElement.origin_country[0]}}
                        <img :src="getFlag(getCorrectElement.origin_country[0])" width="16" height="12">
                    </span>
                    
                
                </li>
                
                <li class="">Voto:<i v-for="star in roundVote(getCorrectElement.vote_average)" class="fa-solid fa-star"></i></li>
            </ul>
            <div>{{getCorrectElement.overview}}</div>
            <div v-if="getCorrectElement.cast && getCorrectElement.cast.length>0" >Cast:
                <ul>
                    <li  v-for="(actor,index) in getCorrectElement.cast.slice(0,5)" >
                            {{actor.name}}
                        
                        
    
                    </li>

                </ul>
            </div>
        
        </p>
    </div>
</div>

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
    methods:{
        //funzione che restituisce URL dell'immagine corrispondente
    //se non esiste ci inserisco un placeholder
    getCardImage(movie){
        
        if(movie.poster_path!=null){
            return `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
        }
        else{
            return "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }

    },
    //funzione che ritorna un url della bandiera corrispondente al codice del paese (Codice ISO 3166)
    getFlag(codicePaese){
        codicePaese=codicePaese.toLowerCase();
        return `https://flagcdn.com/16x12/${codicePaese}.png`
    },
    //funzione che arrotoda un voto in decimi in cinquesimi
    roundVote(voto){
        voto=voto/2
        let toReturn=Math.round(voto);
        return toReturn;
    }   


    },
    computed:{
        getCorrectElement(){
            return this.serie ? this.serie : this.film
        }
        ,
        getTitle(){
            return this.serie ? this.serie.name : this.film.title
        },
        getOriginaleTitle(){
            return this.serie ? this.serie.original_name : this.film.original_title
        },
        // getCast(){
        //     return this.getCorrectElement.
        // }
    }


}

</script>
<style lang="scss" scoped>
//card
// base
.flip {
    position: relative;
    >.front,
    >.back {
        display: block;
        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
        transition-duration: .5s;
        transition-property: transform, opacity;
    }
    >.front {
        transform: rotateY(0deg);
    }
    >.back {
        position: absolute;
        opacity: 0;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg);
    }
    &:hover {
        >.front {
            transform: rotateY(180deg);
        }
        >.back {
            opacity: 1;
            transform: rotateY(0deg);
        }
    }
    
}

// custom
.flip {
    position: relative;
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 1em;
    width: 100%;
    >.front,
    >.back {
        overflow-x: hidden;
        overflow-y: auto;
      display: block;
      color: white;
      width: inherit;
      background-size: cover!important;
      background-position: center!important;
      width: 350px;
      height: 350px;
      padding: 1em 2em;
      background: #313131;
      border-radius: 10px;
      p {
        font-size: 0.9125rem;
        line-height: 160%;
        color: #999;
      }
    }
    .front{
        overflow: hidden;
    }
    .front h1{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        display: inline-block;
        
       

    }
}

.text-shadow {
text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}


</style>