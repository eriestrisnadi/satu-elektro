<template>
  <footer
    class="p-10 grid place-items-start w-full text-sm leading-5 grid-flow-row sm:grid-flow-col"
  >
    <div class="flex-1">
      <h1
        class="flex items-center text-5xl font-semibold space-x-1 text-primary"
      >
        <NuxtLogo class="w-20 h-20" />
        <span>Elektro</span>
      </h1>
      <p>Elektro Pte Ltd.<br />Providing reliable electronics since 2002</p>
    </div>
    <div class="grid place-items-start gap-1">
      <h5 class="mb-2 font-semibold opacity-50 uppercase">Services</h5>
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Branding</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Design</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Marketing</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Advertisement</nuxt-link
      >
    </div>
    <div class="grid place-items-start gap-1">
      <h5 class="mb-2 font-semibold opacity-50 uppercase">Company</h5>
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >About us</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Contact</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Jobs</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Press kit</nuxt-link
      >
    </div>
    <div class="grid place-items-start gap-1">
      <h5 class="mb-2 font-semibold opacity-50 uppercase">Legal</h5>
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Terms of use</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Privacy policy</nuxt-link
      >
      <nuxt-link
        to="/"
        class="hover:underline focus:underline hover:text-primary focus:text-primary"
        >Cookie policy</nuxt-link
      >
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainFooter',
})
</script>
