<script setup>
import { storeToRefs } from "pinia";
import Counter from "../components/Counter.vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore)
</script>

<template>
  <main>
   <div v-if="isAuthenticated">Username is: {{ user.name}}</div>
  <Counter />
  </main>
</template>
 