<script setup lang="ts">

import {useRoute} from "vue-router";
import posts from "@/data/db";

const route = useRoute();

const id = Number(route.params.id);
const currentPost = posts[id - 1];


</script>

<template>
  <div class="container">
    <header>
      <h4>
        {{ currentPost.title }}
      </h4>
      <p>{{ currentPost.short_description }}</p>
    </header>
    <div class="blog-details">
    <img :src="currentPost.img" :alt="currentPost.title">

      <p>{{ currentPost.body }}</p>

    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  color: rgba(0, 0, 0, 0.75);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
}

header {
  margin: 128px auto 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  h4 {
    color: #000;
    text-align: center;
    font-family: Montserrat, serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
  }

  p {
    max-width: 624px;
    text-align: center;

  }

}


.blog-details {

  max-width: 768px;
  margin: 0 auto;

  img {
    width: 100%;
    max-width: 768px;
    margin-bottom: 56px;
    border-radius: 16px;

  }

}
</style>