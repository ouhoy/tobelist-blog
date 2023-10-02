<script setup lang="ts">

import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div class="container">
    <PageHeader title="We would love to hear from you!"
                description="Just fire away using the contact form below, and we will be responding. Or you can contact us at tobelist@programhaven.com"/>
    <div class="form-container">
      <form>
        <label for="subject">Subject</label>
        <input id="subject" placeholder="Tobelist is great" type="text">
        <label for="email">Email</label>
        <input id="email" placeholder="Example@email.com" type="email">
        <label for="content">Content</label>
        <textarea placeholder="Thank you..." id="content"></textarea>

        <button>Send</button>
      </form>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/components/form";

</style>