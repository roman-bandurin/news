<template>
  <v-app>
    <v-app-bar
      class="mb-6"
      color="#6a76ab"
    >
      <template #title>
        <v-container>
          <v-app-bar-title class="ml-6">
            app
          </v-app-bar-title>
          <v-spacer />
        </v-container>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>
