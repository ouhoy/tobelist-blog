<script setup lang="ts">

</script>

<template>

  <div class="container">
        <div class="nav-container">
            <nav>


                <div class="logo">
                    <img src='../assets/images/logo.svg' alt="Tobelist logo"/>
                </div>
                <div class="menu-cta">
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

                      <router-link :to="{name: 'login'}">
                        Login
                      </router-link>
                      <router-link :to="{name: 'signup'}">
                        <button class="hide-for-mobile hide-for-tablet">
                            Get started
                        </button>
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>

</template>

<style scoped lang="scss">
@import "../assets/styles/components/navbar";
</style>