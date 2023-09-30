<script setup lang="ts">

import BlogCard from "@/components/BlogCard.vue";
</script>

<template>
  <div class="container">
    <div class="blog-page-heading">
      <h4>
        Our latest blog posts and news
      </h4>

      <p>Stay up-to-date with the latest industry news as our marketing teams finds new ways to enhance
        productivity.</p>
    </div>
    <div class="blog-cards-container">
      <BlogCard/>
    </div>
  </div>

</template>

<style scoped lang="scss">
.blog-page-heading {
  margin: 128px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h4 {
    color: #000;
    font-family: Montserrat, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 87.5% */
    text-align: center;

  }

  p {
    max-width: 550px;
    color: rgba(0, 0, 0, 0.75);
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 175% */
  }


}
</style>