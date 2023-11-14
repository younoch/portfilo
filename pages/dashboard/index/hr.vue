<template>
  <div>
    <!-- dashboard menu code start here -->
    <div class=" w-[1140px] flex mx-auto grid grid-cols-4 items-center justify-center gap-5 ">
      <!-- first -->
      <nuxt-link
        to="/#"
        class="items-center  flex bg-white justify-between px-4 py-[20px] w-[270px] h-[95px]  shadow-all mt-5 "
      >
        <div class="flex gap-2 items-center">
          <NuxtImg src="/clients/fluent-person.svg" densities="x1" />
          <p class="text-[16px] text-[#334155] font-medium">
            Total Clients
          </p>
        </div>
        <div>
          <h1 class="text-[28px] font-medium text-[#2385BA]">
            12
          </h1>
        </div>
      </nuxt-link>
      <!-- two -->
      <nuxt-link
        to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 "
      >
        <div class="flex gap-2 items-center">
          <NuxtImg src="/clients/typcn_group.svg" densities="x1" />
          <p class="text-[16px] text-[#334155] font-medium">
            Total Leads
          </p>
        </div>
        <div>
          <h1 class="text-[28px] font-medium text-[#2385BA]">
            12
          </h1>
        </div>
      </nuxt-link>
      <!-- three -->
      <nuxt-link
        to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 "
      >
        <div class="flex gap-2 items-center">
          <NuxtImg src="/clients/ant-design_project-filled.svg" densities="x1" />
          <p class="text-[16px] text-[#334155] font-medium">
            Total Projects
          </p>
        </div>
        <div>
          <h1 class="text-[28px] font-medium text-[#2385BA]">
            12
          </h1>
        </div>
      </nuxt-link>
      <!-- four -->
      <nuxt-link
        to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 "
      >
        <div class="flex gap-2 items-center">
          <NuxtImg src="/clients/iconamoon_invoice-fill.svg" densities="x1" />
          <p class="text-[16px] text-[#334155] font-medium">
            Contracts
            generated
          </p>
        </div>
        <div>
          <h1 class="text-[28px] font-medium text-[#2385BA]">
            12
          </h1>
        </div>
      </nuxt-link>

      <!-- five -->
      <nuxt-link
        to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 "
      >
        <div class="flex gap-2 items-center">
          <NuxtImg src="/tracker/mdi-clock.svg" densities="x1" />
          <p class="text-[16px] text-[#334155] font-medium">
            Contracts signed
          </p>
        </div>
        <div>
          <h1 class="text-[28px] font-medium text-[#2385BA]">
            12
          </h1>
        </div>
      </nuxt-link>
    </div>
    <!-- dashboard menu code end here -->

    <!-- graph code start here -->

    <div class="grid grid-cols-2 gap-6 justify-center px-5 mt-5">
      <div class="border-red-500 border-2 w-[555px] h-[152px]">
        graph
      </div>
      <div class="border-red-500 border-2 w-[555px] h-[152px]">
        graph
      </div>
    </div>
    <!-- graph code end here -->

    <!-- pending milestone code start here  -->
    <div class="grid grid-cols-2 gap-6 justify-center px-5 mt-5">
      <div class=" bg-white border-2 border border-red-600 w-[555px] h-[442px] shadow-all">
        <h1>graph</h1>
      </div>
      <div class=" bg-white border-2 border border-red-600 w-[555px] h-[442px] shadow-all">
        <h1>graph</h1>
      </div>
      <div class=" bg-white border-2 border border-red-600 w-[555px] h-[442px] shadow-all">
        <h1>graph</h1>
      </div>
      <div class=" bg-white border-2 border border-red-600 w-[555px] h-[442px] shadow-all">
        <h1>graph</h1>
      </div>
    </div>
    <!-- pending milestone code end here  -->

    <!-- pending headcount code start here  -->
    <div class=" gap-6 justify-center px-5 mt-5 mb-14">
      <div class=" bg-white border-2 border border-red-600 w- h-[442px] shadow-all">
        <h1>graph</h1>
      </div>
    </div>
    <!-- pending headcount code end here  -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
