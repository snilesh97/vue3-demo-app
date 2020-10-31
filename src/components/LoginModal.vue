<template>
  <section class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow-sm w-1/3">
        <h1 class="text-2xl text-center">Login</h1>
        <GoogleLogin @close-login-from-google-login="close"/>
        <p class="text-center my-2">OR</p>
        <EmailLogin @close-login-from-email-login="close"/>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from '../components/Login/GoogleLogin'
import EmailLogin from '../components/Login/EmailLogin'
export default {
  components: { GoogleLogin, EmailLogin },
  emits: ['close-login'],
  methods: {
    close() {
      this.$emit('close-login') 
    }
  }
}
</script>

<style>

</style>