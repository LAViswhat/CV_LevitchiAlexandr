<script setup>
const contacts = [
  {
    id: 1,
    icon: ["fas", "phone-volume"],
    info: "+373 78757359",
    url: "tel:+373 78757359",
  },
  {
    id: 2,
    icon: ["fas", "envelope"],
    info: "lav.iswhat@gmail.com",
    url: "mailto:lav.iswhat@gmail.com",
  },
  {
    id: 3,
    icon: ["fab", "telegram"],
    info: "t.me/LAV_iswat",
    url: "https://t.me/LAV_iswat",
  },
  {
    id: 4,
    icon: ["fab", "github"],
    info: "github.com/LAViswhat",
    url: "https://github.com/LAViswhat",
  },
  {
    id: 5,
    icon: ["fab", "linkedin"],
    info: "linkedin.com/in/laviswhat",
    url: "https://www.linkedin.com/in/laviswhat",
  },
];

const skills = [
  {
    id: 1,
    title: "Frontend Development: ",
    info: "HTML, CSS, JavaScript, Vue.js, jQuery, Vite, Bootstrap, Tailwind CSS",
  },
  {
    id: 2,
    title: "E-commerce & CMS: ",
    info: "WordPress, Prestashop",
  },
  {
    id: 3,
    title: "Design & Prototyping: ",
    info: "Figma, Photoshop",
  },
  {
    id: 4,
    title: "Tools & Environment: ",
    info: "Docker, Git",
  },
];
const softSkills = [
  {
    id: 1,
    title: "Adaptability: ",
    info: "Quick to learn new technologies and frameworks to meet diverse project needs.",
  },
  {
    id: 2,
    title: "Problem-Solving: ",
    info: "Proficient at identifying issues and implementing efficient solutions in real-time.",
  },
  {
    id: 3,
    title: "Time Management: ",
    info: "Skilled in prioritizing and managing tasks to meet deadlines.",
  },
];
</script>

<template>
  <aside class="bg-primary text-lgray px-6 py-8">
    <div class="avatar">
      <img
        class="rounded-full border-secondary border-2 w-[240px]"
        src="../assets/img/avatar.jpg"
        alt="Levitchi Alexandr"
      />
    </div>
    <div class="contatcs">
      <h2 class="border-t-2 pt-1 mb-2 mt-6">Contacts</h2>
      <div class="inline-flex items-center gap-2 cursor-default">
        <font-awesome-icon :icon="['fas', 'map-location-dot']" />
        <p class="font-bold">Chisinau, Moldova</p>
      </div>
      <ul v-for="contact in contacts" class="cursor-pointer">
        <li :key="contact.key" class="inline-flex items-center gap-2">
          <font-awesome-icon :icon="contact.icon" />
          <a :href="contact.url" target="_blank" class="font-bold">{{
            contact.info
          }}</a>
        </li>
      </ul>
    </div>
    <div class="skills">
      <h2 class="border-t-2 pt-1 mb-2 mt-6">Technical Skills</h2>

      <ul v-for="skill in skills" class="cursor-default list-disc pl-4">
        <li :key="skill.key">
          <span class="font-black">{{ skill.title }}</span>
          <span>{{ skill.info }}</span>
        </li>
      </ul>
    </div>
    <div class="soft-skills">
      <h2 class="border-t-2 pt-1 mb-2 mt-6">Soft Skills</h2>

      <ul v-for="softSkill in softSkills" class="cursor-default list-disc pl-4">
        <li :key="softSkill.key">
          <span class="font-black">{{ softSkill.title }}</span>
          <span>{{ softSkill.info }}</span>
        </li>
      </ul>
    </div>
    <div class="languages">
      <h2 class="border-t-2 pt-1 mb-2 mt-6">Languages</h2>

      <ul class="cursor-default list-disc pl-4">
        <li>
          <p><span class="font-black">Russian </span>(native)</p>
        </li>
        <li>
          <p><span class="font-black">Romanian </span>(advanced)</p>
        </li>
        <li>
          <p><span class="font-black">English </span>(intermediate)</p>
        </li>
      </ul>
    </div>
    <div class="hobbies">
      <h2 class="border-t-2 pt-1 mb-2 mt-6">Hobbies and interests</h2>

      <ul class="cursor-default list-disc pl-4">
        <li>
          <p>Climbing</p>
        </li>
        <li>
          <p>Hiking</p>
        </li>
        <li>
          <p>Workout</p>
        </li>
        <li>
          <p>Reading books</p>
        </li>
        <li>
          <p>Watching movies</p>
        </li>
      </ul>
    </div>
  </aside>
</template>
