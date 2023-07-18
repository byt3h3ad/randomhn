<script setup lang="ts">
import HeaderLogo from './components/HeaderLogo.vue'
import FooterText from './components/FooterText.vue'
import StoryCard from './components/StoryCard.vue'
</script>

<template>
  <main className="flex min-h-screen flex-col items-center">
    <HeaderLogo />
    <section className="flex flex-col place-items-center m-auto">
      <Suspense>
        <StoryCard />
        <template #fallback>Loading... </template>
      </Suspense>
    </section>
    <FooterText />
  </main>
</template>
