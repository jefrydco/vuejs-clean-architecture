<template>
  <main id="app" :class="{ 'dark-mode': isDarkModeActivated }">
    <the-navbar />
    <the-user />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import TheNavbar from './components/TheNavbar.vue'
import TheUser from './components/TheUser.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheUser
  },
  computed: {
    ...mapState(['isDarkModeActivated'])
  }
}
</script>

<style>
* {
  transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1),
    background-color 0.3s cubic-bezier(0.55, 0, 0.1, 1),
    box-shadow 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

#app {
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  min-height: 100vh;
  background: var(--bg);
  color: var(--color);
  padding: 30px;
  --bg: #e5e7eb;
  --border: rgb(79, 195, 247);
  --color: #1f2937;
}

#app.dark-mode {
  --bg: #1f2937;
  --border: #e5e7eb;
  --color: #e5e7eb;
}
</style>
