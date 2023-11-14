<template>
  <header>
    <div class="grid-layout">
      <nav>
            <p class="text-white text-3xl font-bold cursor-pointer">Y<span class="text-violet-600 font-black">{ )</span>UN<span class="text-violet-600 font-black">{ )</span>CH</p>
        <div class="mobile-menu">
          <div class="line1" />
          <div class="line2" />
          <div class="line3" />
        </div>
        <ul class="nav-list">
          <li><a href="#s-home">Start</a></li>
          <li><a href="#s-about">Who am I</a></li>
          <li>
            <a href="#s-projects">Project</a>
          </li>
          <li><a href="#s-experience">Experiences</a></li>
          <!-- <li>
            <a href="#s-services">Services</a>
          </li> -->
          <li>
            <a href="#s-skills">Knowledge</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav-list {
  @apply md:text-lg;
}
</style>
