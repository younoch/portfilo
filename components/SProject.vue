<template>
  <section id="s-projects">
    <div class="grid-layout">
      <h2 class="delaySmallReveal text-3xl md:text-4xl">
        Key Projects <span>.</span>
      </h2>
      <div id="projects">
        <article v-for="(item, index) in projectList" :key="index" class="intervalCardReveal none flex flex-col">
          <NuxtImg class="" :src="item.image" densities="x1" alt="" />
          <div class=" flex-grow my-2 flex flex-col">
            <h3 class=" text-center my-1 text-2xl text-violet-400">{{ item.title }}</h3>
            <p class=" text-center flex-grow text-indigo-400 font-medium">
              {{ item.description }}
            </p>
            <p class=" text-sm my-2 text-white">Key Features: {{ item.keyFeatures }}</p>
          </div>
          <a :href="item.link" target="_blank">
            <button class="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full">
              Preview site
            </button>
          </a>
        </article>
      </div>
      <!-- <a
        href="https://github.com/iuricode?tab=repositories"
        rel="noopener"
        target="_blank"
        class="delayExtraBigReveal"
      >Repositórios no GitHub</a> -->
    </div>
  </section>
</template>

<script setup lang="ts">
const projectList = ref([
  {
    image: '/project/cx.jpg',
    title: 'CX Brianstrom',
    description: 'A web app that provided professionals networking platform.',
    keyFeatures: 'Authentication(OAuth), blogging, course enrolling etc.',
    link: 'https://cxbrainstorm.com/'
  },
  {
    image: '/project/kirei-bd.png',
    title: 'Kirei BD',
    description: 'A web app that provided professionals ecommerce site for Japanese Beauty Products.',
    keyFeatures: 'Authentication(JWT), blogging, sslcommerz payment etc.',
    link: 'https://kireibd.com/'
  },
  {
    image: '/project/ready-kit.png',
    title: 'Ready Kit',
    description: 'A web app that provided developer kit to build management panel for CRM, LMS etc.',
    keyFeatures: 'Authentication(JWT), blogging etc.',
    link: 'https://readykit.gainhq.com/'
  },
  {
    image: '/project/sharparchive.png',
    title: 'Sharp Archive',
    description: 'A web app that provided social media monitoring and Archiving software',
    keyFeatures: 'Authentication(JWT), Archiving, blogging etc. ',
    link: 'https://sharparchive.com'
  },
  {
    image: '/project/course-cab.png',
    title: 'Course Cab',
    description: 'A web app that provided LMS system for an tranning institution',
    keyFeatures: 'Authentication(JWT), enrolling, payment system etc.',
    link: 'https://www.coursecab.com/'
  },
  {
    image: '/project/thespekers.png',
    title: 'The Speakers',
    description: 'A web app that provided micro blogging',
    keyFeatures: 'Authentication(JWT), blogging etc.',
    link: 'https://www.the-speakers.com/'
  }

])
</script>
