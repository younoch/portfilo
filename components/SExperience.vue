<template>
  <section id="s-experience">
    <div class="grid-layout">
      <h2 class="delaySmallReveal">
        Experiences <span>.</span>
      </h2>
      <div id="experience">
        <div
          id="experience-company"
          class="option-experience intervalCardReveal"
        >
          <div v-for="(item, index) in experinceList" :key="index" class="company digitalhouse" :class="{'activeExperience' : activeSection === index }">
            <h3>{{ item.name }}</h3>
          </div>
        </div>
        <div class="text-experience intervalCardReveal">
          <div>
            <h4 class="titleExperience">
              {{ activeExperience.role }}
            </h4>
            <p class="dateExperience">
              {{ activeExperience.duration }}
            </p>
          </div>
          <h5 class="companyExperience">
            {{ activeExperience.name }}
          </h5>
          <p class="">
            Trabalhei como instrutor conteudista em frontend na Digital
            House, o trabalho consistia em criar conteúdos para as aulas de
            especialização frontend. Alguns temas dos conteúdos realizados
            foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI,
            React Hook Form e styled-components.
          </p>
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
    role: 'Full stack JavaScript Developer',
    link: 'https://www.gainhq.com/',
    reponsibilies: [
      'Monitored and ensured the quality of reusable and optimized code using ESLint, Prettier, and Volar tools.',
      'As Part of a 4-persons team that rebuilt the SaaS Application project. Used Vue 3.0 and TypeScript, improved the user experience and documentation, and finished in 3 months.',
      'Developed new features such as a dynamic Graph and Chart, a user chat module, and a data visualization component using Google Chart, Chart.js , and D3.js',
      'Debugged errors using Node.js inspector, breakpoints, browser DevTools, etc.',
      'Managed and tracked the progress of the projects using Microsoft Teams, Jira, Slack, Zenhub and ClickUp.'
    ]
  }
])
const activeExperience = experinceList.value[0]
</script>
