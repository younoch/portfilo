<template>
  <div>
    <PageTIiteDate title="Dashboard" props-date="2:40:23 PM" />

    <div class="flex gap-4 px-6 mb-2">
      <NuxtLink v-for="(item, index) in dashboardPages" :key="index+item.label" :to="item.route" class=" py-2 px-3 rounded-md" :class="route.path == item.route? 'bg-bluePrimary text-white' : 'bg-dark200 text-gray-600'">
        {{ item.label }}
      </NuxtLink>
    </div>

    <ProfileCard />

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import PageTIiteDate from '@/components/base/PageTIiteDate.vue'
import ProfileCard from '@/components/dashboard/ProfileCard.vue'
const route = useRoute();

const dashboardPages = ref([
  {
    label: 'OverView',
    route: '/dashboard/overview'
  },
  {
    label: 'Project',
    route: '/dashboard/project'
  },
  {
    label: 'Client',
    route: '/dashboard/client'
  },
  {
    label: 'HR',
    route: '/dashboard/hr'
  },
  {
    label: 'Ticket',
    route: '/dashboard/ticket'
  },
  {
    label: 'Finence',
    route: '/dashboard/finence'
  }
])
</script>

<style scoped lang="scss">

</style>
