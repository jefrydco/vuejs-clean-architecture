<template>
  <div id="app">
    <img
      src="https://i.imgur.com/npKt6xa.gif"
      @click="isVisible = !isVisible"
    />
    <transition name="fade">
      <app-dialog
        v-if="isVisible"
        @cancel="isVisible = false"
        @oke="isVisible = false"
      ></app-dialog>
    </transition>
  </div>
</template>

<script>
const AppDialog = () =>
  import(/* webpackChunkName: "AppDialog" */ './components/AppDialog.vue')

export default {
  name: 'App',
  components: {
    AppDialog
  },
  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
