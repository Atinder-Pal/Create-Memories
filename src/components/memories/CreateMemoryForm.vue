<template>
  <form class="ion-padding">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" />
      </ion-item>
    
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" />
      </ion-item>
    
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea type="text" />
      </ion-item>
    </ion-list>    
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  
} from "@ionic/vue";

export default {
    components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton   
  } 
};
</script>