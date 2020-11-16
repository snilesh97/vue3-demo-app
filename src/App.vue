<template>
  <AppHeader/>
  <router-view></router-view>
  <LoginModal/>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "../src/utilities/firebase"

export default {
  components: { AppHeader, LoginModal },
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
