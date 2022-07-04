<template>
  <div class="flex space-y-5 md:space-y-0 md:space-x-10 flex-col md:flex-row">
    <div class="md:w-1/3">
      <img
        v-for="item in product.current.images"
        :key="item.image_id"
        :src="item.image_url"
        :alt="item.image"
        class="w-64 h-64 m-auto object-cover transform transition-transform duration-500 focus:scale-150 hover:scale-150"
      />
    </div>
    <div class="flex-1">
      <h5
        class="text-xl font-semibold opacity-50 border-b-2 border-gray-800 pb-2 mb-2"
      >
        Overview
      </h5>
      <p>
        {{ product.current.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'DetailPage',
  fetch({ store, route }) {
    const { slug } = route.params

    return store.dispatch('product/FETCH_DETAIL', slug)
  },
  computed: {
    ...mapState(['product']),
  },
})
</script>
