<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
    
      <ion-item>
       <ion-thumbnail slot="start">
           <img :src="takenImageUrl" />
        </ion-thumbnail>
            <ion-button type="button" fill= "clear" @click="takePhoto">
                <ion-icon :icon="camera"></ion-icon>
                Take Photo
            </ion-button>
      </ion-item>

      <ion-item>      
        <ion-button type="button" fill= "clear" @click="takeVideo">
            <ion-icon :icon="camera"></ion-icon>
            Take Video
        </ion-button>
      </ion-item>
    
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea row="5" v-model="enteredDescription" />
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
  IonThumbnail,
  IonIcon 
} from "@ionic/vue";
import{ camera } from 'ionicons/icons';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import {VideoCapturePlus} from '@ionic-native/video-capture-plus';
const {Camera} = Plugins;

export default {
    emits: ['save-memory'],
    components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail, 
    IonIcon,
   
  },
  data() {
      return {
          enteredTitle: '',          
          enteredDescription: '',
          takenImageUrl:null,
          camera
      };
  },
  methods: {
      submitForm() {
          const memoryData= {
              title: this.enteredTitle,
              image: this.takenImageUrl,
              description: this.enteredDescription
          };
          this.$emit('save-memory', memoryData);
      },
      async takePhoto() {
          const photo = await Camera.getPhoto({
              resultType: CameraResultType.Uri,
              source: CameraSource.Camera,
              quality: 60
          });
          this.takenImageUrl = photo.webPath;
      },
       async takeVideo() {
           try{
               let options = {
               limit: 1,
               duration: 30
           }
          let video = await VideoCapturePlus.captureVideo(options);
          console.log(video);
           } catch(error) {
               console.log(error);
           }          
      }
  }
};
</script>