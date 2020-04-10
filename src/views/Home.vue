<template>
  <div class="home">
    <Swiper />
    <SearchBar @change="searchHandler" />
    <CardList :list="filteredData" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Swiper from '@/components/Swiper'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'

export default {
  name: 'Home',
  components: {
    Swiper,
    SearchBar,
    CardList
  },
  data() {
    return {
      isLoading: false,
      searchTimerId: null
    }
  },
  computed: {
    ...mapGetters(['filteredData'])
  },
  methods: {
    ...mapActions(['setSearch', 'fetchProducts']),
    searchHandler(val) {
      // TODO: debounce
      this.$store.dispatch('setSearch', val)
    },
    init() {
      // TODO: 實作 loading？
      this.isLoading = true
      this.fetchProducts().finally(() => (this.isLoading = false))
    }
  },
  created() {
    this.init()
  }
}
</script>
<style scoped lang="scss">
</style>
