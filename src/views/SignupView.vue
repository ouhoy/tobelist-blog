<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
import AuthButtons from "@/components/AuthButtons.vue";
import {ref} from "vue";


const displayName = ref("");
const email = ref("");
const password = ref("");

function handleSubmit() {
  
}

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

    <form @submit.prevent="handleSubmit">
      <label for="name">Name</label>
      <input v-model="displayName" id="name" placeholder="John Doe" type="text">

      <label for="email">Email</label>
      <input v-model="email" id="email" placeholder="Example@email.com" type="email">

      <label for="password">Password</label>
      <input v-model="password" id="password" placeholder="Strong Password" type="password">

      <button>Create my tobelist</button>
    </form>

  </div>

</template>

<style lang="scss">
@import "../assets/styles/components/form";
</style>