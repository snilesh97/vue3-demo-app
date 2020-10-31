<template>
  <form class="p-2 my-2" @submit.prevent="submit">
    <div class="my-4">
      <label> Email or Username</label>
      <input v-model="email" required class="rounded shadow p-2 w-full" placeholder="Enter your email or username" ref="emailField"/>
    </div>
    <div class="my-4">
      <label> Password </label>
      <input v-model="password" required type="password" class="rounded shadow p-2 w-full" placeholder="Enter your password"/>
    </div>
    <div class="my-4">
      <button type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 ro placeholder-pink-600 text-white p-2">
        <span v-if="!isLoading">Login</span>
        <span v-else>⏳</span>
      </button>
    </div>
  </form>
</template>

<script>
import firebase from '../../utilities/firebase'
export default {
  emits: ['close-login-from-email-login'],
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
        this.$emit('close-login-from-email-login') 
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
