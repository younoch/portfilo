<template>
  <div class="w-[240px] h-auto bg-[#003866] flex flex-col  items-center">
    <div class="mt-[15px]">
      <NuxtImg src="/dashboard/logo.png" densities="x1" />
    </div>
    <div class="mt-[50px]">
      <NuxtImg src="/dashboard/profile.png" densities="x1" />    </div>
    <h1 class="text-[20px] font-medium mt-[20px] leading-[30px] text-white">
      Brooklyn Simon
    </h1>
    <p class="text-[14px] font-normal mt-2 text-[#F8FAFC]">
      Deal Manager
    </p>
    <NuxtLink v-for="(link, linkIdx) in sidebarLinks" :key="link.link + linkIdx" :to="link.link" class="w-full h-[48.05px] flex items-center pl-[20px] border-b-2 border-[#e4e4e4] justify-between" :class="{'bg-gradiant-btn' : route.path == link.link}">
      <div class="flex items-center gap-3 justify-center">
        <NuxtImg :src="link.icon" densities="x1" />
        <h1 class="text-[#F8FAFC] text-[14px] font-normal">
          {{ link.label }}
        </h1>
      </div>
      <div v-if="link.childLinks.length" class="float-right pr-2">
        <NuxtImg src="/sidebar/arrow-down.svg" densities="x1" />
      </div>
    </NuxtLink>
    <NuxtLink v-for="(link, linkIdx) in sidebarLinks" :key="link.link + linkIdx" :to="link.link" class="w-full h-[48.05px] flex items-center pl-[20px] border-b-2 border-[#e4e4e4] justify-between" :class="{'bg-gradiant-btn' : route.path == link.link}">
      <div class="flex items-center gap-3 justify-center">
        <NuxtImg :src="link.icon" densities="x1" />
        <h1 class="text-[#F8FAFC] text-[14px] font-normal">
          {{ link.label }}
        </h1>
      </div>
      <div v-if="link.childLinks.length" class="float-right pr-2">
        <NuxtImg src="/sidebar/arrow-down.svg" densities="x1" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const sidebarLinks = [
  {
    label: 'Dashboard',
    link: '/dashboard',
    icon: '/sidebar/home.svg',
    childLinks: []
  },
  {
    label: 'Leads',
    link: '/leads',
    icon: '/sidebar/leads.svg',
    childLinks: []
  },
  {
    label: 'Clients',
    link: '/clients',
    icon: '/sidebar/clients.svg',
    childLinks: []
  },
  {
    label: 'HR',
    link: '/hr',
    icon: '/sidebar/hr.svg',
    childLinks: []
  },
  {
    label: 'Work',
    link: '/work',
    icon: '/sidebar/hr.svg',
    childLinks: []
  },
  {
    label: 'Finance',
    link: '/finance',
    icon: '/sidebar/hr.svg',
    childLinks: []
  },
  {
    label: 'Tickets',
    link: '/tickets',
    icon: '/sidebar/tickets.svg',
    childLinks: []
  },
  {
    label: 'Events',
    link: '/events',
    icon: '/sidebar/tickets.svg',
    childLinks: []
  },
  {
    label: 'Chat',
    link: '/chat',
    icon: '/sidebar/man.svg',
    childLinks: []
  },
  {
    label: 'Recruit',
    link: '/recruit',
    icon: '/sidebar/man.svg',
    childLinks: []
  },
  {
    label: 'Knowledge base',
    link: '/knowledge-base',
    icon: '/sidebar/man.svg',
    childLinks: []
  },
  {
    label: 'Assets',
    link: '/assets',
    icon: '/sidebar/man.svg',
    childLinks: []
  },
  {
    label: 'Payroll',
    link: '/payroll',
    icon: '/sidebar/man.svg',
    childLinks: []
  },
  {
    label: 'Notice Board',
    link: '/notice-board',
    icon: '/sidebar/notice-board.svg',
    childLinks: []
  },
  {
    label: 'Reports',
    link: '/reports',
    icon: '/sidebar/notice-board.svg',
    childLinks: []
  },
  {
    label: 'Settings',
    link: '/settings',
    icon: '/sidebar/settings.svg',
    childLinks: []
  },
  {
    label: 'Upload',
    link: '/upload',
    icon: '/sidebar/upload.svg',
    childLinks: []
  },
]
</script>

<style scoped>

</style>