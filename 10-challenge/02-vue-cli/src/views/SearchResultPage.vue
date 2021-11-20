<template>
  <main>
    <div class="m-5">
      {{ $store.state.pagination.total }} search results found. Currently on
      page {{ $store.state.pagination.page }}
    </div>
    <app-search-result></app-search-result>
  </main>
</template>

<script>
import AppSearchResult from '../components/AppSearchResult.vue'

export default {
  components: {
    AppSearchResult
  },
  async created() {
    if (this.$store.state.resultList.length === 0) {
      await this.$router.replace('/')
    }
  }
}
</script>
