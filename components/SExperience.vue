<template>
  <section id="s-experience">
    <div class="grid-layout">
      <h2 class="delaySmallReveal text-2xl md:text-3xl">
        Experiences <span>.</span>
      </h2>
      <div id="experience">
        <div
          id="experience-company"
          class="option-experience intervalCardReveal"
        >
          <div v-for="(item, index) in experinceList" :key="index" class="company digitalhouse" :class="{'activeExperience' : activeSection === index }" @click="cheangActive(index)">
            <h3>{{ item.name }}</h3>
          </div>
        </div>
        <div class="text-experience intervalCardReveal">
          <div>
            <h4 class="titleExperience text-lg font-medium">
              {{ activeExperience.role }}
            </h4>
            <p class="dateExperience">
              {{ activeExperience.duration }}
            </p>
          </div>
          <h5 class="companyExperience">
            {{ activeExperience.name }}
          </h5>

          <ol class="list-decimal ml-3">
            <li v-for="(res, idx) in activeExperience.reponsibilies" :key="`res${idx}`" class="my-2">
              {{ res }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const activeSection = ref<number>(0)
const experinceList = ref([
  {
    name: 'Gain Solutions',
    duration: 'May,2023 - Present',
    role: 'JavaScript Developer',
    link: 'https://www.gainhq.com/',
    reponsibilies: [
      'Monitored and ensured the quality of reusable and optimized code using ESLint, Prettier, and Volar tools.',
      'As Part of a 4-persons team that rebuilt the SaaS Application project. Used Vue 3.0 and TypeScript, improved the user experience and documentation, and finished in 3 months.',
      'Developed new features such as a dynamic Graph and Chart, a user chat module, and a data visualization component using Google Chart, Chart.js , and D3.js',
      'Debugged errors using Node.js inspector, breakpoints, browser DevTools, etc.',
      'Managed and tracked the progress of the projects using Microsoft Teams, Jira, Slack, Zenhub and ClickUp.'
    ]
  },
  {
    name: 'Tork Inc',
    duration: 'January,2022- May 2023',
    role: 'Full stack JavaScript Developer',
    link: 'https://www.gainhq.com/',
    reponsibilies: [
      'Developed SEO and Server-side rendering oriented and se websites using Nuxt.js framework and followed SEO best practices such as meta tags, keywords, reboot, sitemaps etc.',
      'Ensure responsive design and optimal performance across all microsites.',
      'Mentored a team of 6-7 intern front-end developers, fostering their growth and development in the field.',
      'Debugged errors using Node.js inspector, breakpoints, browser DevTools, etc.',
      'Managed and tracked the progress of the projects using Microsoft Teams, Jira, Slack, Zenhub and YouTrack.'
    ]
  },
  {
    name: 'Developer Experience Hub',
    duration: 'April,2021- Dec,2021',
    role: 'Jr. Frontend Developer (Vue.js / Nuxt.js)',
    link: 'https://devxhub.com/',
    reponsibilies: [
      'Created user-friendly and responsive websites and web applications using Vue.js, Nuxt.js, Vue CLI and other web technologies.',
      'Worked with RESTful APIs to integrate data from various sources and ensure smooth functionality.',
      'Tested and debugged code using various tools.'
    ]
  }
])
const activeExperience = ref(experinceList.value[0])

const cheangActive = (index: number) => {
  activeExperience.value = experinceList.value[index]
  activeSection.value = index
}
</script>
