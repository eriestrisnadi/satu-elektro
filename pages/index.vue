<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-10">
    <ProductCard
      v-for="item in product.list"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :formatted-price="item.formatted_price"
      :image="item.image_url"
      :slug="item.slug"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  fetch({ store }) {
    return store.dispatch('product/FETCH_LIST')
  },
  computed: {
    ...mapState(['product']),
  },
})
</script>
