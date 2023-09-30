<script setup lang="ts">
const { title, short_description, img} = defineProps<{
  title: string;
  short_description: string;
  img: string
}>()
</script>

<template>
  <div class="blog-card-container">
    <img :src="img" :alt="title">
    <div class="blog-card-details">
      <h3>{{title}}</h3>
      <p>{{short_description}}</p>
      <button>Read more</button>
    </div>
  </div>

</template>

<style lang="scss">
@import "../assets/globals/variables";

.blog-card-container {
  width: 100%;
  margin-bottom: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  .blog-card-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    h3 {
      color: #000;
      font-family: Montserrat, sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px; /* 116.667% */
    }

    p {
      color: rgba(0, 0, 0, 0.75);
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px; /* 175% */
    }

    button {
      width: 144px;
      height: 40px;
      padding: 16px 32px;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      background-color: black;

      &:hover {
        background-color: $primary-darker !important;

      }

      &:active {
        background-color: $primary-dark-hover !important;

      }


    }
  }

  img {
    max-width: 512px;
    border-radius: 16px;
  }
}
</style>