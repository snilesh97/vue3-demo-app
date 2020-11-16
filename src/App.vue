<template>
  <AppHeader @open-login-modal="isLoginOpen = true"/>
  <router-view></router-view>
  <LoginModal v-if ="isLoginOpen" @close-login="isLoginOpen = false"/>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "../src/utilities/firebase"

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: true,
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn', true);
        this.$store.commit('setIsAuthUser', user);
      }
      else {
        this.$store.commit('setIsLoggedIn', false);
        this.$store.commit('setIsAuthUser', {});
      }
    });
  }
}
</script>
