<template>
  <div class="swiper">

      <img :src="item.image" :alt="item.name" :class="size"/>

  </div>
</template>
<script>
export default {
  name: 'Swiper',
  props: {
    item: {
      type: Object,
      default: () => [
        {
          name: 'default image',
          image:
            'https://static.owlting.com/experiences/service/data/banner/jaunt-travel-tw.jpg'
        }
      ]
    },
    size: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
<style scoped lang="scss">
.swiper {
  display: block;
  background-color: #eee;

  > a {
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 500px;
    object-position: center;

    &.sm {
      height: 350px;
    }
  }
}
@media screen and (max-width: 768px) {
  .swiper {
    img {
      object-fit: unset;
      height: unset;
      width: 150%;
      transform: translateX(-25%);
      &.sm {
        height: unset;
      }
    }
  }
}
</style>
