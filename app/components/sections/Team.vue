<template>
  <section class="py-20 bg-[#FEFEFE]">
    <div class="mx-auto max-w-7xl px-6">
      <h2
        class="font-heading text-3xl md:text-5xl font-semibold text-base-black"
      >
        Our Experts, Your Partners
      </h2>

      <div class="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <!-- Main feature -->
        <CommonTeamFeature v-if="team[active]" :member="team[active]!" />

        <!-- Side selectors -->
        <div class="flex lg:flex-col gap-4">
          <CommonTeamSelector
            v-for="item in sideMembers"
            :key="item.member.name"
            :image="item.member.image"
            :name="item.member.name"
            @click="active = item.index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { computed, ref } from "vue";

const active = ref(0);

const team = [
  {
    name: "Anthony Osei-Agyei",
    position: "Founder & CEO",
    image: "/images/anthony.jpg",
    bio: "Anthony brings extensive experience in legal advisory and cross-border consulting, supporting individuals and organisations navigating complex regulatory and migration landscapes. His work is grounded in clarity, trust, and a deep understanding of multicultural environments, enabling clients to make informed decisions with confidence.",
    socials: [
      { label: "LinkedIn", url: "#" },
      { label: "X", url: "#" },
    ],
  },
  {
    name: "Mawuena Osei-Agyei",
    position: "Administrative Secretary",
    image: "/images/mawuena.jpg",
    bio: "Mawuena plays a central role in the firm’s daily operations, coordinating administrative processes and ensuring smooth communication across teams and clients. With a strong eye for detail and organisation, she helps maintain efficiency, structure, and a seamless client experience.",
    socials: [
      { label: "LinkedIn", url: "#" },
      { label: "X", url: "#" },
    ],
  },
  {
    name: "Timothy Yeboah",
    position: "Consultant & Technical Advisor",
    image: "/images/timmy.jpg",
    bio: "Timothy provides technical guidance and strategic insight across digital systems and operational workflows. He supports the team by translating complex technical requirements into practical solutions, helping ensure reliability, scalability, and informed decision-making.",
    socials: [{ label: "LinkedIn", url: "#" }],
  },
];


const sideMembers = computed(() => {
  const total = team.length;

  return [
    {
      member: team[(active.value + 1) % total]!,
      index: (active.value + 1) % total,
    },
    {
      member: team[(active.value + 2) % total]!,
      index: (active.value + 2) % total,
    },
  ];
});
</script>
