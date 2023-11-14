<template>
  <div>
    <div class="w-[1140px] bg-white justify-center items-center mx-auto mt-5">
      <div class="grid grid-cols-12 h-[63px] gap-4 items-center px-4">
        <div class="col-span-4">
          <h1 class="font-medium text-[18px]">
            Leads
          </h1>
        </div>
        <div class="col-span-3 ">
          <select id="myDropdown" name="myDropdown" class="bg-[#f1f5f9] border-none w-full rounded-md ">
            <option value="" disabled selected hidden>Filter By Date</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <!-- Add more options as needed -->
          </select>

        </div>
        <div class="col-span-5 ">
          <div class="grid grid-cols-4 gap-2 ">
            <nuxt-link to="/#"
              class="bg-[#2385ba] flex text-white text-[14px] font-normal items-center justify-center gap-2 leading-[40px] text-center rounded-md ">
              <NuxtImg src="/leads/plus-circle.svg" densities="x1" /> Add Lead
            </nuxt-link>
            <nuxt-link to="/#"
              class="bg-white flex text-[#10B981] border-[#10B981] border-[1px] text-[14px] font-normal items-center justify-center gap-2 leading-[40px] text-center rounded-md">
              <NuxtImg src="/leads/door.svg" densities="x1" /> Lead form
            </nuxt-link>
            <nuxt-link to="/#"
              class="bg-white flex text-[#2385BA] border-[#2385BA] border-[1px] text-[14px] font-normal items-center justify-center gap-2 leading-[40px] text-center rounded-md">
              <NuxtImg src="/leads/blu-door.svg" densities="x1" /> Lead form
            </nuxt-link>
            <nuxt-link to="/#"
              class="bg-white flex text-[#2385BA] border-[#2385BA] border-[1px] text-[14px] font-normal items-center justify-center gap-2 leading-[40px] text-center rounded-md">
              <NuxtImg src="/leads/right-door.svg" densities="x1" /> Lead form
            </nuxt-link>

          </div>

        </div>
      </div>
    </div>
    <!-- leads table start here -->
    <div class="w-[1140px] mx-auto bg-white">
      <div class="bg-[#2385ba] grid grid-cols-12 px-4 h-[40px] items-center">
        <NuxtLink to="/dashboard" class="text-[12px] col-span-2 font-medium text-white">
          Name
        </NuxtLink>
        <NuxtLink to="/dashboard" class="text-[12px] font-medium col-span-2 text-white">
          Status
        </NuxtLink>
        <NuxtLink to="/dashboard" class="text-[12px] col-span-2 font-medium text-white">
          Email
        </NuxtLink>
        <NuxtLink to="/dashboard" class="text-[12px] col-span-2  font-medium text-white flex gap-4">
          <p> Mobile</p>
          <p>Next Follow Up</p>
        </NuxtLink>
        <NuxtLink to="/dashboard" class="text-[12px] col-span-2 font-medium text-white">
          Lead agent
        </NuxtLink>
        <NuxtLink to="/dashboard" class=" col-span- text-[12px] font-medium text-white">
          Created
        </NuxtLink>
      </div>
    </div>

    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#fff0d8] rounded-full  w-28 text-center py-1 font-medium text-[#F4A118]">
            <NuxtImg src="/leads/warning-dot.svg" densities="x1" /> Onboarding
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>
    <div class="w-[1140px] mx-auto bg-white h-[68px] items-center border-b-2  flex">
      <div class=" grid grid-cols-12 px-4 h-[40px]  justify-between items-center w-full">
        <div class="flex  items-center gap-2 col-span-2 ">
          <input id="myCheckbox" type="checkbox" name="myCheckbox" value="1">

          <div class="">
            <h1 class="
           text-[14px] font-medium ">
              Jane Cooper
            </h1>
            <p class="text-[#5F5F61]
           text-[14px] font-normal">
              Mann, Muller
            </p>
          </div>
        </div>

        <div class="col-span-2">
          <NuxtLink to="/dashboard"
            class="text-[12px] flex justify-center gap-2 w-20 bg-[#ebf1fd] rounded-full px-2 text-center py-1 font-medium text-[#2385ba]">
            <NuxtImg src="/leads/dot.svg" densities="x1" /> Active
          </NuxtLink>
        </div>
        <div class="col-span-2">
          <p class="text-[14px] text-[#5F5F61] ">
            ahmad@yahoo.com
          </p>
        </div>
        <div class="col-span-2 ">
          <h1 class="text-[14px] text-[#5F5F61]">
            (307) 555-0133
          </h1>
        </div>
        <div class="col-span-2 flex gap-1 items-center">
          <h1 class="text-[14px] text-[#5F5F61]">
            Esther Howard
          </h1>
          <NuxtImg src="/dashboard/leads.png" densities="x1" />
        </div>
        <div class="flex justify-between col-span-2">
          <h1 class=" text-[14px] text-[#5F5F61]">
            March 13, 2014
          </h1>
          <NuxtImg src="/leads/dot-vertical-filled.svg" densities="x1" />
        </div>
      </div>
    </div>

    <!-- leads table end here -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>