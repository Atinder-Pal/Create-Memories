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
    data() {
        return {
            memories: [
                {
                    id:"m1",
                    image: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg",
                    title: "A trip into the mountains",
                    description: "It was a really nice trip!"
                },
                 {
                    id:"m2",
                    image: "https://cdn.pixabay.com/photo/2020/12/14/13/51/jasper-national-park-5830929_960_720.jpg",
                    title: "A trip to Jasper National Park",
                    description: "It was a quick break from TechCareers!"
                }, {
                    id:"m3",
                    image: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
                    title: "Celebrated New Year by baking a cake",
                    description: "It was a nice experience baking again after a long time!"
                },
            ]
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