<template>
  <section id="s-home">
    <div class="grid-layout">
      <div id="home">
        <div id="home-container-text">
          <h1 class="delayMediumReveal text-3xl md:text-4xl">
            Helping companies build  
            <span>Web App / Website</span>
            in a modern and high-quality way.
          </h1>
          <p class="typewriter text-lg md:text-xl">
            {{ showArray }}
          </p>
        </div>

        <img
          id="logo"
          src="/image/logo.svg"
          alt="Mohammad Younoch"
          width="500px"
          height="500px"
        >
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

const subtitle = 'A mix of Design, Web Development and professional skills that will make your Product stand out in the market.'
const showArray = ref('')

const makeSubtitle = () => {
  const textoArray = subtitle.split('')
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      showArray.value += letra
    }, 85 * i)
  })
}

onMounted(() => {
  makeSubtitle()
})

</script>
