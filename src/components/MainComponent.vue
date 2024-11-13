<script setup>
const projects = [
  {
    id: 1,
    title: " Hairprocosmetics",
    info: "Online Shop for hair, face, and body: An e-commerce site built on Prestashop",
    live: "hairprocosmetics.com",
    url: "https://hairprocosmetics.com/",
  },
  {
    id: 2,
    title: " Italian Goods",
    info: "Test Project for New Products: Developed as a concept for an online marketplace.",
    live: "italiangoods.netlify.app",
    url: "https://italiangoods.netlify.app/",
  },
  {
    id: 3,
    title: " D'Omo Cosmetics",
    info: "E-commerce Project for Cosmetic Products: Developed and maintained a promotional site for a new gel product.",
    live: "domocosmetics.shop",
    url: "https://domocosmetics.shop/",
  },
  {
    id: 4,
    title: " D’Omo Gel Campaign",
    info: "Promotional Landing Page: Built to test sellings immediately from the landing.",
    live: "domogel-campaign-1.vercel.app",
    url: "https://domogel-campaign-1.vercel.app/",
  },
  {
    id: 5,
    title: " D’Omo Gel Campaign 2",
    info: "Promotional Landing Page: Created to support the marketing campaign for D’Omo Gel.",
    live: "domocosmetics.shop/l/en/gel-campaign-1",
    url: "https://domocosmetics.shop/l/en/gel-campaign-1/",
  },
];
</script>
<template>
  <main class="py-8 px-6">
    <h1 class="text-primary pb-1 border-b-8 border-primary">
      Alexandr Levitchi
    </h1>

    <section class="summary text-dgray mt-6">
      <h2>Professional summary</h2>
      <p class="pt-1">
        &nbsp;I’m a dedicated frontend developer with over three years of
        hands-on experience. My journey began with freelancing, where I tackled
        diverse projects that allowed me to deepen my skills, explore new
        technologies, and understand what it takes to bring products to life for
        production.
      </p>
      <p class="pt-1">
        &nbsp;After a year of freelancing, I joined an international team as a
        frontend developer, working alongside designers and backend developers
        to build dynamic web applications and improve existing platforms. In
        this role, I’ve been responsible for not only maintaining and refining
        applications but also supporting creative promotional campaigns and
        contributing to the development of entirely new projects from the ground
        up.
      </p>
      <p class="pt-1">
        &nbsp;I’m passionate about creating intuitive, user-friendly solutions
        and constantly seek opportunities to grow my technical abilities while
        delivering work that excites users and meets business goals.
      </p>
    </section>
    <section class="history text-dgray mt-6 pt-1 border-t-2 border-lgray">
      <h2>Work history</h2>
      <div class="mt-1">
        <div class="flex flex-row justify-between">
          <span class="font-black">Frontend developer</span>
          <p>09/2022 - 09/2024</p>
        </div>
        <div>
          <p>
            <span class="font-black">TakeOff Sagl</span> - Chisinau, Moldova
          </p>
        </div>
        <ul class="mt-2 pl-6 list-disc">
          <li>
            Supported and optimized the WordPress-based site locandaitalia.shop,
            handling bug fixes and creating HTML marketing emails that boosted
            user engagement.
          </li>
          <li>
            Played a key role in developing
            <a
              href="https://domocosmetics.shop/"
              target="_blank"
              class="hover:text-secondary duration-500"
              ><span class="font-bold">D'Omo Gel</span> (domocosmetics.shop)</a
            >, a platform for a new product launch, where I managed site
            development and maintenance, crafted promotional landing pages, and
            designed targeted email campaigns.
          </li>
          <li>
            Enhanced user experience for
            <a
              href="https://hairprocosmetics.com"
              target="_blank"
              class="hover:text-secondary duration-500"
              ><span class="font-bold">HPC online shop</span>
              (hairprocosmetics.com)</a
            >, a cosmetics e-commerce platform built on Prestashop, by updating
            its design, adding features, and developing promotional landing
            pages.
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <div class="flex flex-row justify-between">
          <span class="font-black">Frontend developer</span>
          <p>06/2021 - 09/2022</p>
        </div>
        <div>
          <p><span class="font-black">Freelance</span> - Chisinau, Moldova</p>
        </div>
        <ul class="mt-2 pl-6">
          <li class="list-disc">
            Developed custom frontend solutions for various clients, focusing on
            delivering responsive designs with intuitive interfaces.
          </li>
        </ul>
      </div>
    </section>
    <section class="projects text-dgray mt-6 pt-1 border-t-2 border-lgray">
      <h2>Projects</h2>
      <div class="mt-1">
        <ul v-for="project in projects">
          <li :key="project.id">
            <p class="font-black">{{ project.id }}. {{ project.title }}</p>
            <ul class="list-disc pl-6">
              <li>{{ project.info }}</li>
              <li>
                <span class="font-bold">Live: </span>
                <a :href="project.url" target="_blank">{{ project.live }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section class="education text-dgray mt-6 pt-1 border-t-2 border-lgray">
      <h2>Education</h2>
      <div class="mt-1">
        <div>
          <p>
            <span class="font-black"
              >Master's Degree in Engineering and Logistics, </span
            >2010 - 2015
          </p>
        </div>
        <div>
          <p>
            <span class="font-black">Technical University of Moldova, </span
            >Chisinau, Moldova
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
li {
  @apply pb-1;
}
a {
  @apply underline;
}
</style>
