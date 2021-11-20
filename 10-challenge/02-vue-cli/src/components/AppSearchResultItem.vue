<template>
  <li class="mb-3">
    <span v-html="resultText"></span>
    <app-button :text="buttonText" @click="onPlay"></app-button>
  </li>
</template>

<script>
export default {
  props: {
    resultStart: {
      type: Number,
      default: 0
    },
    resultText: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonText() {
      return `Play video at ${this.resultStart}s`
    }
  },
  methods: {
    onPlay() {
      this.$store.commit('SET_CURRENT_RESULT_START', {
        currentResultStart: this.resultStart
      })
    }
  }
}
</script>
