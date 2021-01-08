<template>
    <base-layout page-title="All Memories">
            <ion-list>
                <ion-item v-for="memory in memories" :router-link="`/memories/${memory.id}`" :key="memory.id">
                    <ion-label>
                        {{memory.title}}
                    </ion-label>
                    <ion-thumbnail slot="start">
                        <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                    </ion-thumbnail>                    
                </ion-item>
            </ion-list>
    </base-layout>
</template>
<script>
import {IonList, IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue';


export default {
   computed: {
       memories() {
           return this.$store.getters.memories;
       }
   },
    
    components: {      
       IonList,
       IonItem,
       IonImg,
       IonThumbnail,
       IonLabel    
    }
}
</script>
        
<style scoped>

</style>