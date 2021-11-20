<template>
  <app-dropdown :text="menu.text" :sub-menu="menu.subMenu"></app-dropdown>
</template>

<script>
import { mapState } from 'vuex'
import AppDropdown from './AppDropdown.vue'

export default {
  components: {
    AppDropdown
  },
  computed: {
    ...mapState(['user']),
    menu() {
      if (this.user) {
        return { text: this.user.name, subMenu: [{ text: 'Logout' }] }
      }
      return {
        text: 'Login',
        subMenu: []
      }
    }
  }
}
</script>
