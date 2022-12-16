<template lang="">
    

        <div class="container" >
            <div class="carousel" >
                <div class="image" v-for="film in getFiveElementToShow">
                    <span>
                        
                        <TheCard v-if="film" :film="film" @mouseenter="onHoverCard(film)"></TheCard>
                    </span>
                </div>
                
            </div>
        </div>
    
</template>
<script>
import { store } from "../store";
import TheCard from "./TheCard.vue";
export default {
    data() {
        return {
            store
        };
    },methods:{
        onHoverCard(movie){
            store.RequestApi.searchCast(movie.id,movie)
            
        }
    },
    components: { TheCard },
    computed:{
        getFiveElementToShow(){
            const toReturn=[];
            for(let i=0;i<9;i++){
                toReturn.push(store.populars[i])
                
            }
            return toReturn


        }
    }
}
</script>
<style lang="scss" scoped>

    body {
            margin: 0;
            background: #2A2734;
            text-align: center;
            font-family: sans-serif;
            color: #fefefe;
        }
        
        .container {
            position: relative;
            width: 320px;
            margin: 100px auto 0 auto;
            perspective: 1000px;
        }
        
        .carousel {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            animation: rotate360 60s infinite forwards linear;
        }
        
        .image {
            position: absolute;
            width: 300px ;
            height: 250px;
            top: 20px;
            left: 10px;
            right: 10px;
            background-size: cover;
            
            display: flex;
            overflow: hidden;
        }
        
        span {
            margin: auto;
            font-size: 2rem;
        }
        
        .image:nth-child(1) {
            background-image: url("image_url");
            transform: rotateY( 0deg) translateZ(430px);
        }
        
        .image:nth-child(2) {
            background-image: url("image_url");
            transform: rotateY( 40deg) translateZ(430px);
        }
        
        .image:nth-child(3) {
            background-image: url("image_url");
            transform: rotateY( 80deg) translateZ(430px);
        }
        
        .image:nth-child(4) {
            background-image: url("image_url");
            transform: rotateY(120deg) translateZ(430px);
        }
        
        .image:nth-child(5) {
            background-image: url("image_url");
            transform: rotateY(160deg) translateZ(430px);
        }
        
        .image:nth-child(6) {
            background-image: url("image_url");
            transform: rotateY(200deg) translateZ(430px);
        }
        
        .image:nth-child(7) {
            background-image: url("image_url");
            transform: rotateY(240deg) translateZ(430px);
        }
        
        .image:nth-child(8) {
            background-image: url("image_url");
            transform: rotateY(280deg) translateZ(430px);
        }
        
        .image:nth-child(9) {
            background-image: url("image_url");
            transform: rotateY(320deg) translateZ(430px);
        }
        
        @keyframes rotate360 {
            from {
                transform: rotateY(0deg);
            }
            to {
                transform: rotateY(-360deg);
            }
        }


</style>