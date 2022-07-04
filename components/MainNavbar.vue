<template>
  <nav class="flex items-center w-full py-0 px-2 bg-secondary">
    <div>
      <h1
        class="text-3xl px-4 font-semibold flex items-center space-x-2 text-primary max-h-12"
      >
        <NuxtLogo class="w-12 h-12" /> <span>Elektro</span>
      </h1>
    </div>
    <div class="flex-shrink-0 items-center flex-1 hidden sm:flex">
      <ul class="inline-flex flex-row p-0">
        <li class="flex">
          <nuxt-link
            to="/"
            class="px-3 py-4 hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition duration-200"
          >
            Kulkas
          </nuxt-link>
        </li>
        <li class="flex">
          <nuxt-link
            to="/"
            class="px-3 py-4 hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition duration-200"
          >
            Kipas
          </nuxt-link>
        </li>
        <li class="flex">
          <nuxt-link
            to="/"
            class="px-3 py-4 hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition duration-200"
          >
            Televisi
          </nuxt-link>
        </li>
        <li class="flex">
          <nuxt-link
            to="/"
            class="px-3 py-4 hover:bg-primary focus:bg-primary hover:text-white focus:text-white transition duration-200"
          >
            Dispenser
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div
      class="flex flex-shrink-0 items-center justify-end flex-1 sm:flex-initial"
    >
      <button
        class="w-12 h-12 inline-flex items-center text-center justify-center hover:bg-primary focus:bg-primary hover:text-white focus:text-white rounded-full transition duration-200 hover:outline-none focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainNavbar',
})
</script>
