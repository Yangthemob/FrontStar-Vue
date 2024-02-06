<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const introTextBefore = ref('FrontStar aims to help you uncover🔎 the overlooked aspects of frontend development, through a minimal set of ');
const introTextAfter = ref(' quizzes📜.');
const progressiveWord = ref(''); // 用于逐字添加'progressive'

const router = useRouter();

// 在组件加载后逐字添加'progressive'
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
    }, 100);
  }, 1500);
});

// 跳转到quiz页面的函数
const navigateToQuiz = () => {
  router.push({ name: 'quiz' }); // 假设路由名称为'quiz'
};
</script>

<template>
    <div class="relative bg-cover bg-center" style="background-image: url('/front-end-roadmap.webp');">
      <div class="bg-black bg-opacity-80 flex flex-col items-center justify-center" style="height: 400px;">
        <div class="text-center p-4">
          <h2 class="text-white text-5xl font-bold mb-2">FrontStar✨</h2>
          <p class="text-white text-xl mb-4">Test your entire knowledge map of the frontend landscape, really quick. 🚀</p>
          <p class="text-gray-200 text-lg max-w-md mx-auto">
            {{ introTextBefore }}
            <span class="bg-clip-text text-xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-green-500">{{ progressiveWord }}</span>
            {{ introTextAfter }}
          </p>
          <!-- 添加的Get Started按钮 -->
          <button @click="navigateToQuiz" class="mt-8 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold rounded-md shadow-lg hover:shadow transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
</template>
