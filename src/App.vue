<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
function logout() {
  // authStore.isAuthenticated = false;
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {})
   })
}

</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout">Logout</button>
      </nav>
    </div>
  </header>

  <RouterView /> 
</template>