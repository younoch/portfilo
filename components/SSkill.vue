<template>
  <section id="s-skills">
    <div class="grid-layout">
      <div id="skills">
        <article id="skills-text">
          <h2 class="delaySmallReveal text-2xl md:text-3xl">
            Skills <span>.</span>
          </h2>
          <p class="delayMediumReveal changeDescription">
            Showcasing my expertise in front-end and back-end technologies
          </p>
        </article>

        <div id="skills-cards">
          <article class="html intervalCardReveal">
            <img
              src="/icons/html.svg"
              width="60px"
              height="60px"
              alt="ícone do html"
            >
          </article>
          <article class="css intervalCardReveal">
            <img
              src="/icons/css.svg"
              width="60px"
              height="60px"
              alt="ícone do css"
            >
          </article>
          <article class="js intervalCardReveal">
            <img
              src="/icons/javascript.svg"
              width="60px"
              height="60px"
              alt="ícone do javascript"
            >
          </article>
          <article class="sass intervalCardReveal">
            <img
              src="/icons/sass.svg"
              width="60px"
              height="60px"
              alt="ícone do sass"
            >
          </article>
          <article class="react intervalCardReveal">
            <nuxt-icon class=" text-5xl text-[#986dff]" name="vue" />
          </article>
          <article class="next intervalCardReveal">
            <nuxt-icon class=" text-5xl text-[#986dff]" name="nuxt" />
          </article>
          <article class="styled intervalCardReveal">
            <img
              src="/icons/styled-components.svg"
              width="60px"
              height="60px"
              alt="ícone do styled"
            >
          </article>
          <article class="tailwind intervalCardReveal">
            <img
              src="/icons/tailwindcss.svg"
              width="60px"
              height="60px"
              alt="ícone do tailwind"
            >
          </article>

          <article class="radix intervalCardReveal">
            <img
              src="/icons/radix.svg"
              width="60px"
              height="60px"
              alt="ícone do radix"
            >
          </article>

          <article class="typescript intervalCardReveal">
            <img
              src="/icons/typescript.svg"
              width="60px"
              height="60px"
              alt="ícone do typescript"
            >
          </article>

          <article class="storybook intervalCardReveal">
            <img
              src="/icons/storybook.svg"
              width="60px"
              height="60px"
              alt="ícone do storybook"
            >
          </article>

          <article class="cypress intervalCardReveal">
            <img
              src="/icons/cypress.svg"
              width="60px"
              height="60px"
              alt="ícone do cypress"
            >
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
