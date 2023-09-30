<script setup lang="ts">


import {ref} from "vue";

const {title, id, short_description, img} = defineProps<{
  title: string;
  short_description: string;
  id: number,
  img: string
}>()

const isLoading = ref(true);

function handleImageLoad() {
  isLoading.value = false;
}

</script>

<template>
  <div class="blog-card-container">
    <div :class="{skeleton: isLoading}" class="card-image ">

      <img @load="handleImageLoad" :src="img" :alt="title"/>
    </div>
    <div class="blog-card-details">
      <h3>{{ title }}</h3>
      <p>{{ short_description }}</p>
      <router-link :to="{name: 'blog', params:{id: id}}">
        <button>Read more</button>
      </router-link>

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
      background-color: $primary;

      &:hover {
        background-color: $primary-hover !important;

      }

      &:active {
        background-color: $primary-active !important;

      }


    }
  }

  .skeleton {
    position: relative;

  }

  .skeleton::before {
    content: "";
    border-radius: 16px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: linear-gradient(90deg, #eee, #f9f9f9, #eee);
    background-size: 200%;
    animation: skeleton 1s infinite reverse;
  }

  @keyframes skeleton {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  .card-image, img {
    width: 512px;
    height: 341.33px;
    border-radius: 16px;

  }
}
</style>