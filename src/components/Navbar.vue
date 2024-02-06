<script setup>
</script>

<template>
    <nav class="bg-black text-white">
        <div class="max-w-screen-2xl mx-auto flex justify-between items-center p-4">
            <!-- 左侧Logo -->
            <h1 class="text-white text-2xl font-bold hover:text-gray-300 transition-colors duration-300">
                FrontStar<span>✨</span>
            </h1>
            <!-- 右侧链接 -->
            <div class="flex space-x-4">
                <!-- 链接占位符 -->
                <router-link to="contribute" class="hover:text-gray-300 transition-colors duration-300">To Contribute</router-link>
                <!-- 更多链接 -->
            </div>
        </div>
    </nav>
</template>