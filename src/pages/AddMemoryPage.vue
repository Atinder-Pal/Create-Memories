<template>
    <base-layout pageTitle="Add a Memory" pageDefaultBackLink="/memories">
        <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: { 
    CreateMemoryForm 
  },
  methods: {
     saveMemory(memoryData) {
         this.$store.dispatch('addMemory', memoryData);
         this.$router.replace('/memories');
     }
  }

}
</script>