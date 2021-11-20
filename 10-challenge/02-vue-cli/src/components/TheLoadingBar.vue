<template>
  <div
    class="progress mb-3"
    :class="isLoading ? 'opacity-100' : 'opacity-0'"
  ></div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
