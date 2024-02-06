<script setup lang="ts">
interface item {
  url: string
  date: string
}

const currentDate: Date = new Date()
const endDate: Date = new Date('2007-02-19')
const difference = currentDate.getTime() - endDate.getTime()
const randomMilliseconds = Math.floor(Math.random() * difference)
const randomDate = new Date(currentDate.getTime() - randomMilliseconds)
const year = randomDate.getFullYear()
const month = String(randomDate.getMonth() + 1).padStart(2, '0')
const day = String(randomDate.getDate()).padStart(2, '0')
const targetDate = `${year}-${month}-${day}`
const targetUrl = `https://news.ycombinator.com/front?day=${targetDate}`
const data: item = {
  url: targetUrl,
  date: new Date(targetDate).toDateString()
}
</script>

<template>
  <section className="flex flex-col items-center gap-4 text-zinc-200">
    <a
      href="/"
      :title="data.date"
      class="flex w-fit justify-center rounded-md bg-vermilion-500 px-4 py-1.5 text-xl font-semibold shadow-sm hover:bg-vermilion-400 hover:text-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vermilion-500"
      >Teleport</a
    >
    <a
      :href="data.url"
      :title="data.date"
      target="_blank"
      rel="noopener noreferrer"
      class="text-lg hover:text-indigo-400"
    >
      {{ data.date }}
    </a>
  </section>
</template>
