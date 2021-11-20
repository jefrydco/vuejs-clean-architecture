<template>
  <h2 class="user">Hi, {{ user.name }}!</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>
.user {
  margin-top: 100px;
}
</style>