<template>
    <base-layout page-title="All Memories">
            <ion-list>
                <ion-item router-link="/memories/1">Max</ion-item>
                <ion-item>Manuel</ion-item>
                <ion-item>Alice</ion-item>
                <ion-item>Bob</ion-item>
            </ion-list>
    </base-layout>
</template>
<script>
import {IonList, IonItem} from '@ionic/vue';


export default {
    components: {      
       IonList,
       IonItem       
    }
}
</script>
        
<style scoped>

</style>