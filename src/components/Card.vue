<template>
  <router-link :to="{ name: 'products', params: {id: item.id}}" class="item">
    <div :style="'background-image': `url(${this.item.image})`" class="image"></div>
    <div class="content">
      <label class="label">{{item.name}}</label>
      <div class="location">{{item.city}}</div>
      <div class="sold" v-if="item.view > 0 || item.sold > 0">
        <template v-if="item.view > 0">
          <span>
            <span>🔥 </span>
            <span class="text">{{item.view > 9999 ? '9999 ⬆️' : item.view}}</span>
          </span>
        </template>
        <template v-if="item.sold > 0">
          <span class="border-left"></span>
          <span>
            <span>售出 </span>
            <span class="text">{{item.sold}}</span>
          </span>
        </template>
      </div>
      <div class="price">
        <span>💲 </span>
        <span>{{item.price}} <small>{{item.currency}}</small></span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
@mixin ellipsis($line-clamp: 1) {
  -webkit-line-clamp: $line-clamp;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.border-left {
  border: 0 solid #ccc;
  border-right-width: 1px;
  padding-left: 0.35rem;
  margin-right: 0.35rem;
}

.item {
  display: block;
  min-height: 275px;
  border-radius: 4px;
  border: solid 1px #f2f4f6;
  box-shadow: 0 15px 30px -10px rgba(92, 101, 107, 0.15);
  text-decoration: none;
  color: #000;
  transition: border 0.3s;
  cursor: pointer;

  &:hover {
    border: solid 1px #ccc;
  }

  .image {
    height: 160px;
    background-size: 'cover';
    background-position: 'center';
    background-repeat: 'no-repeat';
  }

  .content {
    text-align: left;
    font-size: 0.9rem;
    padding: 0.75rem;

    label {
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 0;
      color: #000;
      @include ellipsis(2);
    }

    .location,
    .sold {
      color: #889096;
      font-size: 0.7rem;
      @include ellipsis();
    }

    .price {
      font-size: 1.1rem;
      font-weight: bold;
      color: #212529;
      line-height: 2rem;
    }
  }
}
</style>
