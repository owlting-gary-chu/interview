<template>
  <div class="searchbar">
    <input type="text" v-model="search" @input="searchHandler" placeholder="輸入城市／國家／行程關鍵字，開始探索旅程！" />
    <button @click="searchHandler">🔎</button>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchHandler(str) {
      this.$emit('input', this.search)
    }
  }
}
</script>
<style scoped lang="scss">
.searchbar {
  display: inline-flex;
  position: relative;
  z-index: 1;
  margin-top: -30px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 15px 30px -10px rgba(92, 101, 107, 0.15);

  input {
    height: 36px;
    flex: 1;
    flex: 1 0;
    font-size: 1rem;
    border: 8px solid #fff;
    border-radius: 4px 0 0 4px;
    padding-left: 1rem;
    background-color: #f2f4f6;
    -webkit-appearance: none;
    outline: 0;
    &::placeholder {
      color: #adb4ba;
      font-size: 16px;
      letter-spacing: 1.1px;
    }
  }
  button {
    height: 54px;
    flex: 0 1;
    max-width: 80px;
    white-space: nowrap;
    font-size: 1.2rem;
    line-height: 1;
    color: #fff;
    background-color: #3ab3e2;
    border-radius: 0 4px 4px 0;
    outline: 0;
    border: 0;
    padding: 1rem 1.2rem;
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
}
</style>
