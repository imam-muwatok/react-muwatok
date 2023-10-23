import React from 'react'
// import htmlLogo 'src/assets/img/skills/html.png'

import logoHtml from './../assets/img/skills/html.png'
import logoCss from './../assets/img/skills/css.png'
import logoJs from './../assets/img/skills/js-square.png'
import logoSass from './../assets/img/skills/sass.png'
import logoBootstrap from './../assets/img/skills/bootstrap.png'
import logoPhp from './../assets/img/skills/php.png'
import logoMySql from './../assets/img/skills/mysql.png'

const Skill = () => {
  return (
    <section id="clients" class="pt-36 pb-32">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Skills</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tech</h2>
            <p class="font-medium text-md text-secondary md:text-lg">Teknologi yang kami kuasai.</p>
          </div>
        </div>

        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoHtml} alt="html" />
            </div>
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoCss} alt="css" />
            </div>
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoJs} alt="js" />
            </div>
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoSass} alt="sass" />
            </div>
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoBootstrap} alt="bootstrap" />
            </div>
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoPhp} alt="php" />
            </div>
            <div class="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
              <img loading="lazy" src={'.'+logoMySql} alt="mysql" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill