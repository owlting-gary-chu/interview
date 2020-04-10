<template>
  <main>
    <template v-for="v in list">
      <Card
        :key="v.name"
        :item="v"
      ></Card>
    </template>
  </main>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'CardList',
  components: {
    Card
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
main {
  max-width: 1200px;
  padding: 1rem 0.5rem;
  margin: auto;
  display: flex;

  > .item {
    flex: 0 0 32%;
    max-width: 32%;
    margin: 0.3rem;
  }
}

@media screen and (max-width: 992px) {
  main {
    > .item {
      flex: 0 0 48%;
      max-width: 48%;
      margin: 0.8%;
    }
  }
}

@media screen and (max-width: 572px) {
  main {
    > .item {
      flex: 0 0 98%;
      max-width: 98%;
      margin: 1%;
    }
  }
}
</style>
