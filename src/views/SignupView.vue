<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
import AuthButtons from "@/components/AuthButtons.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import useSignup from "@/composables/useSignup";

const router = useRouter()
const {error, isPending, signup} = useSignup()

const displayName = ref("");
const email = ref("");
const password = ref("");

async function handleSubmit() {
  await signup(displayName.value, email.value, password.value)
  if (!error.value) {
    await router.push("/app")
  }

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

      <button>
        <div v-if="isPending" class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span v-else>Create my tobelist</span>
      </button>
    </form>

  </div>

</template>

<style  lang="scss">
@import "../assets/styles/components/form";



.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  scale: 0.6;
}

.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>