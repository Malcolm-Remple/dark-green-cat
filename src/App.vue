<script setup>
import { ref, onBeforeMount } from 'vue';

const data = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch("https://www.lightspeedhq.com/wp-json/lexic/v1/btf_hero_module/btf_hero_module/");
    const result = await response.json();

    data.value = result;
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  fetchData();
});
</script>

<template>
  <main class="flex items-center h-screen bg-gray-900">

    <!-- Container -->
    <div class="container">

      <!-- Flex Wrapper -->
      <div class="flex flex-col w-10/12 mx-auto lg:w-11/12 lg:flex-row lg:gap-x-20 2xl:gap-x-20">
 
        <!-- Content Wrapper -->
        <div class="text-center text-white mb-14 lg:mb-0 lg:w-5/12 lg:text-left">

          <!-- Title -->
          <h1 class="text-5xl font-bold leading-tight lg:text-6xl font-workSans mb-7">
            {{ data.title }}
          </h1>

          <!-- Text -->
          <p class="mb-10 text-xl font-light leading-tight font-roboto lg:mb-12">
            {{ data.text }}
          </p>

          <!-- CTA -->
          <button class="w-full px-8 py-4 text-lg font-bold tracking-wide transition duration-500 ease-in-out bg-red-600 md:w-auto rounded-xl font-roboto hover:bg-red-800">
            {{ data.cta_1.text }}
          </button>

        </div>
        <!-- Close Content Wrapper -->

        <!-- Video -->
        <video :poster="data.video.poster_url" autoplay loop class="w-full lg:w-7/12">
          <source :src="data.video.webm_url" type="video/webm">
          <source :src="data.video.mp4_url" type="video/mp4">
        </video>

      </div>
      <!-- Close Flex Wrapper -->

    </div>
    <!-- Close Container -->

  </main>
</template>
