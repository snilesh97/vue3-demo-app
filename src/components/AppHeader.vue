<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link v-for="item in links" :key="item.to" class="mx-2" :to="item.to"> {{item.title}} </router-link>
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button>
  </nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
  props: ['isLoggedIn'],
  data () {
    return {
      links: [
        { title: "DC Hero", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reuseable-modal" },
      ]
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
}
</script>

<style>

</style>