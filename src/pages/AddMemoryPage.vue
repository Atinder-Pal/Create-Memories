<template>
    <base-layout pageTitle="Add a Memory" pageDefaultBackLink="/memories">
        <create-memory-form></create-memory-form>
    </base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: { CreateMemoryForm },
    
}
</script>