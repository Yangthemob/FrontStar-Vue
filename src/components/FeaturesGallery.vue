<template>
    <div class="bg-black text-white py-12">
      <div class="max-w-screen-2xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">What's in FrontStar?</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Breadth First📚"
            description="Focus more on the expanse of the frontend knowledge system, rather than wrestling with obscure details."
            imageUrl="FeaturesImg/Flat.png"
          />
          <FeatureCard
            title="Dynamic Q&A  Queue🔄"
            description="Dynamically filters the remaining Q&A queue based on your performance to maximize your time efficiently."
            imageUrl="FeaturesImg/Flat.png"
          />
          <FeatureCard
            title="Lazy & Easy✅"
            description="All quiz can be completed with only clicks."
            imageUrl="FeaturesImg/Flat.png"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import FeatureCard from './FeatureCard.vue';
  </script>