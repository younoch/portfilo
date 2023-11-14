<template>
  <div
    class="w-[1140px] mx-auto justify-between bg-white rounded-md shadow-all mt-5 px-2 py-2 flex items-center gap-2"
  >
    <!-- left side  -->
    <div class="flex gap-4 items-center">
      <div>
        <NuxtImg src="/dashboard/greating-profile.png" densities="x1" />
      </div>
      <div class=" flex flex-col gap-4">
        <div class="flex gap-6 items-center ">
          <h1 class="text-[20px] font-medium">
            Shahriar Rahman
          </h1>
          <p class="text-[20px] font-normal text-[#7f7f7f]">
            Admin
          </p>
        </div>
        <div>
          <h1 class="text-[16px] text-[#585858] font-medium">
            Emp ID: AN0002
          </h1>
        </div>
      </div>
    </div>

    <!-- right side -->
    <div class="flex gap-5 pr-4">
      <div class="flex justify-center items-center gap-2">
        <div class="bg-[#cee5d3] w-[36px] h-[36px] flex justify-center items-center rounded-md">
          <NuxtImg src="/greeting/horizontal-align-left.svg" densities="x1" />
        </div>
        <div>
          <p class="text-[12px] font-medium text-[#404040]">
            7:14 AM
          </p>
          <p class="text-[12px] font-normal text-[#616161]">
            Punch in
          </p>
        </div>
      </div>
      <div class="flex justify-center items-center gap-2">
        <div class="bg-[#ffd6db] w-[36px] h-[36px] flex justify-center items-center rounded-md">
          <NuxtImg src="/greeting/horizontal-align-right.svg" densities="x1" />
        </div>
        <div>
          <p class="text-[12px] font-medium text-[#404040]">
            05:00 PM
          </p>
          <p class="text-[12px] font-normal text-[#616161]">
            Punch Out
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
