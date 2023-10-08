<script setup lang="ts">
const {title, description} = defineProps<{
  title: string,
  description: string
}>()
</script>

<template>
  <div class="page-heading">
    <h4>
      {{ title }}
    </h4>
    <p>{{ description}}</p>
  </div>
</template>

<style scoped lang="scss">

.page-heading {
  margin: 64px auto;
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