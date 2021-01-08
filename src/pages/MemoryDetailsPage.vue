<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview v-else 
        :title="loadedMemory.title" 
        :description="loadedMemory.description"
        :image="loadedMemory.image"
    ></memory-overview>
    </base-layout>
</template>

<script>
import MemoryOverview from "../components/memories/MemoryOverview.vue";
export default {
  data() {
      return {
          memoryId: this.$route.params.id,
      };
  },
  components: {
      MemoryOverview
  },
  computed: {
      loadedMemory() {
          return this.$store.getters.memory(this.memoryId)
      }
  },
  watch: {
      '$route'(currentRoute){
          this.memoryId = currentRoute.params.id;
      }
  }
}
</script>