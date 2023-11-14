<template>
  <section id="s-about">
    <div class="grid-layout">
      <div>
        <div id="creator-photo" class="delayMediumReveal">
          <h3 class="delayExtraBigReveal">
            porfit
          </h3>
        </div>
        <div>
          <h4 class="delayMediumReveal text-lg md:text-xl">
            Who am I
          </h4>
          <h2 class="delaySmallReveal text-2xl md:text-3xl">
            Mohammad Younoch
          </h2>
          <h3 class="delayMediumReveal text-lg md:text-xl">
            Full stack web developer
          </h3>

          <p class="delayLargeReveal">
            Web development with 3+ years of experience in creating dynamic and user-friendly web applications using HTML, CSS, Node, Vue.js /Nuxt.js, Express.js, MongoDB. Experienced in front end development, back end development, database management, and web hosting.  Seeking to leverage my skills and creativity to deliver high-quality solutions for a reputable company.
          </p>
          <nav class="delayLargeReveal">
            <ul>
              <a
                href="https://www.linkedin.com/in/younoch/"
                rel="noopener"
                target="_blank"
              ><li>
                <img
                  src="/icons/linkedin.svg"
                  rel="noopener"
                  alt="Ícone do LinkedIn"
                  onload="SVGInject(this)"
                ></li></a>

              <a
                href="https://github.com/younoch"
                rel="noopener"
                target="_blank"
              ><li>
                <img
                  src="/icons/github.svg"
                  alt="Ícone do GitHub"
                  onload="SVGInject(this)"
                ></li></a>

              <a
                href="https://www.behance.net/iuricode"
                rel="noopener"
                target="_blank"
              ><li>
                <nuxt-icon  class=" text-3xl text-[#986dff]" name="stackoverflow" />
              </li></a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
