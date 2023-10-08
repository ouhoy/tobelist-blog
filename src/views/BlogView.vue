<script setup lang="ts">

import {useRoute} from "vue-router";
import posts from "@/data/db";

const route = useRoute();

const id = Number(route.params.id);
const currentPost = posts[id - 1];


function estimatedReadingTime(text: string) {
  const wordCount = text.split(/\s+/).length;
  const averageReadingSpeed = 200;
  return Math.ceil(wordCount / averageReadingSpeed)


}

</script>

<template>
  <div class="container">
    <header>
      <div class="tags">
        <span >Time Management</span>
      </div>
      <h4>
        {{ currentPost.title }}
      </h4>
      <div>
        <p>August 22, 2023 <span>•</span> {{ estimatedReadingTime(currentPost.body)}} minute read</p>
      </div>
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
  line-height: 28px;
}

header {
  margin: 64px auto 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  .tags {
    margin-bottom: 8px;

    span {
      border-radius: 25px;
      padding: 8px 16px;
      border: 1px solid black;
      font-size: 14px;
      font-weight: 500;

      &:active {

        transform: scale(0.1);
      }
    }
  }

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