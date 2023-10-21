<script setup lang="ts">

import {ref} from "vue";
import {signOut} from "firebase/auth"
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {auth} from "@/firebase/config";

const {user} = getUser();
const router = useRouter()
const showMenu = ref(false)

async function handleLogout() {
  await signOut(auth)
  if (!user.value) {
    await router.push('/')
  }

}

function handleMenuClick() {

  showMenu.value = !showMenu.value;

}

</script>

<template>

  <div class="container">
    <div class="nav-container">
      <nav>
        <router-link :to="{name: 'landing'}">

          <div class="logo">

            <img src="/assets/icons/logomark.svg" alt="tobelist logo">

            <h4 class="hide-for-mobile">tobelist.net</h4>
          </div>
        </router-link>


        <div v-if="!user" class="menu-cta">


          <div class="menu hide-for-mobile hide-for-tablet">
            <router-link :to="{name: 'landing'}">
              Home
            </router-link>
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <router-link :to="{name: 'blogs'}">
              Blog
            </router-link>
            <router-link :to="{name: 'contact'}">
              Contact
            </router-link>

          </div>

          <div class="cta">

            <router-link class="hide-for-mobile hide-for-tablet" :to="{name: 'login'}">
              Login
            </router-link>
            <router-link :to="{name: 'signup'}">
              <button> Get started</button>
            </router-link>
            <div @click="handleMenuClick" class="ham-menu hide-for-desktop">
              <img src="/assets/icons/menu-icon.svg" alt="menu">
            </div>

          </div>
          <div v-if="showMenu" class="mobile-menu hide-for-desktop">
            <router-link :to="{name: 'landing'}">
              Home
            </router-link>
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <router-link :to="{name: 'blogs'}">
              Blog
            </router-link>
            <router-link :to="{name: 'contact'}">
              Contact
            </router-link>

            <router-link class="login" :to="{name: 'login'}">
              Login
            </router-link>
          </div>

        </div>

         <div class="cursor-pointer" v-if="user" @click="handleLogout">{{ user.displayName }}</div>


      </nav>
    </div>
  </div>

</template>

<style lang="scss">
@import "../assets/styles/components/navbar";
</style>