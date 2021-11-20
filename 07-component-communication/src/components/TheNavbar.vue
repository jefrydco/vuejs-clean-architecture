<template>
  <nav class="navbar">
    <app-dropdown
      v-for="(menu, i) in menuList"
      :key="i"
      :text="menu.text"
      :sub-menu="menu.subMenuList"
    >
    </app-dropdown>
    <the-navbar-user></the-navbar-user>
    <the-navbar-theme></the-navbar-theme>
  </nav>
</template>

<script>
import AppDropdown from './AppDropdown.vue'
import TheNavbarTheme from './TheNavbarTheme.vue'
import TheNavbarUser from './TheNavbarUser.vue'

export default {
  name: 'TheNavbar',
  components: {
    AppDropdown,
    TheNavbarUser,
    TheNavbarTheme
  },
  data() {
    return {
      menuList: [
        {
          text: 'Menu A',
          subMenuList: [
            { text: 'Sub Menu 1' },
            { text: 'Sub Menu 2' },
            { text: 'Sub Menu 3' }
          ]
        },
        {
          text: 'Menu B',
          subMenuList: [
            { text: 'Sub Menu 1' },
            { text: 'Sub Menu 2' },
            { text: 'Sub Menu 3' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.navbar {
  background: var(--bg);
  color: var(--color);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 20px;
  display: flex;
}
</style>
