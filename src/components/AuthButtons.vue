<script setup lang="ts">

const {authMethod} = defineProps<{
  authMethod: string
}>()

</script>

<template>
  <!-- AUTH BUTTONS START   -->
  <div class="auth-buttons-container">
    <div class="auth-button google-login-button">
      <img src="../assets/icons/Google%20Logo.png" alt="sign up with google"/>
      <p>{{ authMethod}} with Google</p>
    </div>
    <div class="auth-button apple-login-button">
      <img src="../assets/icons/Apple%20Logo.png" alt="sign up with apple"/>
      <p>{{ authMethod}} with Apple</p>
    </div>
  </div>
  <!-- AUTH BUTTONS END  -->

</template>

<style lang="scss">
@import "../assets/styles/styleComponents/form";

</style>