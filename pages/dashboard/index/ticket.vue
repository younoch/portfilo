<template>
    <div>

        <!-- dashboard menu code start here -->
        <div class=" w-[1140px] flex mx-auto grid grid-cols-3 items-center justify-center gap-5 ">
            <!-- first -->
            <nuxt-link to="/#"
                class="items-center  flex bg-white justify-between px-4 py-[20px]  h-[95px]  shadow-all mt-5 ">
                <div class="flex gap-2 items-center">
                    <NuxtImg src="/clients/fluent-person.svg" densities="x1" />
                    <p class="text-[16px] text-[#334155] font-medium">
                        Unresolved tickets
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
                class="items-center  bg-white justify-between px-4 py-[20px]  h-[95px] flex shadow-all mt-5 ">
                <div class="flex gap-2 items-center">
                    <NuxtImg src="/clients/typcn_group.svg" densities="x1" />
                    <p class="text-[16px] text-[#334155] font-medium">
                        Resolved tickets
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
                class="items-center  bg-white justify-between px-4 py-[20px]  h-[95px] flex shadow-all mt-5 ">
                <div class="flex gap-2 items-center">
                    <NuxtImg src="/clients/ant-design_project-filled.svg" densities="x1" />
                    <p class="text-[16px] text-[#334155] font-medium">
                        Total unsigned tickets
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
        </div>
        <!-- pending milestone code end here  -->

        <!-- open tickets  code start here  -->
        <div class="bg-white px-5 py-4 w-[1140px] mx-auto mt-5 shadow-all">

            <div class="flex justify-between border-b pb-2 ">
                <h1>Open Ticket</h1>
                <nuxt-link to="/#"
                    class="bg-[#2385ba] text-white text-[14px] font-normal w-[74px] h-[40px] leading-[40px] text-center rounded-md">
                    See All
                </nuxt-link>
            </div>
          

            <!-- inside grid code start here -->

            <div class="grid grid-cols-5  gap-4 mt-5">

                <!-- one-grid -->
                <div class="border-r-2 pr-[10px] py-2 space-y-6 ">
                    <nuxt-link to="/#"
                        class="bg-[#475569] px-12 py-3  text-white text-[16px] font-medium h- leading-[40px] text-center rounded-md">
                        Development
                    </nuxt-link>
                    <div class="bg-[#fef0f2] px-3 py-2 rounded-md border-l-8 border-[#f43f5e]">

                        <p class="font-medium">Authentication not working for certain users</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#f43f5e] rounded-full px-2 text-center py-1 font-normal text-white">
                            Argent
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Assigned To</h1>

                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>

                    </div>
                    <div class="bg-[#f3f3fe] px-[20px] py-2 rounded-md border-l-8 border-[#4f72f4]">

                        <p class="font-medium">Authentication not working for certain users</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#6366f1] rounded-full px-2 text-center py-1 font-normal text-white">
                            Ongoing
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Assigned To</h1>

                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>
                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>

                    </div>
                </div>
                <!-- two-grid -->
                <div class="border-r-2 pr-[10px] py-2 space-y-6 ">
                    <nuxt-link to="/#"
                        class="bg-[#475569] px-20 py-3 w-fit text-white text-[16px] font-medium h- leading-[40px] text-center rounded-md">
                        SQA
                    </nuxt-link>
                    <div class="bg-[#f1f5f9] px-3 py-2 rounded-md  ">

                        <p class="font-medium">Slow loading times on homepage</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#d97706] rounded-full px-2 text-center py-1 font-normal text-white">
                            Resolved
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Assigned To</h1>

                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>

                    </div>
                    <div class="bg-[#f3f3fe] px-[20px] py-2 rounded-md ">

                        <p class="font-medium">Inconsistent data formatting across platforms</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#4b5563] rounded-full px-2 text-center py-1 font-normal text-white">
                            Closed
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Not Assigned</h1>

                       

                    </div>
                </div>
                 <!-- three-grid -->
                 <div class="border-r-2 pr-[10px] py-2 space-y-6 ">
                    <nuxt-link to="/#"
                        class="bg-[#475569] px-[73px] py-3  text-white text-[16px] font-medium h- leading-[40px] text-center rounded-md">
                        Design
                    </nuxt-link>
                    <div class="bg-[#fef0f2] px-3 py-2 rounded-md ">

                        <p class="font-medium">Authentication not working for certain users</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#f43f5e] rounded-full px-2 text-center py-1 font-normal text-white">
                            Argent
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Assigned To</h1>

                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>

                    </div>
                    <div class="bg-[#f3f3fe] px-[20px] py-2 rounded-md ">

                        <p class="font-medium">Authentication not working for certain users</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#6366f1] rounded-full px-2 text-center py-1 font-normal text-white">
                            Ongoing
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Assigned To</h1>

                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>
                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>

                    </div>
                </div>
               <!-- four-grid -->
                <div class="border-r-2 pr-[10px] py-2 space-y-6 ">
                    <nuxt-link to="/#"
                        class="bg-[#475569] px-20 py-3 w-fit text-white text-[16px] font-medium h- leading-[40px] text-center rounded-md">
                        App
                    </nuxt-link>
                   
                    <div class="bg-[#f3f3fe] px-[20px] py-2 rounded-md ">

                        <p class="font-medium">Inconsistent data formatting across platforms</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#4b5563] rounded-full px-2 text-center py-1 font-normal text-white">
                            Closed
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Not Assigned</h1>

                       

                    </div>
                </div>
               <!-- five-grid -->
                <div class=" pr-[10px] py-2 space-y-6 ">
                    <nuxt-link to="/#"
                        class="bg-[#475569] px-20 py-3 w-fit text-white text-[16px] font-medium h- leading-[40px] text-center rounded-md">
                        HRM
                    </nuxt-link>
                    <div class="bg-[#f1f5f9] px-3 py-2 rounded-md  ">

                        <p class="font-medium">Slow loading times on homepage</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#059669] rounded-full px-2 text-center py-1 font-normal text-white">
                            Resolved
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Assigned To</h1>

                        <div class="flex items-center mt-2 gap-2">
                            <NuxtImg src="dashboard/clietns-profile.png" densities="x1" />
                            <h1 class="text[12px] font-bold text-[#475569]">Esther Howard</h1>
                        </div>

                    </div>
                    <div class="bg-[#f3f3fe] px-[20px] py-2 rounded-md ">

                        <p class="font-medium">Inconsistent data formatting across platforms</p>
                        <div class="flex items-center justify-between mt-3">
                            <h1 class="text-gray-600 text-[14px] font-normal">$30,700</h1>
                            <h1 class="text-[#8B5CF6] text-[14px] font-normal">03 Issue</h1>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <h1 class="text-[#64748B] text-[12px] font-normal">April 12, 2023</h1>
                            <h1 class="text-[#64748B] text-[12px] font-normal">10:19 AM</h1>
                        </div>
                        <NuxtLink to="/dashboard"
                            class="text-[10px] mt-2 flex justify-center gap-2 w-20 bg-[#4b5563] rounded-full px-2 text-center py-1 font-normal text-white">
                            Closed
                        </NuxtLink>
                        <h1 class="text-[#334155] text-[12px] mt-1 font-normal">Not Assigned</h1>

                       

                    </div>
                </div>
            </div>
            <!-- inside grid code end here -->
        </div>
        <!-- open tickets  code start here  -->

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>