<template>
  <section id="about" class="bg-[#FEFEFE] py-20">
    <div class="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div class="hidden lg:block lg:col-span-5">
        <NuxtImg
          src="/images/home-about.jpg"
          alt="home-about session"
          width="520"
          height="564"
          class="rounded w-full max-w-[520px] h-auto"
          loading="lazy"
        />
      </div>

      <!-- CONTENT -->
      <div class="lg:col-span-7">
        <h2
          class="font-heading text-3xl md:text-5xl font-semibold text-base-black mb-4 max-w-[39.875rem]"
        >
          {{ $t("about.title") }}
        </h2>

        <p class="text-xl text-base-black max-w-[44.188rem] mb-4">
          {{ $t("about.description") }}
        </p>

        <!-- Bullet points -->
        <ul class="space-y-3 mb-7">
          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-200 text-base-white flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <p class="text-base-black text-xl">
              <strong class="font-semibold">
                {{ $t("about.bulletPoints.mission.label") }}
              </strong>
              {{ $t("about.bulletPoints.mission.text") }}
            </p>
          </li>

          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-200 text-base-white flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <p class="text-base-black text-xl">
              <strong class="font-semibold">
                {{ $t("about.bulletPoints.team.label") }}
              </strong>
              {{ $t("about.bulletPoints.team.text") }}
            </p>
          </li>

          <li class="flex items-start gap-3">
            <span
              class="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-200 text-base-white flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <p class="text-base-black text-xl">
              <strong class="font-semibold">
                {{ $t("about.bulletPoints.track.label") }}
              </strong>
              {{ $t("about.bulletPoints.track.text") }}
            </p>
          </li>
        </ul>

        <!-- CTA -->
        <CommonButton size="large" variant="filled" color="primary">
          {{ $t("about.cta") }}
        </CommonButton>
      </div>
    </div>
  </section>
</template>
