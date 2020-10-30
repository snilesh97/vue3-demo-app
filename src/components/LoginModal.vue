<template>
  <section class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow-sm w-1/3">
        <h1 class="text-2xl text-center">Login</h1>
        <form class="p-2 my-2" @submit.prevent="submit">
          <div class="my-4">
            <label> Email or Username</label>
            <input v-model="email" class="rounded shadow p-2 w-full" placeholder="Enter your email or username" ref="emailField"/>
          </div>
          <div class="my-4">
            <label> Password </label>
            <input v-model="password" type="password" class="rounded shadow p-2 w-full" placeholder="Enter your password"/>
          </div>

          <div class="my-4">
            <button type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 ro placeholder-pink-600 text-white p-2">
              <span v-if="!isLoading">Login</span>
              <span v-else>⏳</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../utilities/firebase'

export default {
  emits: ['close-login'],
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.email = ''
        this.password = ''
        this.isLoading = false;
        this.$emit('close-login')
      }).catch(e => {
        console.log(e);
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.$refs.emailField.focus();
  }
}
</script>

<style>

</style>