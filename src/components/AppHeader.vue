<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link v-for="item in links" :key="item.to" class="mx-2" :to="item.to"> {{item.title }} </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "DC Hero", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
      ]
    }
  }
}
</script>

<style>

</style>