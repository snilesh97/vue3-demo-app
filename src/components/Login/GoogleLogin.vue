<template>
  <section class="text-center my-5">
    <button class="border px-2 rounded" @click="loginWithGoogle">Login With Google </button>
  </section>
</template>

<script>
import firebase from '../../utilities/firebase';
export default {
  emits: ['close-login-from-google-login'],
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(()=> {
        this.$emit('close-login-from-google-login')
      });
    },
  }
}
</script>

<style>

</style>
