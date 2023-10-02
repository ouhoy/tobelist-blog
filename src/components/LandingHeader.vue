<script setup lang="ts">

</script>

<template>
  <div class="container">


    <header>
      <div class="header-content">
        <h1>Forget your Todolist<br/>Create your Tobelist</h1>
        <p>
          Tobelist is the ultimate form of boosting productivity. Unlike many
          other tools out there, this one can incorporate multiple methods.
        </p>
        <router-link :to="{name: 'signup'}">
        <button>Create my tobelist -free</button>
        </router-link>

        <div class="numbers">
          <div class="num">
            <h4>030+</h4>
            <p>users trust us</p>
          </div>
          <div class="num">
            <h4>900+</h4>
            <p>completed tasks</p>
          </div>
          <div class="num">
            <h4>100%</h4>
            <p>open source</p>
          </div>
        </div>
      </div>
      <img src="src/assets/images/tobelist%20friend.svg" alt="tobelist friend figure">

    </header>

  </div>
</template>

<style lang="scss">

@import "../assets/styles/components/landing-header";


</style>