<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
</script>

<template>

  <PageHeader title="Sign up for Tobelist today!"
              description="Enhance productivity, boost efficiency, and achieve your goals with us. Join tobelist today and supercharge your efficiency!"/>

  <div class="form-container">

    <!-- AUTH BUTTONS START   -->
    <div class="auth-buttons-container">
      <div class="auth-button google-login-button">
        <img src="../assets/icons/Google%20Logo.png" alt="sign up with google"/>
        <p>Sign up with Google</p>
      </div>
      <div class="auth-button apple-login-button">
        <img src="../assets/icons/Apple%20Logo.png" alt="sign up with apple"/>
        <p>Sign up with Apple</p>
      </div>
    </div>
    <!-- AUTH BUTTONS END  -->

    <div class="separator-container">
      <hr/>
      <p>OR</p>
      <hr/>
    </div>

    <form>
      <label>Name</label>
      <input type="text">
      <label>Email</label>
      <input type="email">
      <label>Password</label>
      <input type="password">

      <button>Create my tobelist</button>
    </form>

  </div>

</template>

<style scoped lang="scss">
@import "../assets/styles/styleComponents/form";
</style>