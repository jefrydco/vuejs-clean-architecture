<template>
  <div class="flex flex-wrap mb-3">
    <div class="p-3 bg-blue-100 w-min m-3 rounded shadow form-box">
      <label for="keyword" class="block mb-2"> Keyword </label>
      <input
        id="keyword"
        type="text"
        class="block rounded text-white font-extrabold bg-blue-300 p-3"
        :value="value"
        @input="onInput"
      />
      <p
        id="keyword-info"
        class="mt-2 text-red-600"
        :class="isLessThanExpected ? 'block' : 'hidden'"
      >
        Keyword length must be longer than 3 characters
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLessThanExpected() {
      return this.value.length < 3 && this.value.length > 0
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
