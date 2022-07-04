<template>
  <div>
    <nuxt-link :to="`/products/${slug}`">
      <img
        class="transform transition-transform hover:scale-110 focus:scale-110 duration-150 h-56 mx-auto object-cover"
        :src="image"
        :alt="name"
      />
    </nuxt-link>
    <div class="text-center mt-2">
      <p>
        <nuxt-link
          :to="`/products/${slug}`"
          class="hover:underline focus:underline hover:text-primary focus:text-primary transition-all duration-150"
          >{{ name }}</nuxt-link
        >
      </p>
      <p class="font-semibold text-lg">{{ formattedPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ProductCard',
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    slug: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
    },
    formattedPrice: {
      type: String,
    },
  },
})
</script>
