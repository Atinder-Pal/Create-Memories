<template>
    <base-layout page-title="All Memories">
        <memories-list :memories="memories"></memories-list>
    </base-layout>
</template>
<script>
//import { IonButton, IonIcon } from "@ionic/vue";
import MemoriesList from "../components/memories/MemoriesList.vue";



export default {
   computed: {
       memories() {
           return this.$store.getters.memories;
       }
   },    
  components: {          
        MemoriesList   
  }
}
</script>
        
<style scoped>

</style>