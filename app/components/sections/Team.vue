<template>
  <section class="py-20 bg-[#FEFEFE]">
    <div class="mx-auto max-w-7xl px-6">
      <h2
        class="font-heading text-3xl md:text-5xl font-semibold text-base-black"
      >
        {{ $t("team.title") }}
      </h2>

      <div class="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <!-- Main feature -->
        <CommonTeamFeature
          v-if="team[active]"
          :member="team[active]!"
          @next="active = (active + 1) % team.length"
          @prev="active = (active - 1 + team.length) % team.length"
        />

        <!-- Side selectors (desktop only) -->
        <div class="hidden lg:flex lg:flex-col gap-4">
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
const { t } = useI18n();
const active = ref(0);

const team = computed(() => [
  {
    name: t("team.members.anthony.name"),
    position: t("team.members.anthony.position"),
    image: "/images/anthony.jpg",
    bio: t("team.members.anthony.bio"),
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/anthony-agyei-890b5387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/kwabena_osei_agyei?igsh=enJnanN4bGY5ejlp&utm_source=qr",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/share/14UUmSmnr9C/?mibextid=wwXIfr",
      },
    ],
  },
  {
    name: t("team.members.mawuena.name"),
    position: t("team.members.mawuena.position"),
    image: "/images/mawuena.jpg",
    bio: t("team.members.mawuena.bio"),
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/mawuena-acquah-payne-b213b932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/men.simaa?igsh=ZDFhNDc0dXJ0NWUz&utm_source=qr",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/share/1GEyL69V82/?mibextid=wwXIfr",
      },
    ],
  },
  {
    name: t("team.members.timothy.name"),
    position: t("team.members.timothy.position"),
    image: "/images/timmy.jpg",
    bio: t("team.members.timothy.bio"),
    socials: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/timothy-yeboah-556949172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/timmy_turner485?utm_source=qr&igsh=MW11b3ljODExc2Vwbg==",
      },
      { label: "Facebook", url: "https://www.facebook.com/share/1GU36L389a/" },
    ],
  },
]);

const sideMembers = computed(() => {
  const total = team.value.length;

  return [
    {
      member: team.value[(active.value + 1) % total]!,
      index: (active.value + 1) % total,
    },
    {
      member: team.value[(active.value + 2) % total]!,
      index: (active.value + 2) % total,
    },
  ];
});
</script>
