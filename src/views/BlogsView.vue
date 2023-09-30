<script setup lang="ts">

import BlogCard from "@/components/BlogCard.vue";
import posts from "../data/db"
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div class="container">

    <PageHeader title="Our latest blog posts and news" description="Stay up-to-date with the latest industry news as our marketing teams finds new ways to enhance
        productivity."/>
    <div class="blog-cards-container">
      <BlogCard v-for="post in posts" :key="post.id" :id="post.id" :title="post.title"
                :short_description="post.short_description"
                :img="post.img"/>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>