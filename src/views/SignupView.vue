<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
import AuthButtons from "@/components/AuthButtons.vue";
</script>

<template>

  <PageHeader title="Sign up for Tobelist today!"
              description="Enhance productivity, boost efficiency, and achieve your goals with us. Join tobelist today and supercharge your efficiency!"/>

  <div class="form-container">

    <AuthButtons authMethod="Sign up"/>

    <div class="separator-container">
      <hr/>
      <p>OR</p>
      <hr/>
    </div>

    <form>
      <label for="name">Name</label>
      <input id="name" placeholder="John Doe" type="text">
      <label for="email">Email</label>
      <input id="email" placeholder="Example@email.com" type="email">
      <label for="password">Password</label>
      <input id="password" placeholder="Strong Password" type="password">

      <button>Create my tobelist</button>
    </form>

  </div>

</template>

<style scoped lang="scss">
@import "../assets/styles/components/form";
</style>