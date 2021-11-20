<template>
  <mounting-portal
    v-if="$store.state.currentResultStart && embedUrl"
    mount-to="body"
    append=""
  >
    <div
      class="
        flex
        items-center
        justify-center
        fixed
        left-0
        bottom-0
        w-full
        h-full
        bg-black bg-opacity-50
      "
    >
      <div class="bg-white rounded-lg w-1/2 p-3">
        <div class="embed relative block h-0 p-0 overflow-hidden">
          <iframe
            :src="embedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="absolute top-0 left-0 bottom-0 h-full w-full"
          ></iframe>
        </div>
        <app-button text="Close" class="mt-3" @click="closeDialog"></app-button>
      </div>
    </div>
  </mounting-portal>
</template>

<script>
import { MountingPortal } from 'portal-vue'

export default {
  components: {
    MountingPortal
  },
  computed: {
    youtubeId() {
      // RegEx taken from: https://stackoverflow.com/a/6904504
      return /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/gi.exec(
        this.$store.state.url || ''
      )
    },
    embedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeId[1]}?autoplay=1&start=${this.$store.state.currentResultStart}`
    }
  },
  methods: {
    closeDialog() {
      this.$store.commit('SET_CURRENT_RESULT_START', {
        currentResultStart: undefined
      })
    }
  }
}
</script>
