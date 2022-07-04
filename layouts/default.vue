<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
      <div
        class="sm:p-10 border border-t-0 border-dashed border-gray-800 rounded-b-3xl"
      >
        <MainNavbar ref="navbar" class="mb-10" />
        <main ref="main" class="flex flex-col" :style="{ minHeight }">
          <Nuxt />
        </main>
      </div>
      <MainFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      minHeight: 'auto',
    }
  },
  mounted() {
    this.minHeight =
      window.innerHeight -
      this.$root.$el.clientHeight +
      this.$refs.main.clientHeight +
      'px'
  },
}
</script>
