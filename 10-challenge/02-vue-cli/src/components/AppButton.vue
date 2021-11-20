<template>
  <button
    class="
      pagination
      hover:bg-blue-400
      shadow
      rounded
      text-white
      font-extrabold
      bg-blue-300
      p-3
      m-1
    "
    :disabled="isDisabled"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
