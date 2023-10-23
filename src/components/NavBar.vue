<script setup lang="ts">

import {ref} from "vue";
import {signOut} from "firebase/auth"
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import {auth} from "@/firebase/config";
import useClickOutside from "@/composables/useClickOutside";

const {user} = getUser();
const router = useRouter()
const showMenu = ref(false)
const showModal = ref(false)
const landingMenu = ref(null)
const modal = ref(null)


async function handleLogout() {
  await signOut(auth)
  if (!user.value) {
    await router.push('/')
  }

}

function handleMenuClick() {

  showMenu.value = !showMenu.value;

}

console.log(user.value)

function handleUserIconClick() {

  showModal.value = !showModal.value;

}


useClickOutside(modal, () => {
  showModal.value = false
})
useClickOutside(landingMenu, () => {
  showMenu.value = false
})

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
            <div @click="handleMenuClick" ref="landingMenu" class="ham-menu hide-for-desktop">
              <img src="/assets/icons/menu-icon.svg" alt="menu">
            </div>

          </div>

          <div v-if="showMenu"
               class="mobile-menu absolute z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hide-for-desktop">

            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

              <li class="px-1">

                <router-link
                    class=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    :to="{name: 'landing'}">
                  Home
                </router-link>
                <a href="#"
                   class=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a>
                <a href="#"
                   class=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Privacy</a>
                <router-link
                    class=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    :to="{name: 'blogs'}">
                  Blog
                </router-link>
                <router-link
                    class=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    :to="{name: 'contact'}">
                  Contact
                </router-link>

                <router-link
                    class=" rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white login"
                    :to="{name: 'login'}">
                  Login
                </router-link>
              </li>
            </ul>

          </div>

        </div>


        <div ref="modal" @click="handleUserIconClick"
             class=" relative cursor-pointer flex items-center justify-center gap-4" v-if="user">

          <img class="user-icon rounded-full" :alt="user.displayName" :src="user.photoURL">

          <div v-if="showModal" class="options-modal absolute">
            <div id="dropdown"

                 class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li class="px-1">

                  <a href="#"
                     class="rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div class="flex gap-2.5 items-center">
                      <div class="flex flex-col items-start justify-center">
                        <p class="text-gray-700 font-semibold text-14">{{ user.displayName }}</p>
                        <p class="text-gray-700 text-12  ">{{ user.email }}</p>
                      </div>
                    </div>

                  </a>

                </li>

                <hr class="mt-2 mb-2">
                <li class="px-1">
                  <a @click="handleLogout" href="#"
                     class="rounded-lg block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>

                </li>

              </ul>
            </div>
          </div>
        </div>


      </nav>
    </div>
  </div>

</template>

<style lang="scss">
@import "../assets/styles/components/navbar";

.user-icon {
  width: 32px;
  height: 32px;
}

.options-modal {
  top: 40px;
  right: 16px;
}

.mobile-menu {
  top: 64px;
  right: 16px;
}
</style>