<template>
  <v-container>{{ route.query }}</v-container>
  <v-btn :to="{ name: 'Some' }">
    some
  </v-btn>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
