<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
import AuthButtons from "@/components/AuthButtons.vue";
</script>

<template>
  <PageHeader title="Welcome back to Tobelist!"
              description="Login today to stay organized and make the most of your tasks!"/>

  <div class="form-container">

    <AuthButtons authMethod="Login"/>

    <div class="separator-container">
      <hr/>
      <p>OR</p>
      <hr/>
    </div>

    <form>

      <label for="email">Email</label>
      <input id="email" placeholder="Example@email.com" type="email">
      <label for="password">Password</label>
      <input id="password" placeholder="Password" type="password">

      <button>Login</button>
    </form>

  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/styleComponents/form";

</style>