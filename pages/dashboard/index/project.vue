<template>
 <div>

<!-- dashboard menu code start here -->
<div class=" w-[1140px] flex mx-auto items-center justify-center gap-5 ">
    <!-- first -->
    <nuxt-link to="/#"
        class="items-center  flex bg-white justify-between px-4 py-[20px] w-[270px] h-[95px]  shadow-all mt-5 ">
        <div class="flex gap-2 items-center">
            <NuxtImg src="/tracker/mdi-clock.svg" densities="x1" />
            <p class="text-[16px] text-[#334155] font-medium">
                Hours Logged
            </p>
        </div>
        <div>
            <h1 class="text-[28px] font-medium text-[#2385BA]">
                12
            </h1>
        </div>
    </nuxt-link>
    <!-- two -->
    <nuxt-link to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 ">
        <div class="flex gap-2 items-center">
            <NuxtImg src="/tracker/mdi-clock.svg" densities="x1" />
            <p class="text-[16px] text-[#334155] font-medium">
                Pending Tasks
            </p>
        </div>
        <div>
            <h1 class="text-[28px] font-medium text-[#2385BA]">
                12
            </h1>
        </div>
    </nuxt-link>
    <!-- three -->
    <nuxt-link to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 ">
        <div class="flex gap-2 items-center">
            <NuxtImg src="/tracker/mdi-clock.svg" densities="x1" />
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
    <nuxt-link to="/#"
        class="items-center  bg-white justify-between px-4 py-[20px] w-[270px] h-[95px] flex shadow-all mt-5 ">
        <div class="flex gap-2 items-center">
            <NuxtImg src="/tracker/mdi-clock.svg" densities="x1" />
            <p class="text-[16px] text-[#334155] font-medium">
                Unresolved Tickets
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
    <div class="border-red-500 border-2 w-[555px] h-[442px]">
        graph
    </div>
    <div class=" bg-white w-[555px] h-[442px]">
        <div class="px-4 py-4 flex justify-between items-center">
            <h1 class="text-[18px] font-medium">
                Pending milestone
            </h1>
            <nuxt-link to="/#"
                class="bg-[#2385ba] text-white text-[14px] font-normal w-[74px] h-[40px] leading-[40px] text-center rounded-md">
                See All
            </nuxt-link>
        </div>
        <div class="grid grid-cols-5 mt-3 bg-[#2385ba] px-5 py-4  ">
            <div class="flex col-span-2 items-center gap-2 ">
                <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">
                <h1 class="text-[12px] text-white font-medium">
                    Milestone title
                </h1>
            </div>
            <h1 class="text-[12px] col-span-2  text-white font-medium">
                Milestone cost
            </h1>
            <h1 class="text-[12px] col-span-1 text-white font-medium">
                Project
            </h1>
        </div>

        <div class="grid grid-cols-5 border-b-2 justify-center px-5 py-4  ">
            <div class="flex col-span-2 items-center gap-2 ">
                <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">
                <div class="flex gap-2">
                    <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                    <div>
                        <h1 class="]
         text-[14px] font-medium">
                            name 6
                        </h1>
                        <p class="text-[#5F5F61]
         text-[14px] font-normal">
                            Senior Dev
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex col-span-2 gap-2">
                <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                <div>
                    <h1 class="]
         text-[14px] font-medium">
                        name 6
                    </h1>
                    <p class="text-[#5F5F61]
         text-[14px] font-normal">
                        Senior Dev
                    </p>
                </div>
            </div>
            <div class="flex justify-between col-span-1 items-center blue ">
                <h1 class="]
         text-[14px] font-medium">
                    3.4h
                </h1>
                <NuxtImg src="/tracker/dot-vertical-filled.svg" densities="x1" />
            </div>
        </div>
        <div class="grid grid-cols-5 border-b-2 justify-center px-5 py-4  ">
            <div class="flex col-span-2 items-center gap-2 ">
                <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">
                <div class="flex gap-2">
                    <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                    <div>
                        <h1 class="]
         text-[14px] font-medium">
                            name 6
                        </h1>
                        <p class="text-[#5F5F61]
         text-[14px] font-normal">
                            Senior Dev
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex col-span-2 gap-2">
                <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                <div>
                    <h1 class="]
         text-[14px] font-medium">
                        name 6
                    </h1>
                    <p class="text-[#5F5F61]
         text-[14px] font-normal">
                        Senior Dev
                    </p>
                </div>
            </div>
            <div class="flex justify-between col-span-1  items-center">
                <h1 class="]
         text-[14px] font-medium">
                    3.4h
                </h1>
                <NuxtImg src="/tracker/dot-vertical-filled.svg" densities="x1" />
            </div>
        </div>

        <div class="grid grid-cols-5 border-b-2 justify-center px-5 py-4  ">
            <div class="flex col-span-2 items-center gap-2 ">
                <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">
                <div class="flex gap-2">
                    <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                    <div>
                        <h1 class="]
         text-[14px] font-medium">
                            name 6
                        </h1>
                        <p class="text-[#5F5F61]
         text-[14px] font-normal">
                            Senior Dev
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex col-span-2 gap-2">
                <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                <div>
                    <h1 class="]
         text-[14px] font-medium">
                        name 6
                    </h1>
                    <p class="text-[#5F5F61]
         text-[14px] font-normal">
                        Senior Dev
                    </p>
                </div>
            </div>
            <div class="flex justify-between col-span-1 items-center ">
                <h1 class="]
         text-[14px] font-medium">
                    3.4h
                </h1>
                <NuxtImg src="/tracker/dot-vertical-filled.svg" densities="x1" />
            </div>
        </div>
        <div class="grid grid-cols-5  justify-center px-5 py-4  ">
            <div class="flex col-span-2 items-center gap-2 ">
                <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">
                <div class="flex gap-2">
                    <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                    <div>
                        <h1 class="]
         text-[14px] font-medium">
                            name 6
                        </h1>
                        <p class="text-[#5F5F61]
         text-[14px] font-normal">
                            Senior Dev
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex col-span-2 gap-2">
                <NuxtImg src="/dashboard/milestone-profile.png" densities="x1" />
                <div>
                    <h1 class="]
         text-[14px] font-medium">
                        name 6
                    </h1>
                    <p class="text-[#5F5F61]
         text-[14px] font-normal">
                        Senior Dev
                    </p>
                </div>
            </div>
            <div class="flex justify-between col-span-1  items-center">
                <h1 class="]
         text-[14px] font-medium">
                    3.4h
                </h1>
                <NuxtImg src="/tracker/dot-vertical-filled.svg" densities="x1" />
            </div>
        </div>
    </div>
</div>
<!-- pending milestone code end here  -->
</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
