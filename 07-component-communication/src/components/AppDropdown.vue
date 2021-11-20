<template>
  <div class="dropdown">
    <button class="dropdown__trigger dropdown__btn">
      {{ text }}
    </button>
    <div class="dropdown__submenu">
      <app-dropdown-item v-for="(sub, i) in subMenu" :key="i" :text="sub.text" />
    </div>
  </div>
</template>

<script>
import AppDropdownItem from './AppDropdownItem.vue'

export default {
  components: {
    AppDropdownItem
  },
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    subMenu: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.dropdown__btn {
  background: var(--bg);
  color: var(--color);
  outline: none;
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 5px 10px;
}

.dropdown__btn:not(:last-child) {
  margin-right: 50px;
}

.dropdown__submenu {
  position: absolute;
}

.dropdown__submenu .dropdown__btn {
  display: block;
}
</style>
