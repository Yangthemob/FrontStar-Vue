<script setup>
import { ref, onMounted } from 'vue';

// 将文案分为两部分：'progressive'出现位置之前和之后
const introTextBefore = ref('FrontStar aims to help you uncover🔎 the overlooked aspects of frontend development, through a minimal set of ');
const introTextAfter = ref(' quizzes📜.');
const progressiveWord = ref(''); // 用于逐字添加'progressive'

onMounted(() => {
  let word = 'progressive';
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < word.length) {
        progressiveWord.value += word[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 每200毫秒添加一个字符
  }, 1500);
});
</script>



<template>
    <div class="relative bg-cover bg-center" style="background-image: url('/front-end-roadmap.webp');">
      <div class="bg-black bg-opacity-80 flex items-center justify-center" style="height: 400px;">
        <div class="text-center p-4">
          <h2 class="text-white text-5xl font-bold mb-2">FrontStar✨</h2>
          <p class="text-white text-xl mb-4">Test your entire knowledge map of the frontend landscape, really quick. 🚀</p>
          <p class="text-gray-200 text-lg max-w-md mx-auto">
            {{ introTextBefore }}
            <span class="bg-clip-text text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-green-500">{{ progressiveWord }}</span>
            {{ introTextAfter }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
