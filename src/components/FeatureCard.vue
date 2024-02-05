<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String
});
</script>

<template>
    <div class="p-4 bg-black rounded-xl border border-gray-500 hover:shadow-md hover:shadow-white transition-shadow duration-200 ease-in-out">
        <div class="flex flex-col items-center text-center">
            <!-- Adjusted image to be a rectangle -->
            <img :src="imageUrl" alt="Feature image" class="mb-4 h-48 object-cover rounded-lg" />
            <h3 class="text-xl font-semibold mb-2 text-white">{{ title }}</h3>
            <p class="text-gray-400">{{ description }}</p>
        </div>
    </div>
</template>

<style>
/* Ensure the image covers the space properly without stretching */
img {
  width: 100%; /* Set width to 100% of its parent */
  height: auto; /* Set height to scale automatically */
  aspect-ratio: 16 / 9; /* Use an aspect ratio for the image */
}
</style>
