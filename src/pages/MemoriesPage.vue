<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    All Memories
                </ion-title>
            </ion-toolbar>            
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>Max</ion-item>
                <ion-item>Manuel</ion-item>
                <ion-item>Alice</ion-item>
                <ion-item>Bob</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem} from '@ionic/vue';

export default {
    components: {
       IonPage,
       IonHeader,
       IonToolbar,
       IonTitle,
       IonContent,
       IonList,
       IonItem
    }
}
</script>
<style scoped>

</style>