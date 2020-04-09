<template>
  <div class="products">
    <Swiper :item="product" size="sm" />
    <main>
      <h1>{{product.name}}</h1>

      <div class="sold" v-if="product.view > 0 || product.sold > 0">
        <template v-if="product.view > 0">
          <span>
            <span>🔥 </span>
            <span class="text">{{product.view}}</span>
          </span>
        </template>
        <template v-if="product.sold > 0">
          <span class="divider"></span>
          <span>
            <span>售出 </span>
            <span class="text">{{product.sold}}</span>
          </span>
        </template>
      </div>

      <div class="financial">
        <span>💲 </span>
        <span class="price">{{product.price}} <small class="currency">{{product.currency}}</small></span>
      </div>

      <div class="location">
        <span>
          <span>@ </span>
          <a :href="`https://www.google.com.tw/maps/search/${product.lat},${product.lng}`">
            🗺️ {{ product.country }}, {{ product.city }}</a>
        </span>
      </div>

      <div class="back">
        <router-link :to="{ name:'home'}">🔙 返回</router-link>
      </div>
    </main>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Swiper from '@/components/Swiper'

export default {
  name: 'Products',
  components: {
    Swiper
  },
  data() {
    return {
      product: {}
    }
  },
  methods: {
    ...mapActions(['fetchProductById']),
    init() {
      const id = this.$route.params.id
      this.fetchProductById(id).then(data => {
        this.product = data
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped lang="scss">
.products {
  main {
    max-width: 1200px;
    padding: 1rem 0.5rem;
    margin: auto;
    > div {
      margin: 0.5rem;
    }
  }
  .divider {
    display: inline-block;
    margin: 0 0.5rem;
    width: 1px;
    height: 1.5rem;
    background: #ccc;
    vertical-align: bottom;
  }
  .price {
    color: #087abc;
    font-size: 1.6em;
  }
  .currency {
    font-size: 1rem;
    color: initial;
  }
  .back {
    padding: 2rem;
  }
}
</style>
