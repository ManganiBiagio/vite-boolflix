<template >
   <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    
    
    <div class=" navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link,i) in store.NavbarLinks.elementsLink" >
          <a class="nav-link " @click="store.NavbarLinks.selectedIndex=i"  :class='i===store.NavbarLinks.selectedIndex ? "active":"" ' aria-current="page" href="#">{{link}}</a>
        </li>
        
       
        
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        };
    },
    
}
</script>
<style lang="scss">
nav{
    background-color: var(--bg-header);
}
    
</style>