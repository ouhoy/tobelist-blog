<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
import AuthButtons from "@/components/AuthButtons.vue";
import {ref} from "vue";
import useLogin from "@/composables/useLogin";
import {useRouter} from "vue-router";


const {error, isPending, login} = useLogin()
const router = useRouter()

const email = ref("");
const password = ref("");

async function handleSubmit() {
  await login(email.value, password.value)

  if (!error.value) await router.push('/app')
  if(error.value) {
    console.log(error.value)
  }

}

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

    <form @submit.prevent="handleSubmit">

      <label for="email">Email</label>
      <input v-model="email" id="email" placeholder="Example@email.com" type="email">

      <label for="password">Password</label>
      <input v-model="password" id="password" placeholder="Password" type="password">

      <button>Login</button>
    </form>

  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/components/form";

</style>