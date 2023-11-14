<template>
  <main>
    <TheHeader class="" />
    <slot />
    <TheFooter />
  </main>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'apple-touch-icon',
      href: '/image/logo-page.svg',
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/image/logo-page.svg'
    },
    {
      rel: 'shortcut icon',
      type: 'image/png',
      href: '/image/logo-page.svg'
    }
  ]
})
useSeoMeta({
  title: 'Younoch',
  description:
    'Find inspiring quotes on our website that will motivate you to live your best life. Browse by category, author, or topic and share your favorites with others.',
  applicationName: 'Younoch',
  contentType: 'text/html; charset=utf-8',
  keywords: 'younoch'
})
</script>
