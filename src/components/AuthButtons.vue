<script setup lang="ts">

const {authMethod} = defineProps<{
  authMethod: string
}>()
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useRouter} from "vue-router";


const router = useRouter()

function signInWithGoogle(){
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).then((res)=>{
    router.push("/app")
  })
}

</script>

<template>
  <!-- AUTH BUTTONS START   -->
  <div class="auth-buttons-container">
    <div @click="signInWithGoogle" class="auth-button google-login-button">
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
@import "../assets/styles/components/form";

</style>