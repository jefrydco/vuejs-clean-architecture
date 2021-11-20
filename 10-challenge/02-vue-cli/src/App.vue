<template>
  <div id="app">
    <the-loading-bar :is-loading="isLoading"></the-loading-bar>

    <the-search-form v-model="keyword"></the-search-form>

    <div class="m-3">
      <app-button text="Clear" @click="clear"></app-button>
    </div>

    <div class="m-3">
      <app-button
        :is-disabled="!$store.state.pagination['first']"
        text="First"
        @click="navigate('first')"
      ></app-button>
      <app-button
        :is-disabled="!$store.state.pagination['prev']"
        text="Prev"
        @click="navigate('prev')"
      ></app-button>
      <app-button
        :is-disabled="!$store.state.pagination['next']"
        text="Next"
        @click="navigate('next')"
      ></app-button>
      <app-button
        :is-disabled="!$store.state.pagination['last']"
        text="Last"
        @click="navigate('last')"
      ></app-button>
    </div>

    <router-view />

    <app-dialog></app-dialog>
  </div>
</template>

<script>
import TheLoadingBar from './components/TheLoadingBar.vue'
import TheSearchForm from './components/TheSearchForm.vue'
import AppDialog from './components/AppDialog.vue'

import { pDebounce } from './utils'

export default {
  components: {
    TheLoadingBar,
    TheSearchForm: TheSearchForm,
    AppDialog: AppDialog
  },
  data() {
    return {
      isLoading: false,
      keyword: ''
    }
  },
  computed: {
    url: {
      get() {
        return this.$store.state.url
      },
      set(url) {
        this.$store.commit('SET_URL', { url })
      }
    }
  },
  watch: {
    keyword: pDebounce(async function keywordHandler(keyword) {
      if (keyword && keyword.length >= 3) {
        await this.search(keyword, this.url)
      } else {
        this.resetData()
      }
    }, 250)
  },
  methods: {
    async search(keyword, url, pagination) {
      try {
        this.isLoading = true
        const response = await fetch(
          pagination
            ? pagination
            : `https://cari-teks-video-api.vercel.app/api/search?&q=${keyword}&url=${encodeURIComponent(
                url
              )}`
        ).then((_) => (_.ok ? _.json() : []))

        this.$store.commit('SET_RESULT_LIST', { resultList: response.data })
        this.$store.commit('SET_PAGINATION', {
          first: response.first,
          last: response.last,
          prev: response.prev,
          next: response.next,
          total: response.total,
          page: response.page
        })
        await this.$router.push({
          name: 'SearchResultPage',
          params: { page: response.page }
        })
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          this.isLoading = false
        }, 1000)
      }
    },
    async navigate(type) {
      if (!this.$store.state.pagination[type]) {
        return
      }
      await this.search(
        this.keyword,
        this.url,
        this.$store.state.pagination[type]
      )
    },
    async clear() {
      this.keyword = ''
      this.resetData()
      await this.$router.replace('/')
    },
    resetData() {
      this.$store.commit('SET_RESULT_LIST', { resultList: [] })
      this.$store.commit('RESET_PAGINATION')
    }
  }
}
</script>
