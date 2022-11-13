<script setup>
import { storeToRefs } from "pinia";
import Counter from "../components/Counter.vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
// const { isAuthenticated, fullname } = storeToRefs(authStore)
</script>

<template>
  <main>
   <div v-if="authStore.isAuthenticated">Username is: {{ authStore.fullname}}</div>
  <Counter />
  </main>
</template>
 