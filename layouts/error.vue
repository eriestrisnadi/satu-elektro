<template>
  <div class="m-auto text-center">
    <NuxtLogo class="text-primary w-24 h-24 mx-auto" />
    <h1 v-if="error.statusCode === 404" class="text-2xl capitalize">
      404 | Page not found
    </h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link
      class="hover:underline focus:underline hover:text-primary focus:text-primary"
      to="/"
    >
      Go back
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'error',
  props: ['error'],
}
</script>
