<script setup lang="ts">

import {ref} from "vue";

const method = ref("add")
const task = ref("")

function handleSubmit() {
  console.log(task)
  task.value= ""
}

</script>

<template>

   <form class="mt-2.5" @submit.prevent="handleSubmit">
    <div class="relative">

      <input type="search" id="default-search"
             class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Task of the day..." v-model="task">

      <button type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ method }}
      </button>
    </div>

  </form>


</template>

<style scoped lang="scss">

</style>