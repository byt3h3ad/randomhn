<script setup lang="ts">
import IconCommunity from './icons/IconCommunity.vue'
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b border-white/[0.1] bg-zinc-900 py-4">
    <div class="flex items-center justify-center">
      <div class="flex gap-6">
        <a href="/" class="flex items-center space-x-2">
          <IconCommunity />
          <span class="inline-block text-xl font-bold text-zinc-300">Hacker News</span>
        </a>
      </div>
    </div>
  </header>
</template>
