<script setup lang="ts">
import { type item, getData } from '../assets/index'
const data: item = await getData()
</script>

<template>
  <section className="flex flex-col gap-2 p-2 text-zinc-200">
    <a :href="data.url" :title="data.title" target="_blank" rel="noopener noreferrer">
      <p className="text-2xl text-center">{{ data.title }}</p>
    </a>
    <p className="text-lg text-center">
      <a
        :href="`https://news.ycombinator.com/item?id=${data?.id}`"
        :title="data.title"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{{ data.score }} points</span>
      </a>
      <span> by </span>
      <a
        :href="`https://news.ycombinator.com/user?id=${data?.by}`"
        :title="data.by"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{{ data.by }}</span>
      </a>
    </p>
  </section>
</template>
